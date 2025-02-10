import React from 'react'
import Header from '../components/header'
import DefContainer from '../components/def-container'
import Paragraph from '../components/paragraph'

const Page = () => {
	return (
		<div>
			<Header />

			<div className={`pt-[120px] max-[1246px]:pt-[112px]`}>
				<DefContainer>
					<h1 className='text-[32px] dark:text-[#fff] mb-2'>Gettings Started</h1>
					<Paragraph className='mb-4'>Hey! Here I will introduce the essentials which this app offers.</Paragraph>
					<Paragraph className='mb-4'>Before we dive into code and implementations I want to tell you why I decided to create this template.</Paragraph>
				</DefContainer>
			</div>
		</div>
	)
}

export default Page
