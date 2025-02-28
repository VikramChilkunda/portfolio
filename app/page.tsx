"use client"
// import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	const LinksList = () => {
		const links = [
			{ name: "GitHub", imageUrl: "github.png", url: "https://github.com/VikramChilkunda" },
			{ name: "LinkedIn", imageUrl: "linkedin.png", url: "https://www.linkedin.com/in/vikram-chilkunda" },
			{ name: "Experience", imageUrl: "sandclock.png", url: "/experience", newTab: false },
			// {name: "Education", imageUrl: "book.png", url: "https://github.com/VikramChilkunda"},
		]
		return (
			<div className='flex flex-col w-full items-start font-bold text-5xl capitalize text-black tracking-tight animate-fadeIn ml-2'>
				{ links.map((item, index) => (
					<LinkItem
						key={ index }
						name={ item.name }
						link={ item.url }
						img={ item.imageUrl }
						newtab={ item.newTab ?? true }
					/>
				)) }
			</div>
		);
	}
	const LinkItem = ({ name, link, img, newtab }) => {
		return (
			<Link href={ link } target={ newtab && '_' }>
				<div className='flex items-center mb-2'>
					<img src={ img } alt="" className='w-20 h-20 inline mr-5' />
					<p>{ name }</p>
				</div>
			</Link>
		);
	}
	if (!mounted) return null;
	return (
		<>
			{/* <Navbar /> */ }
			<main className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 pl-5 h-screen flex flex-col items-center'>
				<div className='flex flex-col lg:flex-row items-center justify-center h-fit my-auto  max-w-[80%] mx-auto'>
					<div className="max-w-full mb-10 lg:mb-0 font-bold text-5xl lg:text-8xl text-black h-fit uppercase flex flex-col justify-center lg:mr-16">
						<span className='relative left-0 animate-slideFromLeft'>
							Vikram
						</span>
						<span className='relative left-0 animate-slideFromRight'>
							Chilkunda
						</span>
						<p className='text-4xl lg:text-5xl lg:overflow-hidden lg:whitespace-nowrap ml-2 inline-block max-w-fit tracking-tight animate-typing'>full stack developer</p>
					</div>
					<div className='bg-black lg:w-2 mr-5 lg:h-full animate-grow'></div>
					<div className='flex flex-col w-full items-start font-bold text-5xl capitalize text-black tracking-tight animate-fadeIn lg:ml-2'>
						<LinksList />
					</div>
				</div>
			</main>
		</>
	)
}
