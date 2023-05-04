import React from "react";
import './home.css'
function Home(){
return(
    <div className="home">
        <img src={process.env.PUBLIC_URL + '/Image  home.png'} style={{position:"absolute"}}/>
        <div style={{display:"block"}}>
                <div class="card" style={{backgroundColor:"#ffbc11",marginLeft:"40rem",marginTop:"10rem",padding:"0.8rem",position:"absolute"}}>
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
    
            <h1 style={{color:"white"}}>Hi</h1>
        </div>
                
                
                
    </div>
)
}
export default Home