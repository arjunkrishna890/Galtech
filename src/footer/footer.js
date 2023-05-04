import React from "react";
import './footer.css'

function Footer(){
    return(
        <div style={{backgroundColor:"#212121",marginTop:"40rem",height:"30rem",display:"block",marginBottom:"10rem",width:"100rem"}} className="footer">
            <img src={process.env.PUBLIC_URL + '/logo.png'} style={{height:"5rem",paddingLeft:"45rem",marginTop:"3rem"}} alt="no image" />
            <h1 style={{color:"#ffbc11",textShadow: "4px 4px 6px black",fontSize:"3rem",paddingLeft:"35rem"}}><strong>-Meat Experience-</strong></h1>
            <div style={{display:"flex"}}>
            <div class="card" style={{backgroundColor:"#ffbc11",marginLeft:"20rem",marginTop:"1rem"}}>
                <div class="card-header">
                    <h3 style={{paddingLeft:"4rem"}}><strong>Open</strong></h3>
                </div>
                <div class="card-body" style={{backgroundColor:"#212121"}}>
                    <h5 class="card-title" style={{color:"white",letterSpacing:"0.2rem"}}><b>Mon.-Thurs:12AM-11PM</b>
                    </h5>
                    <h5 class="card-title" style={{color:"white",letterSpacing:"0.2rem"}}><b>Fri.-Sun:9AM-12PM</b>
                    </h5>
                   
                </div>
                </div>
                <nav class="navbar  navbar-light " style={{marginLeft:"15rem"}}>
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#" style={{color:"white",fontSize:"1.5rem"}}>Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{color:"white",fontSize:"1.5rem"}}>About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{color:"white",fontSize:"1.5rem"}}>Contact</a>
                    </li>
                    
                    </ul>
                </nav>
                <nav class="navbar  navbar-light ">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#" style={{color:"white",fontSize:"1.5rem"}}>Blog<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{color:"white",fontSize:"1.5rem"}}>Cookies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{color:"white",fontSize:"1.5rem"}}>Site Map</a>
                    </li>
                    
                    </ul>
                </nav>
            </div>

            <div style={{display:"flex",marginTop:"2rem"}}>
                <h3 style={{color:"white",marginLeft:"10rem"}}>Madison Street,30-City</h3>
            

            </div>
        </div>
    )
}
export default Footer