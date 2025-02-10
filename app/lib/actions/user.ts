'use server'

import { User, signupSchema } from '@/app/types/user'
import { signIn } from '@/auth'
import { db } from '@/db'
import { usersTable } from '@/schema-db'
import { and, eq } from 'drizzle-orm'

export const signupUser = async (data: User) => {
	await new Promise((resolve, _) => {
		setTimeout(() => resolve(0), 1500)
	})

	const parsed = await signupSchema.safeParseAsync(data)
	console.log('parsed res:', parsed)

	if (!parsed.success) {
		return { message: 'Bad account credentials', error: true }
	}

	const _createUserResponse = await createNewUser(parsed.data)

	return { message: 'Successfully created account', error: false }
}

export const loginUser = async (username: string, password: string) => {
	try {
		await signIn('credentials', { username, password })
		console.log('success login in loginUser()')
	} catch (error) {
		console.log(error)
	}
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
	const selectRes = await db.select().from(usersTable).where(eq(usersTable.id, Number(id)))

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
