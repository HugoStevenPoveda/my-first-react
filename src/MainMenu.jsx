
import React from "react";
import Banner from './Banner';
import Formulario from './Formulario';
import CourseGrid from './CourseGrid';
import Course from "./Course";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"


export default function MainMenu(){

    return(
        <Router >
        <nav>
                <ul>
                  <li>
                    <Link to ="/">Home</Link>
                  </li>
                  <li>
                  <Link to ="/forms">Formulario</Link>
                  </li>
                  <li>
                  <Link to ="/cursos">Cursos </Link>
                  </li>
                  <li>
                  <Link to ="/cursos/1">Cursos1 </Link>
                  </li>
                </ul>
              </nav>
    
       <Switch>
    
    
              <Route path="/forms" component= {Formulario}/>
              <Route path="/cursos/:id" component= { Course}/>
              <Route path="/cursos" component= { CourseGrid}/>
              <Route path="/" exact component= { Banner}/>
              <Route component= {()=>(
                <div className="ed-grid">
                  <h1>ERROR 404</h1>
                  <span>pagina no encontrada</span>
                </div>
                  )}/>
    
    
       </Switch>
              
       
    
    
    
    </Router>
    



    )

}


