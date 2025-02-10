'use client'

import type { MaskitoOptions } from '@maskito/core'
import { useMaskito } from '@maskito/react'
import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Button from '@/app/components/button'
import { signinSchema, signupSchema } from '@/app/types/user'
import { loginUser, signupUser } from '@/app/lib/actions/user'
import { ImSpinner7 } from 'react-icons/im'

const LoginForm = () => {
	const [response, setResponse] = useState<{message: string, error: boolean} | null>(null)

	const form = useForm<z.infer<typeof signupSchema>>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	})

	async function onSubmit(values: z.infer<typeof signupSchema>) {
		// TODO
		const loginUserResponse = await loginUser(values.username, values.password)
		// setResponse(loginUserResponse)
		console.log('submit values: ', values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='py-8 overflow-hidden px-[102px] relative rounded-[10px] bg-surfaceB'>
				<h1 className={`text-center text-[32px] mb-[28px]`}>Login</h1>
				<div className={`flex flex-col gap-4 mb-[56px] w-[260px]`}>
					<FormField
						control={form.control}
						name='username'
						render={({ field, fieldState }) => (
							<FormItem className={`flex flex-col`}>
								<FormLabel className={`text-lg font-light -mb-0.5`}>username</FormLabel>
								<FormControl className=''>
									<Input isError={!!fieldState.error?.message} placeholder='dragon, red_bird or ...' {...field} />
								</FormControl>
								<FormDescription className='sr-only'>username that will be used throughout the site</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field, fieldState }) => (
							<FormItem className={`flex flex-col`}>
								<FormLabel className={`text-lg font-light -mb-0.5`}>password</FormLabel>
								<FormControl className=''>
									<Input type='password' isError={!!fieldState.error?.message} placeholder='admin' {...field} />
								</FormControl>
								<FormDescription className='sr-only'>password that you will use for auth</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='mb-4'>
					<Button semantic='ghost' className={`w-full dark:bg-neutral dark:bg-opacity-5`}>
						Submit
					</Button>
				</div>

				{/* Info block */}
				{/* <div>
					<p>isLoading: {form.formState.isLoading ? 'True' : 'False'}</p>
					<p>isSubmitting: {form.formState.isSubmitting ? 'True' : 'False'}</p>
					<p>isSubmitted: {form.formState.isSubmitted ? 'True' : 'False'}</p>
					<p>isSubmittedSuccessful: {form.formState.isSubmitSuccessful ? 'True' : 'False'}</p>
				</div> */}

				{form.formState.isSubmitSuccessful && response?.error === false && <p className='text-success text-center'>{response.message}</p>}
				{form.formState.isSubmitSuccessful && response?.error === true && <p className='text-destructL text-center'>{response.message}</p>}

				{form.formState.isSubmitting && (
					<div className='absolute w-full h-full bg-slate-700/25 top-0 left-0 flex justify-center items-center'>
						<ImSpinner7 className='animate-spin w-10 h-10' />
					</div>
				)}
			</form>
		</Form>
	)
}

export default LoginForm
