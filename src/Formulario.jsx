import React from 'react';


class Formulario extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <>

            <div className="ed-grid"> 
            <h1>Formulario </h1>

            <form>

                    <div className ="ed-item l-40  form__item">
                        <label>Nombre del usuario </label>
                        <input type ="text" />
                    
                    </div>

        
                    <div className =" ed-item l-40 form__item">
                        <label>Correo Electronico </label>
                            <input type ="email" />
                    </div>
                    
                        <div className=" ed-item  l-40 form__item">
                            <label>Selecciona tu país</label>
                            <select>
                            <option>Colombia</option>
                            <option>Bolivia</option>
                            <option>Argentina</option>
                            <option>Perú</option>
                            <option>México</option>
                            </select>
                   </div>

                    <div className="ed-item form__item">
                        <input className="button full small" type="submit" value="Enviar" />
                  </div>




            </form>


            </div>
                    

                   

                    


            </>


        )


    }











}




export default Formulario;