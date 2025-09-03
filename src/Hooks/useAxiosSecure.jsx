import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosInstance = axios.create({
  baseURL: 'https://job-portal-server-theta-red.vercel.app',
  withCredentials:true,
});


const useAxiosSecure = () => {
  const {signOutUser} =useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    axiosInstance.interceptors.response.use(response=>{
      return response;
    }, error =>{
      // error.response && (error.response.status === 401 || error.response.status === 403)
      error.status === 401 || error.status === 403
      if(error?.response && (error?.response.status === 401 || error?.response.status === 403)){
        console.log("logout");
        signOutUser()
        .then(()=>{
          console.log('log out user');
          navigate('/signin')
        })
        .catch(err =>{
          console.log(err.message);
        })
      }
      return Promise.reject(error);
    })
  },[])
    return axiosInstance;
};

export default useAxiosSecure;