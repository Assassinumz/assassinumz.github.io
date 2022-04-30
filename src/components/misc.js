import React from 'react'
import logo from '../assets/logo.png'

const Misc = () => {
  return (
    <>
        <div className="loader w-screen h-screen bg-back flex items-center justify-center fixed z-50 top-0 left-0">
            <div className="loader-icon">
                <img className="pac w-32 animate-spin" src={logo} />
            </div>
        </div>
        <div className="w-full flex justify-center mt-24 mb-5 items-center">
            <p className="font-roboto font-medium"><span className="font-semibold text-cyan-500">&lt;/&gt;</span> with <span className="text-rose-500 font-semibold">&lt;3</span> by <span className="text-primary">Assassin umz</span></p>
        </div>
        <div className="hidden md:flex items-center flex-col fixed bottom-0 left-10">
            <div className="flex flex-col items-center">
                <a href="https://github.com/Assassinumz" target="_blank">
                    <i className="fab fa-github text-xl mt-3 hover:scale-175 hover:text-primary transition duration-500"></i>
                </a>
                <a href="https://www.linkedin.com/in/assassinumz/" target="_blank">
                    <i className="fab fa-linkedin text-xl mt-3 hover:scale-175 hover:text-primary transition duration-500"></i>
                    
                </a>
                <a href="https://discord.gg/3nfQadt" target="_blank">
                    <i className="fab fa-discord text-xl mt-3 hover:scale-175 hover:text-primary transition duration-500"></i>
                </a>
                <a href="https://steamcommunity.com/id/Assassinumz/" target="_blank">
                    <i className="fab fa-steam text-xl mt-3 hover:scale-175 hover:text-primary transition duration-500"></i>
                </a>
                <a href="https://twitter.com/assassinumz" target="_blank">
                    <i className="fab fa-twitter text-xl mt-3 hover:scale-175 hover:text-primary transition duration-500"></i>
                </a>
                <a href="mailto:kumraz858@gmail.com" target="_blank">
                    <i className="fas fa-envelope text-xl my-3 hover:scale-175 hover:text-primary transition duration-500"></i>
                </a>
            </div>
            <div className="h-10 2xl:h-16 w-px bg-white"></div>
        </div>
    </>
  )
}

export default Misc