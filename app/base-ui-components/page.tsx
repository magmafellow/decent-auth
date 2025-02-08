import React from 'react'
import DefContainer from '@/app/components/def-container'
import Button from '@/app/components/button'
import { ubuntu } from '@/app/fonts'

const Page = () => {
	return (
		<div className={`page`}>
			<div className={`section_button border-b border-neutral2 border-dashed`}>
				<DefContainer>
					<div className={`pt-10`}>
						<h2 className={`${ubuntu.className} font-bold text-[32px] mb-8`}>Buttons</h2>

						<div className={`flex gap-4 mb-8`}>
							<Button>Sunny</Button>
							<Button>Sunny</Button>
							<Button>Sunny</Button>
							<Button>Sunny</Button>
						</div>
            <div className={`flex gap-4 mb-8`}>
							<Button semantic='neutral'>Senior</Button>
							<Button semantic='neutral'>Senior</Button>
							<Button semantic='neutral'>Seniorita</Button>
							<Button semantic='neutral'>Seniorita</Button>
						</div>
            <div className={`flex gap-4 mb-8`}>
							<Button semantic='ghost'>Buuuouu</Button>
							<Button semantic='ghost'>Buuuouu</Button>
							<Button semantic='ghost'>Buuuouu</Button>
							<Button semantic='ghost'>Buuuouu</Button>
						</div>
            <div className={`flex gap-4 mb-8`}>
							<Button semantic='destruct'>Karaul!</Button>
							<Button semantic='destruct'>Karaul</Button>
							<Button semantic='destruct'>Karaul!</Button>
							<Button semantic='destruct'>Karaul</Button>
						</div>
            <div className={`flex gap-4 mb-8`}>
							<Button rang='secondary' semantic='neutral'>Opposite</Button>
							<Button rang='secondary' semantic='neutral'>Opposite</Button>
							<Button rang='secondary' semantic='neutral'>Opposite</Button>
							<Button rang='secondary' semantic='neutral'>Opposite</Button>
						</div>
					</div>
				</DefContainer>
			</div>
      <div className={`section_typography`}>
        <DefContainer>
          
        </DefContainer>
      </div>
		</div>
	)
}

export default Page
