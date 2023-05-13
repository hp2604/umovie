import React from "react";
import Hdata from "./Hdata";
import Nav from "./Nav";
import Card from "./Card";

function ncard(value)
{
    return(
        <>
        <Card
        pic={value.pic}
        tittle={value.tittle}
        link={value.link}
        />
        </>
    )
}


function Hmovies()
{
    return(
        <>
        

         {Hdata.map(ncard)}
         
    
        </>
    )        
}
export default Hmovies;