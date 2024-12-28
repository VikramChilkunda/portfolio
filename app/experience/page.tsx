import Image from 'next/image';

export default function Page() {
  return (
    <body className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">My Portfolio</h1>
          <div>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-4">Home</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800 mx-4">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 mx-4">Contact</a>
          </div>
        </div>
      </nav>
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex flex-col">
        <header className="text-center py-16">
          <h1 className="text-5xl font-extrabold text-white">My Projects</h1>
          <p className="text-xl text-gray-200 mt-4">A showcase of my professional and personal work</p>
        </header>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src="nowcom.jpg" alt="Project 1" className="w-full h-40 object-contain" />
            <div className="p-6">
              <h2 className="text-xl font-bold">Vehicle Description Generator</h2>
              <p className="mt-2 text-gray-600">Automating compelling descriptions of vehicles for car dealerships.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">.NET</span>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">C#</span>
              </div>
              {/* <a href="#" className="mt-4 block text-blue-500 hover:underline">Learn More</a> */}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className='h-40 p-7 flex flex-col justify-center'>
              <img src="ucla.png" alt="Project 2" className="w-full h-25 mx-auto" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold">Website Manager</h2>
              <p className="mt-2 text-gray-600">Maintain and add content to the UCLA's Electrical and Computer Engineering Department website.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Wordpress</span>
                <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">HTML</span>
              </div>
              {/* <a href="#" className="mt-4 block text-blue-500 hover:underline">Learn More</a> */}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src="nowcom.jpg" alt="Project 3" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold">Document Classifier</h2>
              <p className="mt-2 text-gray-600">Using artificial intelligence to automatically generate tags for and categorize images uploaded to a dealership listing.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">Python</span>
                <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">C#</span>
              </div>
              {/* <a href="#" className="mt-4 block text-blue-500 hover:underline">Learn More</a> */}
            </div>
          </div>
        </div>
        <div className="container mt-14 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src="mentorful.png" alt="Project 1" className="w-full object-fill" />
            <div className="p-6">
              <h2 className="text-xl font-bold">Mentorful</h2>
              <p className="mt-2 text-gray-600">Help underrepresented students achieve college admission dreams through tutoring</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">.NET</span>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">C#</span>
              </div>
              <a href="https://github.com/VikramChilkunda/mentorful" className="mt-4 block text-blue-500 hover:underline">Learn More</a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {/* <div className='h-40 p-3 flex flex-col justify-center'> */}
              <img src="goodminton.png" alt="Project 2" className="w-full object-fill" />
            {/* </div> */}
            <div className="p-6">
              <h2 className="text-xl font-bold">Goodminton</h2>
              <p className="mt-2 text-gray-600">A spinoff of badminton created using computer animation fundamentals.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">TinyGraphics</span>
                <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">JavaScript</span>
              </div>
              <a href="https://github.com/adroyalz/goodminton" className="mt-4 block text-blue-500 hover:underline">Learn More</a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src="sudokle.png" alt="Project 3" className="w-full object-fill" />
            <div className="p-6">
              <h2 className="text-xl font-bold">Sudokle</h2>
              <p className="mt-2 text-gray-600">Solve a new Sudoku puzzle each day.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">React</span>
                <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">NodeJS</span>
              </div>
              <a href="https://github.com/daduuu/sudokle" className="mt-4 block text-blue-500 hover:underline">Learn More</a>
            </div>
          </div>
        </div>
        {/* Footer */}
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

    </body>
  );
}

