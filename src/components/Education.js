import React from 'react';
import '../App.css';

function Education() {
    return (
        <section id="education" className="container">
            <div className="container mt-5 mb-5">
                <h2>Education</h2>
                <ul className="timeline">
                    <li>
                        <a target="_blank" href="#"> Lloyd Insitute of Engineering & Technology
                        </a>
                        <a href="#" className="float-right">2018 - 2022</a>
                        <p>
                            B.Tech: Computer Science & Engineering
                    </p>
                    </li>
                    <li>
                        <a href="#">A.J.I.C Collage</a>
                        <a href="#" className="float-right">2017 - 2018</a>
                        <p>
                            10+2: UP Board
                    </p>
                    </li>
                    <li>
                        <a href="#">C.D.A Academy</a>
                        <a href="#" className="float-right">2014 - 2015</a>
                        <p>
                            High School: CBSE
                    </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Education;