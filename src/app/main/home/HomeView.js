import React,{useState,useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useLoginMutation } from "./loginMutation";
import { ToastContainer, toast } from 'react-toastify';

function HomeView(props) {
  
  if(props.warning) {
      toast.error("The Email or Code you entered does not match our records. Please try again or contact xiaolianbei.org@gmail.com for help")
      toast.clearWaitingQueue();
  }

 const [loginMutation, loginMutationResults] = useLoginMutation();

 const { handleSubmit, register } = useForm({ shouldUseNativeValidation: true });

 const disableForm = loginMutationResults.loading;

 const onSubmit = (values) => {
  // replace current parm in url
  window.history.replaceState({}, document.title, "./" );
  loginMutation(values.email, values.code);
 }

  return (
  	  <section class="hero d-flex flex-column justify-content-center align-items-center" id="home">
            <ToastContainer limit={1} />
            <div class="bg-overlay"></div>
               <div class="container">
                    <div class="row">
                         <div class="col-lg-8 col-md-10 mx-auto col-12">
                              <div class="hero-text mt-5 text-center">

                                    <h6 data-aos="fade-up" data-aos-delay="300">Welcome to NAAAC-North America Alumni Alliance Cup Singing Competition Voting System</h6>
                                    <h1 class="text-white" data-aos="fade-up" data-aos-delay="500">NAAAC</h1>
                              <form  onSubmit={handleSubmit(onSubmit)}>
                              <input type="email" class="form-control" name="cf-name" placeholder="Email"   {...register("email",{ required: "Please enter your email." })}  />
                              <input type="text" class="form-control" name="cf-email" placeholder="Code"  {...register("code",{ required: "Please enter your code." })} />
                              <button disabled={disableForm} type="submit" class="form-control" id="submit-button" name="submit">Sign in </button>
                            </form>
                              </div>
                             
                         </div>

                    </div>
               </div>
               <footer class="site-footer">
          <div class="container">
               <div class="row">
                    <div class="ml-auto col-lg-12 col-md-12">
                        <p class="copyright-text">
                          If you have any questions, please contact xiaolianbei.org@gmail.com.
                        </p>
                    </div>
                    <div class="ml-auto col-lg-12 col-md-12">
                        <p class="copyright-text">
                        Copyright &copy; 2022 North America Alumni Alliance Cup. Design By Y&L Solution &#9994; Photos on Unsplash
                        </p>
                    </div>
               </div>
          </div>
     </footer>
     </section>
     
  );
}

export default HomeView;
