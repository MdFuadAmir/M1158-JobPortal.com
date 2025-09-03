import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

// title,location,jobType,applicationDeadline,description,company,company_logo,salaryRange,requirements

const AddJob = () => {
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleAddJob = e =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const {min,max,currency, ...newJob} = initialData;
        newJob.salaryRange = {min,max,currency};
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        
        fetch(`https://job-portal-server-theta-red.vercel.app/jobs`,{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Job has been Addeded",
                    showConfirmButton: false,
                    timer: 3000
                });
                navigate('/myPostedJobs')
            }
        })
    }
    
    return (
        <div className="max-w-xl mx-auto border p-4">
            <h2 className="p-4 text-center text-xl font-bold">Add a New Job</h2>
            <p className="p-4 text-center">Job Created by: {user.email}</p>
            <hr />
            <form onSubmit={handleAddJob} className="max-w-xl mx-auto space-y-2">
                {/* job title */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">Job Title</span></label>
                    <input type="text" name="title" placeholder="job title" className="input input-bordered w-full" required />
                </div>
                {/* company name */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">Company name</span></label>
                    <input type="text" name="company" placeholder="Compnay name" className="input input-bordered w-full" required />
                </div>
                {/* jobType */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">Job Type</span></label>
                    <select defaultValue="Full Time" name="jobType" className="select select-bordered w-full">
                        <option disabled>select job type</option>
                        <option>Remot</option>
                        <option>Intern</option>
                        <option>Hibrid</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                    </select>
                </div>
                {/* location */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">Location</span></label>
                    <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />
                </div>
                {/* category */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">Category</span></label>
                    <select defaultValue="Enginering" name="category" className="select select-bordered w-full">
                        <option disabled>select job catagory</option>
                        <option>Enginering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                        <option>Designer</option>
                        <option>web Devoloper</option>
                    </select>
                </div>
                {/* applicationDeadline */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">Application Deadline</span></label>
                    <input type="date" name="applicationDeadline" placeholder="applicationDeadline" className="input input-bordered w-full" required />
                </div>
                {/* status */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">Status</span></label>
                    <input type="text" name="status" placeholder="status" className="input input-bordered w-full" required />
                </div>
                {/* hr_email */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">Hr_Email</span></label>
                    <input type="email" name="hr_email" defaultValue={user?.email} placeholder="hr_email" className="input input-bordered w-full" required />
                </div>
                {/* hr_name */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">Hr_Name</span></label>
                    <input type="text" name="hr_name" placeholder="hr_name" className="input input-bordered w-full" required />
                </div>
                {/* company_logo */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">company_logo</span></label>
                    <input type="url" name="company_logo" placeholder="company_logo Url" className="input input-bordered w-full" required />
                </div>
                {/* requirements */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">Job Requerments</span></label>
                    <textarea type="text" name="requirements" placeholder="Job Requerments" className="input input-bordered w-full" required />
                </div>
                {/* responsibilities */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">Job Responsibilities</span></label>
                    <textarea type="text" name="responsibilities" placeholder="Job Responsibilities" className="input input-bordered w-full" required />
                    
                </div>
                {/* salaryRange */}
                <div className="space-y-2" name="salaryRange">
                    <label className="label"><span className="label-text">Salary Range</span></label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* salaryRange min */}
                <div className="form-control flex flex-col space-y-2">
                    <input type="number" name="min" placeholder="Min Salary Range" className="input input-bordered w-full" required />
                </div>
                {/* salaryRange max */}
                <div className="form-control flex flex-col space-y-2">
                    <input type="number" name="max" placeholder="Max Salary Range" className="input input-bordered w-full" required />
                </div>
                {/* salaryRange currency */}
                <div className="form-control flex flex-col space-y-2">
                    <select defaultValue="BDT" name="currency" className="select select-bordered w-full">
                        <option disabled>select currency</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>INR</option>
                        <option>GBP</option>
                        <option>GPY</option>
                        <option>EUR</option>
                    </select>
                </div>
                </div>
                </div>
                {/* description */}
                <div className="form-control flex flex-col space-y-2">
                    <label className="label"><span className="label-text">Description</span></label>
                    <textarea type="text" name="description" placeholder="description" className="textarea textarea-bordered textarea-sm w-full" required />
                </div>
                {/* submit button */}
                <div className="form-control mt-6">
                    <button className="btn w-full ">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;