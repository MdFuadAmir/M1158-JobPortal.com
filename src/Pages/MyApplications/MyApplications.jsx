import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const MyApplications = () => {
    const [jobs,setJobs] = useState([]);
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
      if(user.email){
        axiosSecure.get(`/job-application?email=${user.email}`)
        .then(res => setJobs(res.data))
        .catch(err => console.error(err));
      }
    },[])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Company Name</th>
        <th>Job Post</th>
        <th>Application Deadline</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        jobs.map(job => <tr key={job._id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={job.company_logo}
                  alt="Company Logo" />
              </div>
            </div>
            <div>
              <div className="font-bold">{job.company}</div>
              <div className="text-sm opacity-50">{job.location}</div>
            </div>
          </div>
        </td>
        <td>
          {job.title}
          <br />
          <span className="badge badge-ghost badge-sm">{job.jobType}</span>
        </td>
        <td>{job.applicationDeadline}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyApplications;