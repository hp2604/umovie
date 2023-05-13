import React from "react";
import Bdata from "./Bdata";
import Card from "./Card";
import Nav from "./Nav";

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

function Bmovies()
{
    return(
        <>
        
       {Bdata.map(ncard)}
      
       </>
    )
}
export default Bmovies;



