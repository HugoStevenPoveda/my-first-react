import React from 'react';
import IA from './image/IA.jpg';


const Banner = ()=>(

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






)


export default Banner;