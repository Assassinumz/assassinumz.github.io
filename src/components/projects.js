import React from 'react'

function Project(props) {
    return (
        <div className="w-64 h-80 md:h-72 flex flex-col bg-slate-900 p-3 items-center mr-3 mb-3">
            <h1 className="text-3xl font-roboto font-semibold">{props.title}</h1>
            <p className="mt-5 font-poppins text-center">{props.desc}</p>
            <a href={props.link} className="ml-auto mt-auto">
                <i className="fas fa-external-link-alt mr-2 text-2xl hover:text-primary"></i>
            </a>
        </div>
    )
}


const Projects = () => {
    return (
        <div id="projects" className="w-full flex justify-center mt-52 mb-8">
            <div className="w-4/5 md:w-3/5">
                <h1 className="text-3xl font-poppins"><span className="text-primary tracking-widest">3.</span><span className="font-semibold ml-2">PROJECTS</span></h1>
                <hr className="border-b-1 mt-2 border-primary w-2/12"></hr>
                <div className="w-full flex flex-row pt-12 mx-auto flex-wrap justify-center md:justify-start">
                    <Project title="Myxable" desc="Myxable is an open-source file converter with a very simplistic UI. It can convert files from and to multiple formats. This project was made for a hackathon." link="https://github.com/Assassinumz/myxable" />
                    <Project title="SPG" desc="SPG (Simple Payload Generator) is a CLI tool written in python which lets you generate msfvenom payloads for multiple platforms easily." link="https://github.com/Assassinumz/simple-payload-generator" />
                    <Project title="MongoPWN" desc="MongoPWN is an open source tool which uses the shodan API and a port scanner know as masscan to find mongoDB instances with no authentication on the internet." link="https://github.com/Assassinumz/mongoPWN" />
                    <Project title="Vikasana" desc="A static frontend website made for my University's Research & Innovation team. It uses Vue.js for rendering of repetitive components and Tailwindcss for some common styles." link="https://vikasana.tech/" />
                    <Project title="NarutoRPG" desc="A discord entertainment purpose bot based on the anime Naruto, It is used in 14,000 servers and has a high daily active users count. It also has about 65,000 user profiles" link="https://vikasana.tech/" />
                </div>
            </div>
        </div>
    )
}

export default Projects