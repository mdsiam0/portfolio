import React from "react";
import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import { IoArrowRedo } from "react-icons/io5";
import gihubBtn from '../assets/gitlink.png'

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) return <p className="text-center mt-10">Project not found!</p>;

    return (
        <section className="py-16">
            <div className="mx-auto px-6 max-w-7xl">
                <div className="md:flex justify-between">
                   
                    <div>
                        <h1 className="text-3xl font-main  mb-4">{project.name}</h1>
                        <p className="text-2xl"><strong>Stack used:</strong> {project.techStack.join(", ")}</p>
                        <div className="flex mt-14 gap-4 ">
                            <a href={project.liveLink} target="_blank" className="btn bg-[#252840] rounded-4xl py-6 px-10">View live <IoArrowRedo /></a>
                            <a href={project.githubLink} target="_blank" className="w-16 h-16"><img className="cover" src={gihubBtn} alt="" /></a>
                            
                           
                        </div>
                        <p className="mb-4">{project.description}</p>
                    </div>
                     <div className='md:max-w-1/2'><img src={project.image} alt={project.name} className="w-full rounded-lg mb-6" /></div>
                </div>
                <div>
                    


                    <p className="mb-2"><strong>Challenges:</strong> {project.challenges}</p>
                    <p className="mb-2"><strong>Potential Improvements:</strong> {project.improvements}</p>
                </div>


            </div>
        </section>
    );
};

export default ProjectDetails;
