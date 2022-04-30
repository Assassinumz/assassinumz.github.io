import React from 'react'
import Typewriter from 'typewriter-effect';
import hero from '../assets/hero.svg'

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full md:w-1/2 font-roboto flex justify-center items-center flex-col">
			<h1 className="hero-title text-5xl text-primary font-semibold">Yo World!</h1>
			<h1 className="text-2xl md:text-3xl font-semibold mt-5">
			<Typewriter
				options={{
					strings: ["I'm Assassin umz.", "I'm a 1337.", "I'm a Developer.", "I'm a Gamer."],
					autoStart: true,
					loop: true,
				}}
				/>
			</h1>
		</div>
		<div className="w-1/2 flex justify-center items-center hidden md:block">
			<img className="w-full px-8" src={hero}></img>
		</div>
    </div>
  )
}

export default Hero