import NextAuth, { type DefaultSession } from 'next-auth'
import { ZodError } from 'zod'
import Credentials from 'next-auth/providers/credentials'
import { signInSchema } from './lib/zod'
import { getUserFromDb } from './app/lib/actions/user'
// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from '@/utils/password'
// import { getUserFromDb } from '@/utils/db'

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
			username: string
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"]
  }
}

declare module "@auth/core/jwt" {
	interface JWT {
		id: string | undefined
	}
}

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		Credentials({
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			credentials: {
				username: {},
				password: {},
			},
			authorize: async (credentials) => {
				try {
					let user = null

					const parsed = await signInSchema.safeParseAsync(credentials)
					if (!parsed.success) {
						return null
					}
					const { username, password } = parsed.data
					// logic to salt and hash password TODO Later

					// logic to verify if the user exists
					user = await getUserFromDb(username, password)

					if (!user) {
						throw new Error('Invalid credentials.')
					}

					// return JSON object with the user data
					return user
				} catch (error) {
					if (error instanceof ZodError) {
						// Return `null` to indicate that the credentials are invalid
						return null
					}
					return null
				}
			},
		}),
	],
	//  By default, the `id` property does not exist on `token` or `session`. See the [TypeScript](https://authjs.dev/getting-started/typescript) on how to add it.
	callbacks: {
		jwt({ token, user }) {
			if (user) {
				// User is available during sign-in
				token.id = user.id
			}
			return token
		},
		session({ session, token }) {
			session.user.id = token.id!
			return session
		},
	},
})
