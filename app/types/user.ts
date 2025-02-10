import { usersTable } from "@/schema-db";
import { z } from "zod";


export const signupSchema = z.object({
	username: z.string().min(2).max(50),
	first_name: z.string(),
	password: z.string().min(6).max(50),
	email: z.string().email().min(6).max(50),
	birthday: z.string().min(6).max(50),
	phone_number: z.string().min(6).max(50),
})

export const signinSchema = z.object({
	username: z.string().min(2).max(50),
	password: z.string().min(6).max(50),
})

export type OriginalUser = typeof usersTable.$inferInsert
export type User = z.infer<typeof signupSchema>
export type UserSignin = z.infer<typeof signinSchema>
