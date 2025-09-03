import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import registerLottieData from "../../assets/Lotty/register.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {
  const {creatUser} = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    
    creatUser(email,password)
    .then(result =>{
      console.log(result.user);
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
            <h1 className="text-5xl font-semibold font-serif">Register now!</h1>
            <p className="my-3 text-gray-400 text-center">
              Provident cupiditate voluptatem et in.
            </p>
            <SocialLogin></SocialLogin>
            <div className="divider">Continue with</div>
          </div>
          <div className="card w-full max-w-sm">
            <form onSubmit={handleRegister} className="card-body space-y-4">
              {/* full name */}
              <div className="form-control space-y-3">
                <label className="label">
                  <span className="label-text text-black">Full Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  name="fullName"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* user name */}
              <div className="form-control space-y-3">
                <label className="label">
                  <span className="label-text text-black">UserName*</span>
                </label>
                <input
                  type="text"
                  placeholder="userName"
                  name="userName"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <label for="vehicle1">Agree our terms and Policy</label>
                <br></br>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-black text-white w-full">
                  Submit & Register
                </button>
              </div>
              <p className="text-gray-400 text-center">
                Already have an account ?{" "}
                <Link to="/signin" className="text-black hover:text-blue-500">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="text-center lg:text-left w-44 md:w-96 flex justify-center">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;
