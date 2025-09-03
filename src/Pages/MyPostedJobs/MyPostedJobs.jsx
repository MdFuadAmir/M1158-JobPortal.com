import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const [jobs,setJobs] = useState([]);
    const {user} = useAuth();
    useEffect(()=>{
        fetch(`https://job-portal-server-theta-red.vercel.app/jobs?email=${user.email}`)
        .then(res =>res.json())
        .then(data =>setJobs(data))
    },[user.email])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>applicationDeadline</th>
        <th>Application Count</th>
        <th>View Applications</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        jobs.map((job,index)=><tr>
        <th>{index+1}</th>
        <td>{job.title}</td>
        <td>{job.applicationDeadline}</td>
        <td>{job.applicationCount}</td>
        <td><Link to={`/viewApplications/${job._id}`}>View Applications</Link></td>
       
      </tr>)
      }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyPostedJobs;