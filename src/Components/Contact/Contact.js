import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <section class="contactme" id="contactid">
          <div class="container headings text-center">
              <h1 class="text-center font-weight-bold" >Contact With Me</h1>
              <p class="text-center">I am here to help and answer any queston you might
			  have. </p>
          </div>
		  
		  <div class="container">
		    <div class="row">
			  <div class="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
			     <form action="/action_page.php">
				 
				 <div class="form-group">
                 <input type="text" class="form-control" placeholder="Username" id="Username" required autocomplete="off"/>
                 </div>
				 
				 <div class="form-group">
                 <input type="email" class="form-control" placeholder="Enter email" id="email" required autocomplete="off"/>
                 </div>
				 
				 <div class="form-group">
                 <input type="text" class="form-control" placeholder="Enter mobile number" id="mobile" required autocomplete="off"/>
                 </div>
				 
				 <div class="form-group">
                 <textarea class="form-control" placeholder="send me massage" rows="4" id="comment"></textarea>
                 </div>
                 <div class="d-flex justify-content-center form-button">
                 <button type="submit" class="btn btn-primary">Submit</button>
				 </div>
				 
                 </form>
  
		      </div>
		    </div>
		  </div>
         
  
  
  </section>
    );
};

export default Contact;