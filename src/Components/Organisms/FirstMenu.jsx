import React from "react";
/* import img from "./images" */
import img from "../../images"
import "../../styles/Menu.css"


import {

  Link
 
} from "react-router-dom";

export default function FirstMenu(){
    return(
<div className="ed-header s-bg-grey s-py-2">
    <div className="ed-grid lg-grid-5">
   

        <div className="s-cross-center s-main-center lg-main-start">
            <Link to ="/">
            <img className="logo" src={img.imageSteven}/>
            </Link>
        </div>
            

        <nav className="nav lg-cols-4 s-cross-center ed-grid full">
    
        <ul className="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
        
            <li className="lg-mr-3">
                <Link className="link s-column s-cross-center" to ="/">Home</Link>
            </li>
            <li className="lg-mr-3">
                <Link  className="link s-column s-cross-center" to ="/forms">Formulario</Link>
            </li>
            <li className="lg-mr-3">
                <Link className="link s-column s-cross-center"  to ="/cursos">Cursos </Link>  
            </li>
            <li className="lg-mr-3">
                <Link className="link s-column s-cross-center"  to ="/users">Users </Link>  
            </li>
        </ul>
        </nav>
    </div>

</div>
            
          
        
        

    );
}



