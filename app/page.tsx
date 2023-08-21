import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 pl-5 h-screen flex flex-col items-center'>
			<div className='flex items-center justify-center h-fit my-auto'>
				<div className="max-w-xl font-bold text-8xl text-black h-fit uppercase flex flex-col justify-center mr-16">
					<span className='relative left-0 animate-slideFromLeft'>
						Vikram
					</span>
					<span className='relative left-0 animate-slideFromRight'>
						Chilkunda
					</span>
					<p className='text-5xl overflow-hidden whitespace-nowrap ml-2 inline-block max-w-fit tracking-tight animate-typing'>full stack developer</p>
				</div>
				<div className='bg-black w-2 mr-5 h-full animate-grow'></div>
				<div className='flex flex-col items-start font-bold text-5xl capitalize text-black tracking-tight animate-fadeIn ml-2'>
					<a href="https://github.com/VikramChilkunda/" target='_blank'>
						<div className='flex items-center mb-2'>
							<img src="github.png" alt="" className='w-20 h-20 inline mr-5'/>
							<p>github</p>
						</div>
					</a>
					<a href="https://www.linkedin.com/in/vikram-chilkunda-274a37249/" target='_blank'>
						<div className='flex items-center mb-2'>
							<img src="linkedin.png" alt="" className='w-20 h-20 inline mr-5'/>
							<p>linkedIn</p>
						</div>
					</a>
					<Link href={`/experience`}>
						<div className='flex items-center mb-2'>
							<img src="sandclock.png" alt="" className='w-20 h-20 inline mr-5'/>
							<p>experience</p>
						</div>
					</Link>
					<a href="">
						<div className='flex items-center'>
							<img src="book.png" alt="" className='w-20 h-20 inline mr-5'/>
							<p>education</p>
						</div>
					</a>
				</div>
			</div>
		</main>
	)
}
