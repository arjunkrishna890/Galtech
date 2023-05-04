import React from "react";
import { Menu,Input} from "semantic-ui-react";
import './navbar1.css'


function Navbar1(){

    return(
        <div style={{backgroundColor:"#212121",width:"100rem",height:"7rem",backgroundRepeat:"repeat",padding:"1rem"}} className="header"> 
            <div style={{display:"flex",alignItems:"center"}}>
                <img src={process.env.PUBLIC_URL + '/logo.png'} style={{height:"5rem"}} alt="no image"/>
                           
                <span style={{border:"solid 2px",borderColor:"#ffbc11",position:"absolute",margin:"33rem",}} className="menu">
                <Menu secondary inverted size="massive">
                <Menu.Item > <span style={{color:"#ffbc11" ,paddingLeft:"2rem"}}>Home</span></Menu.Item>
                <Menu.Item > <span style={{color:"#ffbc11"}}>Menu</span></Menu.Item>
                <Menu.Item active="true" color="yellow" inverted> <span style={{color:"black"}}>Speacials</span></Menu.Item>
                <Menu.Item > <span style={{color:"#ffbc11"}}>About</span></Menu.Item>
                <Menu.Item > <span style={{color:"#ffbc11"}}>Methods</span></Menu.Item>
                </Menu>
                </span>
                
            </div>
        </div>
    )

}
export default Navbar1