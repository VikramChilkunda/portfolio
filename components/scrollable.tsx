import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "@/app/experience/page";

const ScrollableContainer = ({ items }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	console.log("items: ", items)
	if (!items || items.length === 0) return null;

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="relative w-full max-w-md h-16 border rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden">
			{items.length > 1 && (
				<button
					onClick={handlePrev}
					className="absolute left-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition"
				>
					<ChevronLeft size={20} />
				</button>
			)}

			<div className="text-lg font-semibold px-4 text-center w-full">
				{items[currentIndex]}
				<ProjectCard number={currentIndex} title={items[currentIndex].title} description={items[currentIndex].description} tags={items[currentIndex].tags} imageURL={items[currentIndex].imageURL}/>
			</div>

			{items.length > 1 && (
				<button
					onClick={handleNext}
					className="absolute right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition"
				>
					<ChevronRight size={20} />
				</button>
			)}
		</div>
	);
};

export default ScrollableContainer;
