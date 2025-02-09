'use server'

import { User, signupSchema } from '@/app/types/user'
import { db } from '@/db'
import { usersTable } from '@/schema-db'

export const signupUser = async (data: User) => {
	await new Promise((resolve, _) => {
		setTimeout(() => resolve(0), 1500)
	})

	const parsed = await signupSchema.safeParseAsync(data)
	console.log('parsed res:', parsed)

	if (!parsed.success || parsed.data.username === 'magma') {
		return {message: 'Bad account credentials', error: true}
	}

	const createUserResponse = await createNewUser(parsed.data)

	return {message: 'Successfully created account', error: false}
}


const createNewUser = async (data: User) => {
	const insertResponse = await db.insert(usersTable).values(data)

}
