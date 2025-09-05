import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";
import AllJobs from "../Pages/AllJobs/AllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<h1>Route not Found</h1>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/jobs",
        element: <AllJobs/>,
      },
      {
        path: "/jobs/:id",
        element:  <PrivateRoute><JobDetails /></PrivateRoute>,
        loader:({params}) =>fetch(`https://job-portal-server-theta-red.vercel.app/jobs/${params.id}`)
      },
      {
        path: "/myApplications",
        element:  <PrivateRoute><MyApplications /></PrivateRoute>,
        loader:({params}) =>fetch(`https://job-portal-server-theta-red.vercel.app/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element:  <PrivateRoute><JobApply/></PrivateRoute>,
      },
      {
        path: "/addJob",
        element:  <PrivateRoute><AddJob/></PrivateRoute>,
      },
      {
        path: "/myPostedJobs",
        element:  <PrivateRoute><MyPostedJobs/></PrivateRoute>,
      },
      {
        path: "/viewApplications/:job_id",
        element:<PrivateRoute><ViewApplications/></PrivateRoute>,
        loader: ({params})=>fetch(`https://job-portal-server-theta-red.vercel.app/job-applications/jobs/${params.job_id}`)
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
