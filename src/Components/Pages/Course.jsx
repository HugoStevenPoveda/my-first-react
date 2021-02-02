import React from "react";
import img from "../../images"

const cursos =[
    {
        "id":1,
        "title":"Curso Algebra",
        "image":img.imageAlgebra,
        "price":40,
        "profesor":"hugo poveda"
    },
    {
        "id":2,
        "title":"Curso de IA",
        "image":img.imageHugo,
        "price":40,
        "profesor":"Steven poveda"
    },
    {
        "id":3,
        "title":"Curso Calculo",
        "image":img.imageCalculo,
        "price":40,
        "profesor":"Steven girata"
    },
    {
        "id":4,
        "title":"Curso Calculo",
        "image":img.imageSteven,
        "price":400,
        "profesor":"Steven girata poveda"
    }
]
    




 const Course=({match})=>{
    const CursoActual = cursos.filter(c=>c.id===parseInt(match.params.id))[0];

      return(

        <div className="ed-grid m-grid-3">
          {    CursoActual ? ( 
            <>
                  <h1 className="m-cols-3"> </h1>
                  <img className= "m-cols-1" src={CursoActual.image}/> 
                  <p className="m-cols-2"> profesor :{CursoActual.profesor}</p>
            </>)
            :(   <h1>Error 404 no exite la ruta</h1>)
          }
            
              
        </div>
            
          )
          }
  






      
      
      
      





export default Course;