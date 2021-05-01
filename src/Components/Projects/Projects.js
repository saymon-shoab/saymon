import React from 'react';
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
                    <div  className="col-md-4 col-10">
                         <img style={{width:'250px'}} src={task} alt=""/>
                    </div>
                    <div className="col-md-8 col-10">
                       <h1>bike solution</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In, impedit veritatis est quo ratione nemo blanditiis 
                            dolores neque accusantium eum, ipsa nihil consequuntur
                             ut aspernatur vitae! Libero aliquid itaque exercitationem?</p>
                    </div>
                </div>
            </div>

            <div style={{marginTop:'100px'}} className="container">
                <div className="row">
                    <div  className="col-md-4 col-10">
                         <img style={{width:'250px'}} src={task1} alt=""/>
                    </div>
                    <div className="col-md-8 col-10">
                       <h1>Transport Service</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In, impedit veritatis est quo ratione nemo blanditiis 
                            dolores neque accusantium eum, ipsa nihil consequuntur
                             ut aspernatur vitae! Libero aliquid itaque exercitationem?</p>
                    </div>
                </div>
            </div>

            <div style={{marginTop:'100px'}} className="container">
                <div className="row">
                    <div  className="col-md-4 col-10">
                         <img style={{width:'250px'}} src={task2} alt=""/>
                    </div>
                    <div className="col-md-8 col-10">
                       <h1>Player selection</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In, impedit veritatis est quo ratione nemo blanditiis 
                            dolores neque accusantium eum, ipsa nihil consequuntur
                             ut aspernatur vitae! Libero aliquid itaque exercitationem?</p>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'100px'}} className="container">
                <div className="row">
                    <div  className="col-md-4 col-10">
                         <img style={{width:'250px'}} src={task3} alt=""/>
                    </div>
                    <div className="col-md-8 col-10">
                       <h1>Panda Commerce</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In, impedit veritatis est quo ratione nemo blanditiis 
                            dolores neque accusantium eum, ipsa nihil consequuntur
                             ut aspernatur vitae! Libero aliquid itaque exercitationem?</p>
                    </div>
                </div>
            </div>

            <div style={{marginTop:'100px'}} className="container">
                <div className="row">
                    <div  className="col-md-4 col-10">
                         <img style={{width:'250px'}} src={task4} alt=""/>
                    </div>
                    <div className="col-md-8 col-10">
                       <h1>Fly Ticket</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In, impedit veritatis est quo ratione nemo blanditiis 
                            dolores neque accusantium eum, ipsa nihil consequuntur
                             ut aspernatur vitae! Libero aliquid itaque exercitationem?</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;