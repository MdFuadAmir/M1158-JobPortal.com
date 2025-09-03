import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();
  const handleStatusUpdate = (e, id) => {
    e.preventDefault();
    const data = {
      status: e.target.value,
    };
    fetch(`https://job-portal-server-theta-red.vercel.app/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status has been Updated",
            showConfirmButton: false,
            timer: 3000,
          }); 
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-center p-4">Applications for this Job</h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {applications.map((app, index) => (
            <tr key={app._id}>
              <td>{index + 1}</td>
              <td>{app.applicant_email}</td>
              <td>{app.applicant_email}</td>
              <td>
                <select
                  onChange={(e) => handleStatusUpdate(e, app._id)}
                  defaultValue={app.status || "Change Status"}
                  className="select select-bordered w-full"
                >
                  <option disabled>Change Status</option>
                  <option>Under Review</option>
                  <option>Set Interview</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;
