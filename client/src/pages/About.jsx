import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function About() {
    return (
        <div className='py-20 px-4 max-w-6xl mx-auto'>
            <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Real Estate</h1>
            <p className='mb-4 text-slate-700'>This is a Full stack project with React and Node.js with express.js as backend framework and MongoDB for database(MERN).</p>
            <p className='mb-4 text-slate-700'>Creator:Siddarth Babu</p>
            <p className='mb-4 text-slate-700'>Education:B.tech in Computer Science and Engineering(CSE), IIITDM, Kancheepuram.</p>
            {/* <p className='mb-4 text-slate-700'></p> */}
            <div className='text-4xl flex gap-4'>
                <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/siddarth-babu-bb043220a/")} cursor='pointer' />
                <FaGithub onClick={() => window.open("https://github.com/Siddarth2904")} cursor='pointer' />
                <CiMail onClick={() => window.open("mailto:bsiddarth729@gmail.com")} cursor='pointer' />
            </div>
            {/* <p className='mb-4 text-slate-700'></p> */}
        </div>
    )
}