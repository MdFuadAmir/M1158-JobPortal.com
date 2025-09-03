import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLotti from"../../assets/Lotty/login.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import axios from "axios";

const SignIn = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state || '/';
    
     const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signInUser(email,password)
        .then(result =>{
            const user ={email:result.user.email}
            axios.post(`https://job-portal-server-theta-red.vercel.app/jwt`, user,{withCredentials:true})
            .then(res =>{
              console.log(res.data);
            })
            .catch()
            // navigate(from);
        })
        .catch(error =>{
            console.log(error);
        })
    };
    return (
       <div className="hero min-h-screen">
             <div className="flex justify-center w-full">
               <div className="p-6">
                 <div className="text-center">
                   <h1 className="text-5xl font-semibold font-serif">Members Login!</h1>
                   <p className="my-3 text-gray-400 text-center">
                     Provident cupiditate voluptatem et in.
                   </p>
                   <SocialLogin></SocialLogin>
                   <div className="divider">OR</div>
                 </div>
                 <div className="card w-full max-w-sm">
                   <form onSubmit={handleSignIn} className="card-body space-y-4">
                     {/* email */}
                     <div className="form-control space-y-3">
                       <label className="label">
                         <span className="label-text text-black">Email*</span>
                       </label>
                       <input
                         type="email"
                         placeholder="email"
                         name="email"
                         className="input input-bordered"
                         required
                       />
                     </div>
                     {/* password */}
                     <div className="form-control space-y-3">
                       <label className="label">
                         <span className="label-text text-black">Password*</span>
                       </label>
                       <input
                         type="password"
                         placeholder="password"
                         name="password"
                         className="input input-bordered"
                         required
                       />
                     </div>
                     <div className="form-control space-x-2">
                       <input
                         type="checkbox"
                         id="check"
                         name="check"
                         value="check"
                         required
                       />
                       <label for="vehicle1">Remember Me</label>
                       <br></br>
                     </div>
                     <div className="form-control mt-6">
                       <button className="btn bg-black text-white w-full">
                         Submit & Register
                       </button>
                     </div>
                     <p className="text-gray-400 text-center">
                       Don't have an account ?
                        <Link to="/register" className="text-black hover:text-blue-500">
                         Register
                       </Link>
                     </p>
                   </form>
                 </div>
               </div>
               <div className="text-center lg:text-left w-44 md:w-96 flex justify-center">
                 <Lottie animationData={loginLotti}></Lottie>
               </div>
             </div>
           </div>
    );
};

export default SignIn;