import React from 'react';
import '../App.css';
import { Link } from 'react-scroll'
 import Typed from "react-typed";
 import Particles from 'react-particles';



function Hero() {
    return (
        <section id="hero" className="container">
            <div className="row">
                <div id="card" className="card text-center">
                    <div className="card-header">
                        <div className="profile-img"></div>
                        <div className="header-description">
                            <h1>Mohd Asif Khan</h1>
                            <Typed className={"descriptionTyped"} strings={["Full Stack Web Developer", "Lloyd Insitute Of Engineering & Technology", "ReactJs||C#||Asp.Net Web Api||Sql Server"]} typeSpeed={40} backSpeed={50}
                                loop/>
                            <div className="social-icons">
                                <span>
                                    <a href="https://twitter.com/_asif23" target="_"><i className="fa fa-twitter"></i></a>
                                </span>
                                <span>
                                    <a href="https://github.com/Mohdasifkhan01" target="_"><i className="fa fa-github"></i></a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/in/mohdasifkhan01/" target="_"><i
                                        className="fa fa-linkedin"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">About me</h2>
                        <p className="card-text">
                        Hello 👋🏼, I am Mohd Asif Khan, Full-Stack Web Developer, based in New Delhi, 
                        I am passionate about Web Development, .net and Sql Server. 
                        I focus on modern, responsive website solutions that are easy to use by the end user. 
                        If you have an opportunity, feel free to contact me.
                             
                    </p>
                        <a href="https://drive.google.com/drive/folders/1HtN3veelAIqd45wd6LGZ5EjOIcbB0y77?usp=sharing" target="_blank" id="download" className="btn  hero-btn">Download CV</a>
                        <Link to="projects" spy={true} smooth={true} className="btn hero-btn">My Projects</Link>
                    </div>
                </div>
            </div>
            <Link to="education" spy={true} smooth={true}>
                <div onClick="smoothScroll()" type="button" id="scroll-down" className="scroll-down">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </section>
    );
}

export default Hero;