'use client'

import type { MaskitoOptions } from '@maskito/core'
import { useMaskito } from '@maskito/react'
import type { ComponentType } from 'react'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Button from '@/app/components/button'

const formSchema = z.object({
	username: z.string().min(2).max(50),
	password: z.string().min(6).max(50),
	email: z.string().email().min(6).max(50),
  birthday: z.string().min(6).max(50),
  phone_number: z.string().min(6).max(50),
})

const digitsOnlyMask: MaskitoOptions = {
	mask: /^\d+$/,
}

const SignupForm = () => {
	const inputRef = useMaskito({ options: digitsOnlyMask })

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			password: '',
      email: '',
      birthday: '',
      phone_number: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		// TODO

		console.log('submit values: ', values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='py-8 px-[102px] rounded-[10px] bg-surfaceB'>
				<h1 className={`text-center text-[32px] mb-[28px]`}>Signup</h1>
				<div className={`flex flex-col gap-4 mb-[56px] w-[260px]`}>
					<FormField
						control={form.control}
						name='username'
						render={({ field, fieldState }) => (
							<FormItem className={`flex flex-col`}>
								<FormLabel className={`text-lg font-light -mb-0.5`}>username</FormLabel>
								<FormControl className=''>
									<Input isError={!!fieldState.error?.message} placeholder='Valhalla, Ember Alex' {...field} />
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
						render={({ field, fieldState }) => (
							<FormItem className={`flex flex-col`}>
								<FormLabel className={`text-lg font-light -mb-0.5`}>birthday</FormLabel>
								<FormControl className=''>
									<Input isError={!!fieldState.error?.message} placeholder='23/04/2005' {...field} />
								</FormControl>
								<FormDescription className='sr-only'>When were you born?</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
          <FormField
						control={form.control}
						name='phone_number'
						render={({ field, fieldState }) => (
							<FormItem className={`flex flex-col`}>
								<FormLabel className={`text-lg font-light -mb-0.5`}>phone number</FormLabel>
								<FormControl className=''>
									<Input isError={!!fieldState.error?.message} placeholder='+7 (926) 939 99-99' {...field} />
								</FormControl>
								<FormDescription className='sr-only'>Where should we call?</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div>
					<Button semantic='ghost' className={`w-full dark:bg-neutral dark:bg-opacity-5`}>
						Submit
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default SignupForm
