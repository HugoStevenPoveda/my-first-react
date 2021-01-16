
import React from 'react';
import  "./styles/styles.scss";
import IA from './image/IA.jpg';
import Curso from './Curso';
/* import imagenes from './images' */
 
const cursos =[
{ "title":"Algebra",
  "image":"https://2.bp.blogspot.com/-0-FkWeeka_w/W2H_o8477yI/AAAAAAAAYko/s_0wvrAqgPcP_vryv1fY64u0N5HElg3zQCLcBGAs/s1600/algebra%2Bbasica%2Bcurso%2Bonline%2Bgratis.jpg",
  "price":"50 UD",
  "nameTheacher":"Hugo Steven"},

{ "title":"trigonometria",
"image":"https://www.becasinternacionales.net/webapp/img/courses/dbe1b6_aprende-trigonometria-desde-cero_w688.jpg",
"price":"10 UD",
"nameTheacher":"Hugo Steven"},

{"title":"calculo",
"image":"https://dev-res.thumbr.io/libraries/45/01/lib/1466689182804_45.jpg?size=854x493s&ext=jpg",
"price":"50 UD",
"nameTheacher":"Hugo Steven"}

]




const App = ()=>(


  <> 
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img  className="main-banner__img" src={IA} alt=" FONDO Inteligencia "  />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Curso de Matemáticas</p>
        <p> SOMOS LO QUE HACEMOS DIA A DIA. DE MODO QUE LA EXCELENCIA NO ES UN ACTO SINO UN HABITO – ARISTOTELES. </p>
        <a href=" https://ux.ed.team/cards.html" className="button third-color">Eligue tu curso </a>
      </div>
    </div>
  </div>
</div>


<div className='ed-grid m-grid-4'>

    {
      cursos.map( curso => <Curso  title= {curso.title}  nameTheacher={curso.nameTheacher} image={curso.image} price={curso.price} />)

 


      
    }



   


</div>


  
  
  
  </>










  
)


export default App;


//reglas jsx
//1:toda etiqueta debe cerrarse
//2: todo componente sol puede retornar un elemento padre
//3:apollarse de los fragment cuando se necesita enciar dos elementos, en cuaquiera de las moneclatura fragment => <> </>

