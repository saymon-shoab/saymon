import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer class="footer-section" id="footerid">

   <div class="container">
     <div class="row">
	   <div class="col-lg-4 col-md-6 col-12 footer-div text-center">
	     <div>
		   <h3  style={{color:'#fff'}}> Saymon Shoab</h3>
		   <p>hi, this is saymon, I am a full-stack web application
                developer, but I am so excited about front-end development.
                 Coding is fun for me, also love to work with a team. 
                 I always interested to learn a new programming language. </p>
	     </div>
	   </div>
	   
	    <div class="col-lg-4 col-md-6 col-12 footer-div text-center">
	     <div>
		   <h3 style={{color:'#fff'}}>Navigation Link</h3>
		   <li><a href="#">Home</a></li>
		   <li><a href="#">About Me</a></li>
		   <li><a href="#">Projects</a></li>
		   <li><a href="#">Blogs</a></li>
		   <li><a href="#">CONTACT</a></li>
	     </div>
	   </div>
	   
	    <div class="col-lg-4 col-md-12 col-12 footer-div text-center">
	     <div>
		   <h3  style={{color:'#fff'}} >NEWSLETTER</h3>
		   <p>A newsletter is a printed or electronic report containing
		   news concerning the activities of a business or an organization.
		   </p>
		   <form>
				 <div class="input-group mb-3 subscribe">
                 <input type="text" class="form-control " placeholder="Your Email"/>
                 <div class="input-group-append">
                 <span class="input-group-text">Subscribe</span>
                 </div>
                 </div>
            </form>
		   
	     </div>
		 </div>
	   
	 </div>
	 
	 <div class="mt-5 text-center">
	 <p>Coppyright-2020 | Saymon-shoab | Refund policy | terms and conditions. | Privacy Policy</p>
	 </div>
	 
   </div>
 
</footer>
    );
};

export default Footer;