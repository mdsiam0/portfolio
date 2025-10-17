import React from "react";
import { Link } from "react-router";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        
        
        <div className="max-w-[1500px] mx-auto px-6 bg-[#030517] ">
           <h1 className="text-center font-main text-3xl mb-3">My Projects</h1>
           <h2 className="text-center mb-7">Here are some of my recent works that I have done</h2>
           <div className="grid md:grid-cols-3 gap-8">
                
                {projects.map((project) => (
                    <div key={project.id} className="bg-[#2B2D3A] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img src={project.image} alt={project.name} className="rounded-t-lg w-full h-62 object-cover border" />
                        <div className="px-4 py-6 flex justify-between">
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <Link
                                to={`/projects/${project.id}`}
                                className="text-white btn bg-[#777880] hover:underline font-semibold"
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        
    );
};

export default Projects;
