import React from "react";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";
import {BrowserRouter as  Router, Routes, Route, Link } from "react-router-dom";

function Routing(){
    return(
        <Router>
            <div>
                <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/Shafa">About</Link>
                    </li>
                    <li>
                        <Link to="/user/Shafa/Shabudeen">User</Link>
                    </li>
                </ul>
                </nav>
                <Routes>
                    <Route exact path="/about/:firstName" element={<About />}></Route>
                    <Route exact path="/user/:fname/:lname" element={<User/>}></Route>
                    <Route exact path="/" element={<Home />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default Routing;

function Home(){
    return <h2>Home Page</h2>;
}

function About(){
    let {firstName}= useParams();
    return <h2 style={{fontSize:"2em", color:"white" ,backgroundColor: "black"}}>This is about component with {firstName}</h2>
}

function User(){
    let {fname,lname}= useParams();
    return <h2 style={{fontSize:"2em", color:"white" ,backgroundColor: "violet"}}>This is User component with {fname} {lname} </h2>

}
