import React, { useState } from "react";

import vikasana from "../assets/projects/vikasana.png";
import narutoRPG from "../assets/projects/narutoRPG.png";
import ssp from "../assets/projects/ssp.png";
import phishninja from "../assets/projects/phishninja.png";
import phd from "../assets/projects/phd.png";
import le from "../assets/projects/le.png";
import hackathon from "../assets/projects/hackathon.png";
import irc from "../assets/projects/irc.png";

function Project(props) {
	return (
		<div className="w-full h-fit md:h-60 flex flex-col-reverse md:flex-row bg-slate-900 mb-5 transition-all ease-in delay-75">
			<div className="flex flex-col items-start p-5 w-full h-full">
				<h1 className="text-3xl font-roboto font-semibold">
					{props.title}
				</h1>
				<p className="mt-5 font-poppins mb-2">{props.desc}</p>
				<a href={props.link} className="mt-auto">
					<i className="fas fa-external-link-alt mr-2 text-2xl hover:text-primary"></i>
				</a>
			</div>
			<div className="w-full md:w-[60%] h-44 md:h-full">
				{props.image ? (
					<img
						className={`min-w-full max-w-full w-full h-full ${
							props.object ? "object-contain" : "object-cover"
						}`}
						src={props.image}
					/>
				) : (
					<div className="w-full h-full flex items-center justify-center py-24">
						<h2 className="text-xl text-gray-400 font-bold uppercase">
							No Image
						</h2>
					</div>
				)}
			</div>
		</div>
	);
}

const Projects = () => {
	const [showMore, setShowMore] = useState(false);
	return (
		<div id="projects" className="w-full flex justify-center mt-52 mb-8">
			<div className="w-4/5 md:w-3/5">
				<h1 className="text-3xl font-poppins">
					<span className="text-primary tracking-widest">3.</span>
					<span className="font-semibold ml-2">PROJECTS</span>
				</h1>

				<hr className="border-b-1 mt-2 border-primary w-2/12"></hr>
				<div className="w-full flex flex-col pt-12 mx-auto items-center ">
					<Project
						title="PhishNinja"
						desc="PhishNinja is a Python-based phishing detection tool that analyzes URLs to identify potential phishing threats. It uses machine learning models to assess the likelihood of a URL being malicious and helps protect users from phishing attacks."
						link="https://github.com/Assassinumz/PhishNinja"
						image={phishninja}
					/>
					<Project
						title="Myxable"
						desc="Myxable is an open-source file converter featuring a user-friendly interface designed for seamless format conversions. Created during a hackathon, it supports a wide range of file formats, providing a straightforward solution for converting files efficiently and effortlessly."
						link="https://devfolio.co/projects/myxable-22b0"
						image="https://assets.devfolio.co/hackathons/13fe5179b1aa4eee8e535e300520f5df/projects/9e1ce38048aa420aa6121563092cdbc5/92956992-02b9-4c07-8a5d-e7c8e20dc97d.png"
					/>
					<Project
						title="CNTA"
						desc="The Child Nutrition Tracking App (CNTA) is a web application designed to monitor and enhance child nutrition by allowing parents and caregivers to track growth metrics. It provides personalized insights to ensure children receive balanced diets, supporting their overall health and development."
						link="https://devfolio.co/projects/child-nutrition-tracking-appcnta-a3a3"
						image="https://assets.devfolio.co/hackathons/0d46f71674fc4a23aca5216c9a40d96d/projects/4d6431c0984c478f8432f6e0c3b12360/1f9a4acb-ae28-44bb-80bc-af5ede2c413b.png"
					/>
					{showMore && (
						<>
							<Project
								title="IRC Participant App"
								desc="A comprehensive web app designed to manage participants for the International Robotics Competition 2023, featuring streamlined participant registration and automated ID generation. This app allows organizers to effortlessly oversee participant details and ensure a smooth event experience."
								link="https://irc-web-app.web.app/"
								image={irc}
							/>
							<Project
								title="PHD Management System"
								desc="PHD Management is a web application designed to streamline the management of PhD article publications. It allows for the efficient organization, submission, and tracking of academic papers, providing a comprehensive platform for researchers and administrators."
								link="https://github.com/Assassinumz/PhD_Management"
								image={phd}
							/>

							<Project
								title="Vikasana"
								desc="A static frontend website for the University's Research & Innovation team, leveraging Vue.js for component-based rendering and Tailwind CSS for streamlined styling. The site features a modern design that highlights the team’s projects and initiatives."
								link="https://team-Vikasana-PU.github.io/"
								image={vikasana}
							/>
							<Project
								title="S&S Properties"
								desc="A dynamic frontend website for SSP Group, a real estate and construction organization, built with React to reflect the company's professional theme. The site offers a sleek, user-friendly interface that showcases the organization’s projects and services, enhancing online presence and client engagement."
								link="https://www.sspgroup.org.in/"
								image={ssp}
							/>
							<Project
								title="Lethal Esports"
								desc="A dynamic web application for Lethal E-sports, designed with a sleek e-sports theme to showcase the entire roster, featuring an intuitive admin panel for seamless content updates and team management."
								link="https://github.com/Assassinumz/LethalEsports"
								image={le}
							/>
							<Project
								title="Hackathon Template"
								desc="A sleek, modern template for hosting hackathons, built with React, offering a dynamic interface. It streamlines event management with intuitive features, making it easy for organizers to set up and participants to navigate, ensuring a seamless hackathon experience."
								link="https://hackathon-afe82.web.app/"
								image={hackathon}
							/>

							<Project
								title="SPG"
								desc="SPG (Simple Payload Generator) is a CLI tool written in Python, designed to streamline the creation of msfvenom payloads across various platforms. It simplifies the process of generating custom payloads, making it easier for users to execute security assessments and penetration tests efficiently."
								link="https://github.com/Assassinumz/simple-payload-generator"
								image="https://github.com/Assassinumz/simple-payload-generator/raw/master/screenshot.png"
							/>
							<Project
								title="MongoPWN"
								desc="MongoPWN is an open-source tool that utilizes the Shodan API and Masscan port scanner to identify unsecured MongoDB instances exposed on the internet. It efficiently scans for MongoDB databases lacking authentication, helping enhance security by pinpointing vulnerable endpoints."
								link="https://github.com/Assassinumz/mongoPWN"
							/>
							<Project
								title="krutrimPY"
								desc="Krutrimpy is a Python package that serves as a wrapper for the Krutrim LLM, simplifying the integration and use of Krutrim's LLM in Python projects."
								link="https://github.com/Assassinumz/krutrimpy"
							/>

							<Project
								title="Animus"
								desc="Animus is an AIML-powered chatbot for Discord, designed to interact with users in real-time, providing engaging conversations. It integrates with Discord servers to enhance user experience with AI-driven interactions."
								link="https://github.com/Assassinumz/Animus"
							/>
							<Project
								title="NarutoRPG"
								desc="A Discord bot themed around the anime Naruto, designed for entertainment purposes, is active in over 14,000 servers with a high daily user engagement. It boasts a robust user base, managing over 100,000 profiles, and offers a rich array of interactive features to enhance the fan experience."
								link="https://top.gg/bot/592967798133620736"
								image={narutoRPG}
								object="cover"
							/>
						</>
					)}

					<div
						onClick={() => setShowMore(!showMore)}
						className="px-5 py-2 rounded-full border-2 cursor-pointer font-semibold transition-all delay-75 ease-in hover:bg-primary hover:text-[#000d1d] text-sm border-primary mt-5"
					>
						<p className="font-roboto">
							{showMore ? "Show less" : "Show More"}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
