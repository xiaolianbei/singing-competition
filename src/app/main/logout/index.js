import React from 'react';

function Logout(props) {

  const onLogin =()=>{
    window.location.href = '/';
  }
  return (
  	  <section class="hero d-flex flex-column justify-content-center align-items-center" id="home">
            <div class="bg-overlay"></div>
               <div class="container">
                    <div class="row">
                         <div class="col-lg-8 col-md-10 mx-auto col-12">
                              <div class="hero-text mt-5 text-center">
                                    <h3 class="text-white" >
                                      Thank you to use NAAAC-North America Alumni Alliance Cup Singing Competition Ranking System</h3>
                                    <h3 class="text-white" >Wish you have a nice day!</h3>
                                    <button  type="button" onClick={onLogin} class="form-control" id="submit-button" name="submit">Sign in </button>
                              </div>
                             
                         </div>

                    </div>
               </div>
     </section>
  );
}

export default Logout;
