type ProjectCardProps = {
	title: string,
	number: number,
	description: string,
	tags: string[],
	imageURL: string,
	link?: string,
	scaleOnHover?: boolean,
	rounded?: boolean
}
export const ProjectCard = ({ title, number, description, tags, imageURL, link = "", scaleOnHover=true, rounded=true}: ProjectCardProps) => {
	return (
		<div className={`bg-white ${rounded? 'rounded-lg' : 'rounded-none'} shadow-lg transform ${scaleOnHover? 'hover:scale-105' : ''} transition-transform duration-300 flex flex-col gap-2 overflow-hidden`}>
			<img src={ imageURL } alt={ `Project ${number}` } className="object-contain" />
			<div className="flex-1 p-6">
				<h2 className="text-xl font-bold">{ title }</h2>
				<p className="mt-2 text-gray-600">{ description }</p>
				<div className="mt-4 flex flex-wrap gap-2">
					{ tags.map((value, index) => {
						return (<span key={ index } className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">{ value }</span>);
					}) }
				</div>
			</div>
			<div >
				{ link && <a href={ link } target='_blank' className="ml-6 mb-4 block text-blue-500 hover:underline">Learn More</a> }
			</div>
		</div>
	)
}