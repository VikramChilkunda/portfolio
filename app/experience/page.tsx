import Image from 'next/image'

export default function Page() {
	return (
		<div className='flex items-center justify-center h-fit my-auto'>
			<div className="max-w-xl font-bold text-8xl text-black h-fit uppercase flex flex-col justify-center mr-10">
				<span className='relative left-0 animate-slideFromLeft'>
					Vikram
				</span>
				<span className='relative left-0 animate-slideFromRight'>
					Chilkunda
				</span>
				<p className='text-5xl overflow-hidden whitespace-nowrap ml-2 inline-block max-w-fit tracking-tight animate-typing'>full stack developer</p>
			</div>
			
			</div>
		</div>
	)
}
