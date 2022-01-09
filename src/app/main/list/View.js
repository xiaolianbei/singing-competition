import React from "react";

function View(props) {

  return (
  	  <section class="d-flex flex-column justify-content-center align-items-center">
            <div class="bg-overlay"></div>
               <div class="container">
                    <div class="row">
                         <div class="col-lg-8 col-md-10 mx-auto col-12">
                              <div class="hero-text mt-5 text-center">
                                  <h1 class="text-white" data-aos="fade-up" data-aos-delay="500">This is list page</h1>
                              </div>
                             
                         </div>

                    </div>
               </div>
     </section>
  );
}

export default View;
