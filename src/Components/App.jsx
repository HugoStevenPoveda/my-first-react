
import React from 'react';
import  "../styles/styles.scss"

//import MainMenu from "./MainMenu";

import Formulario from './Pages/Formulario';
import CourseGrid from './Organisms/CourseGrid';
import Historial from './Pages/History';
import Course from "./Pages/Course";
import Users from "./Pages/Users"
/* import Banner from '../Banner'; */
import Home from './Pages/Home'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";

  import FirstMenu from "./Organisms/FirstMenu";




 




const App = ()=>(

 <>

<Router>
<FirstMenu />
<Switch>
    <Route path="/forms" component= {Formulario}/>
    <Route path="/cursos/:id" component= { Course}/>
    <Route path="/cursos" component= { CourseGrid}/>
    {/* prueba props */}
    <Route path="/historial/:valor" component= {Historial}/>

    <Route path="/users" exact component= { Users}/>

    <Route path="/" exact component= { Home}/>
    <Route component= {()=>(
      <div className="ed-grid">
        <h1>ERROR 404</h1>
        <span>pagina no encontrada</span>
      </div>
        )}/>
</Switch>


</Router>




    
    


   

</>






  
)


export default App;


//reglas jsx
//1:toda etiqueta debe cerrarse
//2: todo componente solo puede retornar un elemento padre
//3:apollarse de los fragment cuando se necesita enciar dos elementos, en cuaquiera de las moneclatura fragment => <> </>

/* 
src/Components/
            -Atoms
            -Molecules
            -Organisms
            -Templates
            -Pages


*/