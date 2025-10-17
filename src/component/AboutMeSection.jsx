import React from 'react';

const AboutMeSection = () => {
    return (
        
        <div className="bg-[#030517] max-w-[1500px] mx-auto  py-20 flex   text-[#c9d1d9] font-sans">
            <div className=" px-4 sm:px-6 lg:px-8">
                
               
                <div className="mb-12">
                    <h1 className="text-5xl font-extrabold text-white text-center mb-2">
                        About Me
                    </h1>
                    <p className="text-lg text-[#8b949e] text-center">
                        Here are some of the things you should know about me.
                    </p>
                </div>

              
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        My Journey So Far:
                    </h2>
                    <p className="leading-relaxed text-lg">
                        I started out by jumping headfirst into **React**, and honestly, I was hooked immediately! The idea of building a dynamic, component-based user interface just clicked for me. From there, I've been mastering modern JavaScript, learning how to connect the pieces and make things actually work seamlessly.
                    </p>
                </div>

                
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        What Drives Me:
                    </h2>
                    <p className="leading-relaxed text-lg">
                        I really enjoy the **front-end puzzle**. Specifically, I love figuring out the best ways to structure components using **functional programming principles**, wrestling with **CSS-in-JS solutions** or Tailwind's utility classes to nail a pixel-perfect design, and, most of all, optimizing rendering performance so the user experience is super smooth.
                    </p>
                </div>

                
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        When I'm Not Coding:
                    </h2>
                    <p className="leading-relaxed text-lg">
                        When I need a screen break, you can usually find me **exploring nature trails** or **experimenting with a new recipe**. There's something therapeutic about following a process and creating something beautiful or delicious. It's surprisingly similar to debugging—a little patience and precision goes a long way!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSection;