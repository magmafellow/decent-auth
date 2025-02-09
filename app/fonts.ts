import { Josefin_Sans, Ubuntu, Ubuntu_Mono } from 'next/font/google'

const josefinSans = Josefin_Sans({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
})

export const ubuntu = Ubuntu({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin', 'cyrillic'],
})

export const ubuntuMono = Ubuntu_Mono({
	weight: ['400', '700'],
	subsets: ['latin', 'cyrillic'],
})

export default josefinSans
