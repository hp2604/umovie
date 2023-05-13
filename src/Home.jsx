import React from "react";
import Bmovies from "./Bmovies";
import Hmovies from "./Hmovies";


function Home()
{
    return(
        <>
      <div className="grid">
      <Bmovies/>
     <Hmovies/>
     
      </div>
       
       
       
        </>
    )
} 
export default Home;