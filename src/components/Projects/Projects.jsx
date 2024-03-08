import './Projects.css'
import data from './data.js'

export default function Projects() {
    return (
        <div className="projects">
            <div className="container">
                <h1>
                    My Projects
                </h1>
                <div className="grid">
                    {
                        data.projects.map((project, index) => (
                            <div className="card" key={index}>
                                <img src={project.image} alt={project.name} />
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <p>Technologies Stack: </p>
                                <div className="techStack">
                                    {
                                        project.techStack.map((tech, index) => (
                                            <i key={index}>{tech}</i>
                                        ))
                                    }
                                </div>
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    <button>GitHub</button>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}