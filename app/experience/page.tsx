import Image from 'next/image';
import dynamic from "next/dynamic";
import Navbar from '../../components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
// const Navbar = dynamic(() => import("../../components/Navbar"), { ssr: false });

export default function Page() {
	const ProjectList = () => {
		const projects = [
			{ title: "Vehicle Description Generator", description: "Automating compelling descriptions of vehicles for car dealerships.", tags: [".NET", "C#"], imageURL: "nowcom.jpg" },
			{ title: "Website Manager", description: "Maintain and add content to the UCLA's Electrical and Computer Engineering Department website.", tags: ["Wordpress", "HTML"], imageURL: "ucla.png", link: "https://www.ee.ucla.edu/" },
			{ title: "Document Classifier", description: "Using artificial intelligence to automatically generate tags for and categorize images uploaded to a dealership listing.", tags: ["Python", "C#"], imageURL: "nowcom.jpg" },
			{ title: "Mentorful", description: "Help underrepresented students achieve college admission dreams through tutoring.", tags: ["Next.js", "React#"], imageURL: "mentorful.png", link: "https://github.com/VikramChilkunda/mentorful" },
			{ title: "Goodminton", description: "A spinoff of badminton created using computer animation fundamentals.", tags: ["TinyGraphics", "JavaScript"], imageURL: "goodminton.png", link: "https://github.com/adroyalz/goodminton" },
			{ title: "Sudokle", description: "Solve a new Sudoku puzzle each day.", tags: ["React", "NodeJS"], imageURL: "sudokle.png", link: "https://github.com/daduuu/sudokle" },
		]
		return (
			<div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
				{ projects.map((project, index) => (
					<ProjectCard
						key={ index }
						title={ project.title }
						number={ index }
						description={ project.description }
						tags={ project.tags }
						imageURL={ project.imageURL }
						link={ project.link }
					/>
				)) }
			</div>
		);
	}
	
	return (
		<>
			<Navbar />
			<div className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex flex-col">
				<header className="text-center py-16">
					<h1 className="text-5xl font-extrabold text-white">My Projects</h1>
					<p className="text-xl text-gray-200 mt-4">A showcase of my professional and personal work</p>
				</header>
				<div className='max-w-[70%] lg:max-w-[80%] mx-auto mb-20'>
					<ProjectList />
				</div>
				{/* Footer */ }
				<footer id="contact" className="mt-auto bg-white py-6">
					<div className="container mx-auto text-center">
						<p className="text-gray-600">Vikram Chilkunda</p>
						<p className="mt-2">
							<a
								href="mailto:your.email@example.com"
								className="text-blue-500 hover:underline"
							>
								vikramchilkunda2003@gmail.com
							</a>
						</p>
					</div>
				</footer>
			</div>

		</>
	);
	
}
