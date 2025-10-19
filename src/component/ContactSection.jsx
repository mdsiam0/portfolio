import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

const ContactSection = () => {

  return (
    <section id='contact' className="bg-[#030517] text-white py-20 px-6">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 gap-12 md:gap-30 items-start ">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-main mb-4">Let’s Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            Like what you see? Leave me a message or contact me directly — I’ll get back to you as soon as possible.
          </p>

          <div className="space-y-2 text-gray-300">
            <p className='flex items-center gap-2'>
             
              <MdEmail /> mdsiam5112@gmail.com
            </p>
            <p className='flex items-center gap-2'>
              
              <FaSquarePhone />
              +880 1762-248517
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4"
        >
            <input
            type="hidden"
            name="access_key"
            value="a6c3e03d-5bd2-4ef0-a6f1-9e9ed8fcac6d"
          />
           
            <div>
             
              <input
                type="text"
                name="name"
               
               
                required
                className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
             
              <input
                type="email"
                name="email"
                
                
                required
                className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Email"
              />
            </div>

            {/* Message */}
            <div>
              
              <textarea
                name="message"
                
                
                rows="5"
                required
                className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Say hello..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full md:max-w-30 bg-white text-black font-semibold py-3 px-8 rounded-lg"
            >
              Send
            </button>
          </form>
      </div>
    </section>
  );
};

export default ContactSection;