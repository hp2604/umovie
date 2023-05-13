import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Card(pro)
{
    return(
        <>
       
       <div className="card">
  <img src={pro.pic} alt="Image" className="card-img"/>
  <div className="card-content">
    <h2 className="card-title">{pro.tittle}</h2>
    <a href={pro.link} className="card-btn">Download</a>
  </div>
</div>


        </>
    )
}
export default Card;