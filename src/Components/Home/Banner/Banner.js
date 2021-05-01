import React from 'react';
 import './Banner.css'
 import saymon from '../../../images/saymon2.png'
const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div style={{color:'black'}} className="col-lg-6 col-sm-12 text-center m-auto">
                    <h3 className="">Hi, I am Saymon Shoab</h3>
                    <h4>WEB DEVELOPER</h4>
                    <div class="header-button">
                    <a href="https://drive.google.com/file/d/1n7lsCzccyaMDqK5WQMmG3L-jfKzRVi-1/view?usp=sharing" target="blank">resume</a>
                   
                     </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img style={{width:'300px', margin:'102px'}} src={saymon} alt=""/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;