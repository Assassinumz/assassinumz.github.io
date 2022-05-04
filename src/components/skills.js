import React from 'react'
import c from '../assets/tech/C.svg'
import cpp from '../assets/tech/c_plus_plus.svg'
import python from '../assets/tech/python.svg'
import js from '../assets/tech/javascript.svg'
import dart from '../assets/tech/dart.svg'

import html from '../assets/tech/html.svg'
import css from '../assets/tech/css.svg'
import bootstrap from '../assets/tech/bootstrap.svg'
import tailwindcss from '../assets/tech/tailwindcss.svg'
import vue from '../assets/tech/vue.svg'
import react from '../assets/tech/react.svg'
import flask from '../assets/tech/flask.svg'
import django from '../assets/tech/django.svg'
import electron from '../assets/tech/electron.svg'
import mongo from '../assets/tech/mongo.svg'
import mysql from '../assets/tech/mysql.svg'

import git from '../assets/tech/git.svg'
import docker from '../assets/tech/docker.svg'
import azure from '../assets/tech/azure.svg'
import figma from '../assets/tech/figma.svg'

function Skill(props) {
	return (
		<div className={'w-48 md:w-36 px-1 py-2 md:py-1 m-2 rounded-lg cursor-pointer flex flex-row items-center bg-slate-800 transition ease-in-out duration-300 ' + `${props.color}`}>
			<img className="w-7" src={props.img}></img>
			<p className="ml-1">{props.sname}</p>
		</div>
	)
}

const Skills = () => {
  return (
    <div id="skills" className="w-full flex justify-center mt-52">
        <div className="w-4/5 md:w-3/5">
			<h1 className="text-3xl font-poppins"><span className="text-primary tracking-widest">2.</span><span className="font-semibold ml-2">TECH STACK</span></h1>
			<hr className="border-b-1 mt-2 border-primary w-2/12"></hr>
			<div className="w-full flex flex-col pt-12 justify-center items-center font-roboto flex-wrap">
                <h2 className="font-semibold text-2xl">Programming languages</h2>
                <div className="flex flex-row mt-3 mb-10 w-full flex-wrap justify-center md:justify-start">
					<Skill img={c} sname="C" color="hover:bg-c"/>
					<Skill img={cpp} sname="C++" color="hover:bg-cpp"/>
					<Skill img={python} sname="Python" color="hover:bg-python"/>
					<Skill img={js} sname="JavaScript" color="hover:bg-js"/>
					<Skill img={dart} sname="Dart" color="hover:bg-dart"/>
                </div>

				<h2 className="font-semibold text-2xl">Web Development</h2>
                <div className="flex flex-row mt-3 mb-10 w-full flex-wrap justify-center md:justify-start">
					<Skill img={html} sname="HTML5" color="hover:bg-html"/>
					<Skill img={css} sname="CSS3" color="hover:bg-css"/>
					<Skill img={bootstrap} sname="Bootstrap" color="hover:bg-bootstrap"/>
					<Skill img={tailwindcss} sname="Tailwindcss" color="hover:bg-tailwind"/>
					<Skill img={vue} sname="Vue.js" color="hover:bg-vue"/>
					<Skill img={react} sname="React" color="hover:bg-react"/>
					<Skill img={electron} sname="Electron" color="hover:bg-electron"/>
					<Skill img={flask} sname="Flask" color="hover:bg-slate-400"/>
					<Skill img={django} sname="Django" color="hover:bg-django"/>
					<Skill img={mongo} sname="MongoDB" color="hover:bg-mongo"/>
					<Skill img={mysql} sname="MySQL" color="hover:bg-mysql"/>
                </div>

				<h2 className="font-semibold text-2xl">Misc</h2>
                <div className="flex flex-row mt-3 w-full flex-wrap justify-center md:justify-start">
					<Skill img={git} sname="Git" color="hover:bg-git"/>
					<Skill img={docker} sname="Docker" color="hover:bg-docker"/>
					<Skill img={azure} sname="Azure" color="hover:bg-azure"/>
					<Skill img={figma} sname="Figma" color="hover:bg-figma"/>
                </div>
            </div>
		</div>
    </div>
  )
}

export default Skills