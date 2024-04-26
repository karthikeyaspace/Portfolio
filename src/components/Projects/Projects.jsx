
import data from './data.js'

export default function Projects() {
    return (
        <div className="projects mt-16 flex ">
            <div className="container px-16 ob-12">
                <h1 className='py-8 text-3xl text-center'>
                    My Projects
                </h1>
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 w-full">
                    {
                        data.projects.map((project, index) => (
                            <div className="max-w-96 mb-12 rounded overflow-hidden shadow-xl" key={index}>
                                <img src={project.image} className='w-full hidden sm:block' alt={project.name} />
                                <div className='px-6 py-4'>
                                    <h3 className='font-bold text-xl mb-2'>{project.name}</h3>
                                    <p className='text-gray-700 text-base'>{project.description}</p>
                                </div>
                                <div className="px-6 pt-4 pb-2  ">
                                    {
                                        project.techStack.map((tech, index) => (
                                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
                                        ))
                                    }
                                </div>
                                <div className="w-full flex flex-row justify-center mb-4">
                                    <a href={project.github} target="_blank" rel="noreferrer" >
                                        <button className='bg-slate-800 px-4 py-1 rounded-md text-sm text-white text-center hover:bg-slate-200 transition-all  hover:text-black '>GitHub</button>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}