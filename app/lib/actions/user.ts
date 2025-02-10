'use server'

import { User, signupSchema } from '@/app/types/user'
import { signIn, signOut } from '@/auth'
import { db } from '@/db'
import { usersTable } from '@/schema-db'
import { and, eq } from 'drizzle-orm'

export const signupUser = async (data: User) => {
	// artificial delay
	// await new Promise((resolve, _) => {
	// 	setTimeout(() => resolve(0), 1500)
	// })

	const parsed = await signupSchema.safeParseAsync(data)
	console.log('parsed res:', parsed)

	if (!parsed.success) {
		return { message: 'Bad account credentials', redirect: '', error: true }
	}

	const _createUserResponse = await createNewUser(parsed.data)
	
	const { username, password } = parsed.data
	// signing in a new created user
	await signIn('credentials', { username, password, redirect: false })
	
	return { message: 'Successfully created account', redirect: '/auth-welcome/profile', error: false }
}

export const loginUser = async (username: string, password: string) => {
	try {
		await signIn('credentials', { username, password, redirect: false })
		return { message: 'Logged in successfully', redirect: '/auth-welcome/profile', error: false }
	} catch (error) {
		console.log('error occured in login')
		return { message: 'Something went wrong', redirect: '', error: true }
	}
}

export const signoutUser = async () => {
	await signOut()
}

export const getUserFromDb = async (username: string, password: string) => {
	const selectRes = await db
		.select()
		.from(usersTable)
		.where(and(eq(usersTable.username, username), eq(usersTable.password, password)))

	if (selectRes.length === 0) {
		return null
	}

	return selectRes.at(0)
}

export const getUserFromDbByUsername = async (username: string) => {
	const selectRes = await db.select().from(usersTable).where(eq(usersTable.username, username))

	if (selectRes.length === 0) {
		return null
	}

	const user = selectRes.at(0)
	console.log('return user in getUserFromDbByUsername()', user)
	return user
}

export const getUserFromDbById = async (id: number | string) => {
	const selectRes = await db
		.select()
		.from(usersTable)
		.where(eq(usersTable.id, Number(id)))

	if (selectRes.length === 0) {
		console.log('Nothing was found in Users getUserFromDbById()')
		return null
	}
	const user = selectRes.at(0)
	console.log('return user in getUserFromDbById()', user)
	return user
}

const createNewUser = async (data: User) => {
	const _insertResponse = await db.insert(usersTable).values(data)
}
