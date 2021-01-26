import React from "react";
import Curso from "./Curso"
import img from "./images"

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
    





const CourseGrid = ()=>{

    return(
        <>

        <div className="ed-grid m-grid-4">

                {cursos.map(c =>(
                    <Curso 
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      title={c.title}
                      nameTheacher={c.profesor}
                      price ={c.price}
                      
                       />
                       ))}
                      


        </div>




;






        
        
        </>
        )}
        
     export default CourseGrid;   
        
        
        
        
        
        
        
        
    