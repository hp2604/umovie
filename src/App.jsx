import React from "react";
import Nav from "./Nav";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Hollywood from "./Hollywood";
import Bollywood from "./Bollywood";
import Alert from "./Alert";


 

function App(){
    return(
        <>
        <Alert/>
        <Nav/>
        <br />
        <Routes>
            <Route exact path='/umovie' Component={Home}/> 
            <Route exact path="/hollywood" Component={Hollywood}/>
            <Route exact path="/bollywood" Component={Bollywood}/>
        </Routes>
    
        </>
    )
}
export default App;

 