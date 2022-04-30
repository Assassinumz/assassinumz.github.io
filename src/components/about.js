import React from 'react'
import hello from '../assets/hello.svg'

const About = () => {
  return (
    <div id="whoami" className="w-full flex justify-center mt-32">
        <div className="w-4/5 md:w-3/5">
			<h1 className="text-3xl font-poppins"><span className="text-primary tracking-widest">1.</span><span className="font-semibold ml-2">WHOAMI</span></h1>
			<hr className="border-b-1 mt-2 border-primary w-2/12"></hr>
			<div className="w-full flex flex-col md:flex-row pt-12">
				<div className="w-full md:w-1/2 flex justify-center">
					<img className="w-full md:w-3/4" src={hello}></img>
				</div>
				<div className="w-full mt-5 md:mt-0 md:w-1/2 font-roboto flex justify-center flex-col">
					<p>Hey! My name is Umraz and I'm currently pursuing my B.tech degree at Presidency University, a Cyber Security Enthusiast and a Programmer. I love writing code, problem solving and learning new stuff related to computer science. My main language of working is python but I get along just fine with the other ones as well.</p>
					<br></br>
					<p>I spend my free time playing games, solving CTFs from <a className="text-primary hover:underline" href="https://app.hackthebox.com/users/28564" target="_blank">hackthebox</a> or <a className="text-primary hover:underline" href="https://www.vulnhub.com/" target="_blank">vulnhub</a> and also solving some problems from <a className="text-primary hover:underline" href="https://www.codewars.com/users/Assassinumz" target="_blank">codewars</a>.</p>
				</div>
			</div>
		</div>
    </div>
  )
}

export default About