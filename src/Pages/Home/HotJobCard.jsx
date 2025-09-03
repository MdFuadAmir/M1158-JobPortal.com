import { Briefcase, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";


const HotJobCard = ({job}) => {
    const{_id,title,location,jobType,applicationDeadline,description,company,company_logo,salaryRange,requirements} = job;
    return (
        <div>
             <div className="max-w-sm mx-auto border bg-blue-50 border-blue-200 rounded-xl p-5">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img
            src={company_logo} // Replace with actual logo if needed
            alt="company Logo"
            className="w-12 h-12 rounded-md"
          />
          <div>
            <h2 className="font-bold text-lg text-gray-900">{company}</h2>
            <div className="flex items-center text-gray-400 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
        </div>
        <div className="text-green-400 text-xl">⚡</div>
      </div>
      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mt-4">
       {title}
      </h3>
      {/* Job type & time */}
      <div className="flex gap-4 text-gray-400 text-sm mt-2">
        <div className="flex items-center gap-1">
          <Briefcase className="w-3 h-3" />
          {jobType}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {applicationDeadline}
        </div>
      </div>
      {/* Description */}
      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
        {description}
      </p>
      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {
            requirements.map((requirement,index) =><p className="border rounded-md py-1 px-2 text-center hover:text-blue-400 hover:bg-gray-100" key={index}>{requirement}</p>)
        }
      </div>
      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-lg font-semibold text-blue-600">
        {salaryRange.min} {salaryRange.currency}
        </div>
        <Link to={`/jobs/${_id}`}><button className="bg-blue-100 text-blue-500 rounded-md hover:bg-blue-600 hover:text-white transition btn">Apply</button></Link>
      </div>
    </div>
        </div>
    );
};

export default HotJobCard;