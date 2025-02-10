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
import { signupSchema } from '@/app/types/user'
import { signupUser } from '@/app/lib/actions/user'
import { ImSpinner7 } from 'react-icons/im'
import { useRouter } from 'next/navigation'

const birthdayMask: MaskitoOptions = {
	mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
}

const phoneMask: MaskitoOptions = {
	mask: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, '-', /\d/, /\d/],
}

type SignupResponse = { message: string; redirect: string; error: boolean }

const SignupForm = () => {
	const birthdayRef = useMaskito({ options: birthdayMask })
	const phoneRef = useMaskito({ options: phoneMask })

	const router = useRouter()

	const [response, setResponse] = useState<SignupResponse | null>(null)

	const form = useForm<z.infer<typeof signupSchema>>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			username: '',
			first_name: '',
			password: '',
			email: '',
			birthday: '',
			phone_number: '',
		},
	})

	async function onSubmit(values: z.infer<typeof signupSchema>) {
		// TODO
		const signupUserResponse = await signupUser(values)
		setResponse(signupUserResponse)

		const { redirect } = signupUserResponse
		if (redirect) {
			router.push(redirect)
		}
		console.log('submit values: ', values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='py-8 overflow-hidden px-[102px] relative rounded-[10px] bg-surfaceB'>
				<h1 className={`text-center text-[32px] mb-[28px]`}>Signup</h1>
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
						name='first_name'
						render={({ field, fieldState }) => (
							<FormItem className={`flex flex-col`}>
								<FormLabel className={`text-lg font-light -mb-0.5`}>
									name <span className='text-neutralL text-xs'>(not required)</span>
								</FormLabel>
								<FormControl className=''>
									<Input isError={!!fieldState.error?.message} placeholder='Valhalla, Ember Alex' {...field} />
								</FormControl>
								<FormDescription className='sr-only'>Your name</FormDescription>
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
					<FormField
						control={form.control}
						name='email'
						render={({ field, fieldState }) => (
							<FormItem className={`flex flex-col`}>
								<FormLabel className={`text-lg font-light -mb-0.5`}>email</FormLabel>
								<FormControl className=''>
									<Input isError={!!fieldState.error?.message} placeholder='decentmail@gmail.ussr' {...field} />
								</FormControl>
								<FormDescription className='sr-only'>your personal breeze email address</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='birthday'
						render={({ field: { value, onBlur, onChange, name, ref }, fieldState }) => (
							<FormItem className={`flex flex-col`}>
								<FormLabel className={`text-lg font-light -mb-0.5`}>birthday</FormLabel>
								<FormControl className=''>
									<Input
										isError={!!fieldState.error?.message}
										placeholder='23/04/2005'
										ref={node => {
											birthdayRef(node)
											ref(node)
										}}
										value={value}
										onBlur={onBlur}
										onInput={event => onChange(event.currentTarget.value)}
										name={name}
									/>
								</FormControl>
								<FormDescription className='sr-only'>When were you born?</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='phone_number'
						render={({ field: { value, onBlur, onChange, name, ref }, fieldState }) => (
							<FormItem className={`flex flex-col`}>
								<FormLabel className={`text-lg font-light -mb-0.5`}>phone number</FormLabel>
								<FormControl className=''>
									<Input
										isError={!!fieldState.error?.message}
										placeholder='+7 (926) 939 88-99'
										ref={node => {
											phoneRef(node)
											ref(node)
										}}
										value={value}
										onBlur={onBlur}
										onInput={event => onChange(event.currentTarget.value)}
										name={name}
									/>
								</FormControl>
								<FormDescription className='sr-only'>Where should we call?</FormDescription>
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

export default SignupForm
