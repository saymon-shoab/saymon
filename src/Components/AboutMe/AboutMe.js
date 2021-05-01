import React from 'react';
import './AboutMe.css';
import shoab from './../../images/shoab.jpg'
const AboutMe = () => {
    return (
        <div className="">
            <div className="container about">
                <div className="row">
                    <div className="col-md-4 col-10">
                        <img style={{width:'310px'}} src={shoab} alt=""/>
                    </div>
                    <div className="col-md-8 col-10">
                        <h2>About Me</h2>
                        <p>  I am saymon shoab, I am a full stack web application developer,
                             but I am so excited about font-end-development. I can do any kind
                             of responsive website psd to html wordpress theme customize
                             Coding  is fun for me,also love to work with a team. I always 
                             interested to learn new programming language.   </p>

                         <h6>I have a good experience in react.js, javascript, es6, html5, css, bootstrap, node.js, express.js, mongodb  </h6> 
                           <div className="header-button">
                           <a href="https://drive.google.com/file/d/1n7lsCzccyaMDqK5WQMmG3L-jfKzRVi-1/view?usp=sharing" target="blank">resume</a>

                           </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AboutMe;