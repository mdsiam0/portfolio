import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import HeroImg from '../assets/heroimg.png';


const HeroSection = () => {
    return (
        <div className='px-6 mt-14 sm:flex sm:justify-between mx-auto max-w-[1500px] lg:mt-50 mb-20'>
            <div>
                <p className='font-bold lg:text-4xl text-xl'>Hi, I am</p>
                <h1 className='font-main lg:text-6xl  text-4xl my-2 md:my-5'>Muhammad Siam</h1>
                <p className='font-bold lg:text-4xl text-xl'>A front-end developer</p>
                
                <div className='flex gap-6 mt-5 lg:mt-10'>
                    <a href=""><FaLinkedin size="30px" /></a>
                    <a href=""><FaGithub size="30px" /></a>
                    <a href=""><FaFacebook size="30px" /></a>
                    <a href=""><FaXTwitter size="30px"/></a>
                </div>
                <button className='btn text-black bg-white w-full sm:max-w-48 rounded-lg text-lg mt-10 mb-10 lg:mb-0'>My resume</button>
            </div>
            <div >
                <img className='mx-auto' src={HeroImg} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;