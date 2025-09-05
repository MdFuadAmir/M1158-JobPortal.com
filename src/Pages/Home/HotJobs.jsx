import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";


const HotJobs = () => {
    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        fetch("https://job-portal-server-theta-red.vercel.app/jobs?sort=false")
        .then(res => res.json())
        .then(data => {
            setJobs(data);
        })
    },[])
    return (
        <div className="my-12">
            {/* header  section*/}
            <div className="text-center">
                <h1 className="text-4xl font-semibold font-serif">Jobs of the day</h1>
                <p className="text-gray-400 my-3">Search and connect with the right candidates faster.</p>
                <div className="space-x-4 my-12">
                    <button className="btn">Management</button>
                    <button className="btn">Marketing & selse</button>
                    <button className="btn">Financial</button>
                    <button className="btn">Human recource</button>
                    <button className="btn">Retail & Product</button>
                    <button className="btn">Content Writing</button>
                </div>
            </div>
            {/* main section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;