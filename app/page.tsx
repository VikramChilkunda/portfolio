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
			<div className='flex flex-col w-full items-start font-bold text-black tracking-tight animate-fadeIn ml-2'>
				{links.map((item, index) => (
					<LinkItem
						key={index}
						name={item.name}
						link={item.url}
						img={item.imageUrl}
						newtab={item.newTab ?? true}
					/>
				))}
			</div>
		);
	}
	const LinkItem = ({ name, link, img, newtab }) => {
		return (
			<Link href={link} target={newtab ? '_' : ''}>
				<div className='flex items-center mb-2'>
					<img src={img} alt="" className='w-14 h-14 xl:w-20 xl:h-20 inline mr-5' />
					<p  className='text-4xl xl:text-5xl capitalize'>{name}</p>
				</div>
			</Link>
		);
	}
	if (!mounted) return null;
	return (
		<>
			{/* <Navbar /> */}
			<main className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 xl:pl-5 h-screen flex flex-col items-center'>
				<div className='flex flex-col xl:flex-row items-center justify-center h-fit my-auto  max-w-[80%] mx-auto'>
					<div className="max-w-full mb-10 xl:mb-0 font-bold text-5xl xl:text-7xl xl:text-left text-center text-black h-fit uppercase 
					flex flex-col justify-center xl:mr-16 items-center md:items-baseline">
						<span className='flex justify-center xl:justify-start relative left-[-5px] animate-slideFromLeft text-6xl xl:text-7xl text-center xl:text-left'>
							Vikram
						</span>
						<span className='flex justify-center xl:justify-start relative left-0 animate-slideFromRight'>
							Chilkunda
						</span>
						<p className='text-2xl xl:text-5xl overflow-hidden whitespace-nowrap xl:ml-2 inline-block max-w-fit tracking-tight animate-typing'>full stack developer</p>
					</div>
					<div className='bg-black xl:w-2 mr-5 xl:h-full animate-grow'></div>
					<LinksList />
				</div>
			</main>
		</>
	)
}
