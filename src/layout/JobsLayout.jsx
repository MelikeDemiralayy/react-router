import { Outlet } from "react-router-dom";


const JobsLayout = () => {
  return (
    <div className="job-layout">
      <h2>Jobs Openings</h2>
      <p className="layout-p">List of current job opening in our company</p>
      <Outlet/>
    </div>
  );
}

export default JobsLayout;
