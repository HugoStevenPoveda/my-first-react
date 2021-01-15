import React from 'react';



const Curso = ({image,title,imgTheacher,nameTheacher,price})=>{
 return  <article className="card">
    
<div className=" img-container s-ratio-16-9 s-radius-tr s-radius-tl">
{image
  ?<img src={image} alt="props.nameTheacher" />
  :<p> No hay imagen</p>

}

   
</div>
<div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
  <h3 className="t5 s-mb-2 s-center"> {title} </h3>
  <div className="s-mb-2 s-main-center">
    <div className="card__teacher s-cross-center">
      <div className="card__avatar s-mr-1">
        <div className="circle img-container">
          <img src={imgTheacher}  alt="props.title "/>
        </div>
      </div>
      <span className="small"> {nameTheacher}</span>
    </div> 
  </div>
  <div className="s-main-center">
    <a className="button--ghost-alert button--tiny" href="">{`$ ${price}`}</a>
  </div>
</div>
</article>}
   





export default Curso;