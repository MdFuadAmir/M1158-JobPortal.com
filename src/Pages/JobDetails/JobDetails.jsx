import { Link, useLoaderData } from "react-router-dom";
import { FaIndustry } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { FaClock } from "react-icons/fa6";
import { FaHatCowboy } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = useLoaderData();

  return (
    <div>
        {/* banner */}
        <div
            className="hero min-h-96"
            style={{backgroundImage:"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                et a id nisi.
                </p>
                <button className="btn btn-primary">Apply Now</button>
            </div>
            </div>
        </div>
      {/* header */}
        <div className="flex justify-between items-center p-4 my-6  border-b">
            <div className="flex gap-4 items-center">
                <div>
                    <img src={company_logo} className="w-10 md:w-16" alt="company logo" />
                </div>
                <div>
                <h1 className="font-semibold text-xl md:text-3xl font-serif">{title}</h1>
                <div className="flex gap-4 text-sm text-gray-400 font-thin">
                    <p className="flex justify-center items-center gap-2"><GrNotes color="gray"/>{jobType}</p>
                    <p className="flex justify-center items-center gap-2"><FaClock color="gray"/> {applicationDeadline}</p>
                </div>
            </div>
            </div>
            <div>
                <button className="bg-blue-100 text-blue-500 rounded-md hover:bg-blue-600 hover:text-white  btn">Apply Now</button>
            </div>
        </div>
    <div className="grid md:grid-cols-12 gap-4">
        {/* main sextion left side */}
        <div className="col-span-8 p-6">
             {/* main detail */}
            <div className="max-w-4xl p-6 bg-white rounded-xl shadow border border-gray-200 my-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Employment Information
                </h2>
                <hr />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 text-sm text-gray-600 mt-6">
                {/* Industry */}
                <div className="flex items-center gap-3">
                    <FaIndustry />
                    <p className="font-medium text-gray-500">Industry</p>
                    <p className="text-gray-800 font-semibold">{company}</p>
                </div>
                {/* Job Level */}
                <div className="flex items-center gap-3">
                    <FcBusinessman />
                    <p className="font-medium text-gray-500">Job level</p>
                    <p className="text-gray-800 font-semibold">{category}</p>
                </div>
                {/* Salary */}
                <div className="flex items-center gap-3">
                    <FaMoneyCheckAlt />
                    <p className="font-medium text-gray-500">Salary</p>
                    <p className="text-gray-800 font-semibold">
                    {salaryRange.min} {salaryRange.currency}
                    </p>
                </div>
                {/* Experience */}
                <div className="flex items-center gap-3">
                    <FaHatCowboy />
                    <p className="font-medium text-gray-500">Experience</p>
                    <p className="text-gray-800 font-semibold">null</p>
                </div>
                {/* Job Type */}
                <div className="flex items-center gap-3">
                    <GrNotes />
                    <p className="font-medium text-gray-500">Job type</p>
                    <p className="text-gray-800 font-semibold">{jobType}</p>
                </div>
                {/* Deadline */}
                <div className="flex items-center gap-3">
                    <FaHourglassEnd />
                    <p className="font-medium text-gray-500">Deadline</p>
                    <p className="text-gray-800 font-semibold">{applicationDeadline}</p>
                </div>
                {/* Updated */}
                <div className="flex  items-center gap-3">
                    <FaClock />
                    <p className="font-medium text-gray-500">Updated</p>
                    <p className="text-gray-800 font-semibold">{applicationDeadline}</p>
                </div>
                {/* Location */}
                <div className="flex  items-center gap-3">
                    <MdLocationOn />
                    <p className="font-medium text-gray-500">Location</p>
                    <p className="text-gray-800 font-semibold">{location}</p>
                </div>
                </div>
            </div>
            {/* extra detail */}
            <div>
                <h1 className="text-2xl font-bold text-gray-400">Requirements , Skills, & Responsibilities</h1>
                <p className="text-gray-500 my-3">Requirements:</p>
                {requirements.map((skill,index) =><li key={index}>{skill}</li> )}
                <p className="text-gray-500 my-3">Responsibilities:</p>
                {responsibilities.map((skill,index) =><li key={index}>{skill}</li> )}
                <h1 className="text-2xl font-bold text-gray-400 my-3">Company Information</h1>
                <p className=" my-3">Company Name: <span className="text-black font-semibold">{company}</span></p>
                <p className=" my-3">HR Name: <span className="text-black font-semibold">{hr_name}</span></p>
                <p className=" my-3">HR Email: <span className="text-black font-semibold">{hr_email}</span></p>
                <p className=" my-3">Company Status: <span className="text-black font-semibold">{status}</span></p>
                <p className=" my-3">Description: <span className="text-black font-semibold">{description}</span></p>
            </div>
            <hr className="border my-8"/>
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex gap-4">

                <Link to={`/jobApply/${_id}`}><button className="bg-blue-100 text-blue-500 rounded-md hover:bg-blue-600 hover:text-white btn">Apply Now</button></Link>

                <button className="bg-transparent text-blue-500 rounded-md hover:bg-black hover:text-white btn">Save Job</button>
                </div>
                <div className="flex items-center gap-3 p-4">
                    <p>Share This:</p>
                    <button>F</button>
                    <button>T</button>
                    <button>W</button>
                </div>
            </div>
        </div>
        {/* add section right side */}
        <div className="col-span-4 border rounded-md bg-blue-50">
            <p className=" items-center">this is ads Section</p>
        </div>
    </div>
    </div>
  );
};

export default JobDetails;
