import React from 'react';
import PropTypes from 'prop-types';





const Curso = ({image,title,nameTheacher,price})=>{
 return  <article className="card">
    
<div className=" img-container s-ratio-16-9 s-radius-tr s-radius-tl">
<img src={image} alt="props.nameTheacher" />
   
</div>
<div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
  <h3 className="t5 s-mb-2 s-center"> {title} </h3>
  <div className="s-mb-2 s-main-center">
    <div className="card__teacher s-cross-center">
      <div className="card__avatar s-mr-1">
        
      </div>
      <span className="small"> {nameTheacher}</span>
    </div> 
  </div>
  <div className="s-main-center">
    <a className="button--ghost-alert button--tiny" href="">{`$ ${price}`}</a>
  </div>
</div>
</article>}

Curso.propTypes={
  title:PropTypes.string,
  nameTheacher:PropTypes.string,
  price:PropTypes.string,
  image:PropTypes.string,
  

}
 
Curso.defaultProps={

  title:"proximo curso",
  nameTheacher:"por asignar ",
  price:" cero UD",
  image:"https://4.bp.blogspot.com/-ZIXB-sB1oGQ/WyhWHEXS_dI/AAAAAAAAWEQ/YFaaAFmYy18VfroS59Ha0B4IUJL232xiACLcBGAs/s640/mejores%2Bcanales%2Byoutube%2Bmatematicas.jpg"



}





export default Curso;