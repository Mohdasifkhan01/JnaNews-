import React, { useState, useEffect } from 'react';
import '../styles/Gallery.scss';
import Healthcare from '../images/Portfolio/App_ui.png'
import OnlineShop from '../images/Portfolio/onlineshop.jpg'
import Food from '../images/Portfolio/food.jpg'
import smartCity from '../images/Portfolio/smartCity.jpg'
 import Portfolio from '../images/Portfolio/portfolio.PNG'
 import PFE from '../images/Portfolio/pfe.PNG'
import Locar from '../images/Portfolio/locar.PNG'
import SmartCityPDF from '../files/SmartCity.pdf'


function Gallery() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [hover, setHover] = useState(false);
    const tags = ['all', 'Javascript', "ReactJS", "HTML", "C#", "CSS", "Bootstrap", "Sql Server", "Asp.net Web Api"];
    /**
     * Add portfolio project here
     */
    const portfolio = [
        {
            title: "Farm-Shivin",
            stack: "Full Stack using ReactJS",
           image: PFE,
            category: ['all', 'C#.net', 'Asp.Net Web Api', 'Sql Server', 'ReactJS', 'javascript', 'Git'],
            description: "Farm-Shivin is E-Farming Management System that is used by Customer to buy and sell the product . it main feature are:- Contract Farming ,Chatbot,goverment schemes and programme,method of agriculture etc .",
            link: 'https://farmshivin.com ',
        },
        {
            title: "Mohd Asif Khan Portfolio",
            stack: "ReactJS",
            image: Portfolio,
            category: ['all', 'ReactJS'],
            description: "All about  my career Journey .",
            link: 'https://github.com/mohdasifkhan01/mohdasifkhan_Portfolio',
        },
        {
            title: 'JnaNews',
            stack: "ReactJs using NewsApi",
            image: Food,
            category: ['all', 'ReactJs', 'NewsApi', 'JavaScript', 'Git'],
            description: "The main purpose of our application is to access current News about sport,healths,defence,entertainment,career etc.",
            link: 'https://github.com/ilyasstrh/FOOD_SYSTEM',
        },
        {
            title: 'ToDo checkout ',
            stack: "fullstack using react.net",
            image: Healthcare,
            category: ['all', 'Android', 'Gradle', 'Firebase', 'Firestore', 'Git', 'UI/UX'],
            description: "A mobile application that facilitates making appointments and monitoring patients",
            link: 'https://github.com/ilyasstrh/Health_Care_App',
        },
        {
            title: 'Online Store',
            stack: "MongoDB/Express/ReactJS/NodeJS",
            image: OnlineShop,
            category: ['all', 'ReactJS', 'NodeJS', 'MongoDB', 'Express', 'Mongoose', 'UI/UX'],
            description: "An online car rental and management platform",
            link: 'https://github.com/ilyasstrh/OnlineStore',
        },
        {
            title: 'Car rental management',
            stack: "PHP/MySQL",
            image: Locar,
            category: ['all', 'PHP', 'Javascript', 'HTML', 'CSS', 'MySQL'],
            description: "An online car rental and management platform",
        },
        {
            title: 'IoT Smart City Prototype',
            stack: "Arduino/ESP8266",
            image: smartCity,
            category: ['all','Javascript', 'HTML', 'CSS'],
            description: "IoT Smart City Prototype",
            link: SmartCityPDF,
        },
    ];

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);

    return (
        <div>
            <div id="filter">
                {/* Tags to filter projects */}
                <button className="btn btn-project">
                    <a active={filter === 'all'} onClick={() => setFilter('all')}>All</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'Javascript'} onClick={() => setFilter('Javascript')}>Javascript</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'ReactJS'} onClick={() => setFilter('ReactJS')}>ReactJS</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'UI/UX'} onClick={() => setFilter('HTML')}>HTML</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'Java'} onClick={() => setFilter('C#')}>C#</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'NodeJS'} onClick={() => setFilter('CSS')}>CSS</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'Firebase'} onClick={() => setFilter('Bootstrap')}>Bootstrap</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'MongoDB'} onClick={() => setFilter('Sql Server')}>SqlServer</a>
                </button>
                <button className="btn btn-project">
                    <a active={filter === 'Spring boot'} onClick={() => setFilter('Asp.net Web Api')}>Asp.Net Web Api</a>
                </button>
            </div>
            <div class="image-grid">
                {projects.map(item => item.filtered === true ? (
                    <div className="box" key={item.title} >
                        <div className="grid-image">
                            <img src={item.image} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
                        </div>
                        <div className={hover ? 'hidden' : 'display-content'}>
                            <h2>{item.title}</h2>
                            <p>{item.stack}</p>
                            <button className="btn hero-btn title">
                                <a id="title" href={item.link} target="_blank">Learn more</a>
                            </button>
                        </div>
                    </div>
                ) : '')}
            </div>
        </div>
    );
}

export default Gallery;