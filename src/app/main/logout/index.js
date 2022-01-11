import React from 'react';

function Logout(props) {

  const onLogin =()=>{
    window.location.href = './';
  }
  return (
  	  <section class="hero d-flex flex-column justify-content-center align-items-center" id="home">
            <div class="bg-overlay"></div>
               <div class="container">
                    <div class="row">
                         <div class="col-lg-8 col-md-10 mx-auto col-12">
                              <div class="hero-text mt-5 text-center">
                                    <h4 class="text-white" >
                                      Thank you for using NAAAC-North America Alumni Alliance Cup Singing Competition Voting System</h4>
                                    <h4 class="text-white" >Your votes is important to us.</h4>
                                    <h4 class="text-white" >We will keep you update on the voting result. Wish you have a nice day!</h4>
                              </div>
                               <div class="col-lg-4 col-md-4 mx-auto col-4">
                               <button  type="button" onClick={onLogin} class="form-control" id="submit-button" name="submit">Sign in to vote</button>
                              </div>
                             
                         </div>

                    </div>
               </div>
     </section>
  );
}

export default Logout;
