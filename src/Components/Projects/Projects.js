import React from 'react';
import './Project.css'
import task from './../../images/project1.PNG'
import task1 from './../../images/project2.PNG'
import task2 from './../../images/projects3.PNG'
import task3 from './../../images/project4.PNG'
import task4 from './../../images/project5.PNG'
const Projects = () => {
    return (
        <div>
            <div style={{marginTop:'100px'}} className="container">
                <div className="row">
                    <div  className="col-md-4 col-10 shadow">
                        <h5></h5>
                         <img style={{width:'250px'}} src={task} alt=""/>
                         <div className="project-button gap">
                             <a href="https://bike-client.web.app/" target="blank"> Live Site </a>
                         </div>
                    </div>
                    <div className="col-md-8 col-10">
                       <h1>Bike solution</h1>
                       <p> Description = This website is all about bike service.  This website have a booking system for getting service. And after getting service user can give their valuable review  </p>
                       <p>Features= 1: dynamic user review system, 2: user panel & admin   panel system, 3: Service add system, 4: service delete system </p>
                       <p>Technologies= react.js, firebase, node.js, express.js, mongodb</p>
                    </div>
                </div>
            </div>

            <div style={{marginTop:'100px'}} className="container">
                <div className="row">
                    <div  className="col-md-4 col-10 shadow">
                         <img style={{width:'250px'}} src={task1} alt=""/>
                         <div className="project-button gap">
                             <a href=" https://sleepy-villani-a459b1.netlify.app/" target="blank">Live Site </a>
                         </div>
                    </div>
                    <div className="col-md-8 col-10">
                       <h1>Transport Service</h1>
                       <p>Technologies= react.js, react router, firebase  </p>
                       <p> Features= 1: user authentication system 2: booking system</p>
                       <p>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In, impedit veritatis est quo ratione nemo blanditiis </p>
                    </div>
                </div>
            </div>

            <div style={{marginTop:'100px'}} className="container">
                <div className="row">
                    <div  className="col-md-4 col-10 shadow">
                         <img style={{width:'250px'}} src={task2} alt=""/>
                         <div className="project-button gap">
                             <a href="https://condescending-hypatia-069f08.netlify.app/" target="blank">Live Site</a>
                         </div>
                    </div>
                    <div className="col-md-8 col-10">
                       <h1>Player selection</h1>
                       <p> Technologies= react.js, api </p>
                       <p> Features: you can select a player for making a tim</p>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In, impedit veritatis est quo ratione nemo blanditiis 
                           </p>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'100px'}} className="container">
                <div className="row">
                    <div  className="col-md-4 col-10 shadow">
                         <img style={{width:'250px'}} src={task3} alt=""/>
                         <div className="project-button gap">
                             <a href="https://saymon-shoab.github.io/second-assignment/index.html" target="blank">Live Site</a>
                         </div>
                    </div>
                    <div className="col-md-8 col-10">
                       <h1>Panda Commerce</h1>
                       <p>use: HTML, CSS, JAVASCRIPT</p>
                       <p> Description: simple design for e-coommarce </p>
                    </div>
                </div>
            </div>

            <div style={{marginTop:'100px'}} className="container">
                <div className="row">
                    <div  className="col-md-4 col-10 shadow">
                         <img style={{width:'250px'}} src={task4} alt=""/>
                         <div className="project-button gap">
                             <a href="https://saymon-shoab.github.io/saymon-fly-assignment-4/index.html" target="blank">Live Site</a>
                         </div>
                    </div>
                    <div className="col-md-8 col-10">
                       <h1>Fly Ticket</h1>
                       <p>use: HTML, CSS, JAVASCRIPT</p>
                       <p> Description: this project is about a simple flying ticket booking system </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;