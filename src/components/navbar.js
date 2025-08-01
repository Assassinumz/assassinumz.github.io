import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
	const [toggleMenu, setToggleMenu] = React.useState(false);
	return (
		<>
			<div id="nav" className="w-full fixed z-20 transition-transform">
				<nav
					id="navbar"
					className="w-full flex justify-between md:justify-center items-center py-2 font-poppins"
				>
					<div className="hidden md:block nav-cont">
						<ul className="nav-ul flex flex-row">
							<li className="nav-item px-8">
								<a
									href="#whoami"
									className="nav-item hover:text-primary"
								>
									Whoami
								</a>
							</li>
							<li className="nav-item px-8">
								<a
									href="#skills"
									className="nav-item hover:text-primary"
								>
									Skills
								</a>
							</li>
						</ul>
					</div>

					<div className="nav-cont">
						<a href="/">
							<img className="nav-logo" src={logo}></img>
						</a>
					</div>

					<div className="hidden md:block nav-cont">
						<ul className="nav-ul flex flex-row">
							<li className="nav-item px-8">
								<a
									href="#projects"
									className="nav-item hover:text-primary"
								>
									Projects
								</a>
							</li>
							<li className="nav-item px-8">
								<a
									href="https://medium.com/pixiters"
									target="_blank"
									className="nav-item hover:text-primary"
								>
									Blog
								</a>
							</li>
						</ul>
					</div>

					<div className="md:hidden flex items-center mr-8">
						<button className="outline-none mobile-menu-button">
							{toggleMenu ? (
								<i
									id="menu-toggle"
									className="fas fa-times text-2xl hover:text-primary"
									onClick={() => setToggleMenu(false)}
								></i>
							) : (
								<i
									id="menu-toggle"
									className="fas fa-bars text-2xl hover:text-primary"
									onClick={() => setToggleMenu(true)}
								></i>
							)}
						</button>
					</div>
				</nav>
				{toggleMenu && (
					<div
						id="mobile-nav"
						className="flex flex-col md:hidden w-screen justify-center text-center border-b border-slate-100/10"
					>
						<ul className="flex flex-col">
							<li className="py-5">
								<a href="#whoami">Whoami</a>
							</li>
							<li className="py-5">
								<a href="#skills">Skills</a>
							</li>
							<li className="py-5">
								<a href="#projects">Projects</a>
							</li>
							<li className="py-5">
								<a
									href="https://medium.com/pixiters"
									target="_blank"
								>
									Blog
								</a>
							</li>
						</ul>
						<div className="flex justify-center items-center w-full pb-5 mt-2 mx-auto">
							<a
								href="https://github.com/Assassinumz"
								target="_blank"
							>
								<i className="mx-2 fab fa-github text-2xl  hover:scale-175 hover:text-primary transition duration-500"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/assassinumz/"
								target="_blank"
							>
								<i className="mx-2 fab fa-linkedin text-2xl  hover:scale-175 hover:text-primary transition duration-500"></i>
							</a>
							<a
								href="https://discord.gg/3nfQadt"
								target="_blank"
							>
								<i className="mx-2 fab fa-discord text-2xl  hover:scale-175 hover:text-primary transition duration-500"></i>
							</a>
							<a
								href="https://steamcommunity.com/id/Assassinumz/"
								target="_blank"
							>
								<i className="mx-2 fab fa-steam text-2xl  hover:scale-175 hover:text-primary transition duration-500"></i>
							</a>
							<a
								href="https://twitter.com/assassinumz"
								target="_blank"
							>
								<i className="mx-2 fab fa-twitter text-2xl  hover:scale-175 hover:text-primary transition duration-500"></i>
							</a>
							<a
								href="mailto:kumraz858@gmail.com"
								target="_blank"
							>
								<i className="mx-2 fas fa-envelope text-2xl  hover:scale-175 hover:text-primary transition duration-500"></i>
							</a>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
export default Navbar;
