import React,{useState,useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useLoginMutation } from "./loginMutation";

function HomeView(props) {

  const [warning,setWarning] = useState(props.warning);
  
  useEffect(() => {
    setWarning(props.warning);
  
  },[props.warning])

 const [loginMutation, loginMutationResults] = useLoginMutation();

 const { handleSubmit, register } = useForm({ shouldUseNativeValidation: true });

 const disableForm = loginMutationResults.loading;

 const onSubmit = (values) => {
  setWarning(false);
  loginMutation(values.email, values.code);
 }

  return (
  	  <section class="hero d-flex flex-column justify-content-center align-items-center" id="home">
            <div class="bg-overlay"></div>
               <div class="container">
                    <div class="row">
                         <div class="col-lg-8 col-md-10 mx-auto col-12">
                              <div class="hero-text mt-5 text-center">

                                    <h6 data-aos="fade-up" data-aos-delay="300">Welcome to NAAAC-North America Alumni Alliance Cup Singing Competition Ranking System</h6>
                                    <h1 class="text-white" data-aos="fade-up" data-aos-delay="500">NAAAC</h1>
                            {warning ? (<h6 data-aos="fade-up" data-aos-delay="400" style={{"color":"red"}}>Email or Code is incorrect!</h6>) : ""}
                            <form  onSubmit={handleSubmit(onSubmit)}>>
                              <input type="email" class="form-control" name="cf-name" placeholder="Email"   {...register("email",{ required: "Please enter your email." })}  />
                              <input type="text" class="form-control" name="cf-email" placeholder="Code"  {...register("code",{ required: "Please enter your code." })} />
                              <button disabled={disableForm} type="submit" class="form-control" id="submit-button" name="submit">Sign in </button>
                            </form>
                              </div>
                             
                         </div>

                    </div>
               </div>
     </section>
  );
}

export default HomeView;
