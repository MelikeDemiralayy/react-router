import { useLoaderData } from "react-router-dom";



const JobDetails = () => {

    const JobDetails = useLoaderData();
    
  return (
    <div className="jobs-detail">
     <p><b>Job Title:</b>{JobDetails.title} </p>
     <p><b>Salary:</b>{JobDetails.salary} </p>
     <p><b>Job Title:</b>{JobDetails.location} </p>
     <p><b>Job Title:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis, esse mollitia est explicabo accusamus eveniet rerum, molestiae suscipit voluptatibus sapiente, molestias recusandae facere? Dolor beatae iste quod culpa odit? Molestias harum hic vitae officia ab minima quis, incidunt, deleniti culpa cum voluptas enim consequatur tempora vel unde, laboriosam quia quo doloribus sequi amet similique velit eaque mollitia. Exercitationem, autem? </p>
    <button>Aply Now</button>
    </div>
  );
}

export default JobDetails;


export const jobDetailsLoader = async({params} ) =>{
     const {id} = params;
     const response = await fetch(`http://localhost:5001/jobs/${id}`);
     if(!response.ok){
         throw Error ("Could not found job details")
     }
     return response.json();
      
}
 