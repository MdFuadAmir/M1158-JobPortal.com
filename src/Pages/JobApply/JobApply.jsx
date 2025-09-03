import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const JobApply = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const navigate = useNavigate();
    
    const handleJobApplication = (e) =>{
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value; 
        const gitHub = form.gitHub.value; 
        const resume = form.resume.value; 

        const jobApplication = {
          job_id: id,
          applicant_email:user.email,
          linkedIn,
          gitHub,
          resume
        }
        fetch(`https://job-portal-server-theta-red.vercel.app/job-applications`,{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(jobApplication)
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.insertedId){
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Application has been Send",
            showConfirmButton: false,
            timer: 3000
            });
            navigate('/myApplications')
          }
        })
    }
  return (
    
      <div className="max-w-xl mx-auto border rounded-md">
        <div className="text-center p-4 space-y-2">
          <h1 className="text-xl font-bold">Apply Job And Good Luck</h1>
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, reprehenderit.</p>
        </div>

        <form onSubmit={handleJobApplication} className="card-body mx-auto max-w-xl rounded-md">
            {/* linkedIn */}
          <div className="form-control flex flex-col space-y-2">
            <label className="label">
              <span className="label-text">LinkedIn Url</span>
            </label>
            <input
              type="url"
              placeholder="LinkIn Url"
              name="linkedIn"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* github */}
          <div className="form-control flex flex-col space-y-2">
            <label className="label">
              <span className="label-text">GitHub Url</span>
            </label>
            <input
              type="url"
              placeholder="GitHub Url"
              name="gitHub"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* resumi file */}
          <div className="form-control flex flex-col space-y-2">
            <label className="label">
              <span className="label-text">Resume Url</span>
            </label>
            <input
              type="url"
              placeholder="Resume Url"
              name="resume"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Apply</button>
          </div>
        </form>
      </div>
  );
};

export default JobApply;
