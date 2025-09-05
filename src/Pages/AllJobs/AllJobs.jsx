import { useState } from "react";
import useJobs from "../../Hooks/useJobs";
import HotJobCard from "../Home/HotJobCard";
import { BiSearch } from "react-icons/bi";

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [search, setSearch] = useState("");
  const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);
  if (loading) {
    return <h1>Page Loading</h1>;
  }
  return (
    <div>
      <h1 className="py-5 text-4xl text-center font-bold underline">
        All Jobs
      </h1>
      <div className="w-11/12 mx-auto bg-slate-50 p-5 rounded-xl mb-8 flex items-center gap-4">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort == true ? "Sorted Salary" : "Sort By Salary"}
        </button>
        <BiSearch />
        <input
        onKeyUp={(e)=>setSearch(e.target.value)}
          type="text"
          placeholder="Search Jobs By Location"
          className="input w-full max-w-2xl"
        />
        <div className="space-y-3">
        <input
        onKeyUp={(e)=>setMinSalary(e.target.value)}
          type="text"
          placeholder="Min Salary"
          className="input"
        />
        <input
        onKeyUp={(e)=>setMaxSalary(e.target.value)}
          type="text"
          placeholder="Max Salary"
          className="input"
        />
        </div>
        
      </div>
      {/* main section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
