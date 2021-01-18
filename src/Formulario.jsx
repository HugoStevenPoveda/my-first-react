import React,{Component} from 'react';


class Formulario extends Component{

    constructor(props){
        super(props);
        
        this.state={
            nombre:"",
            correo:""


        }

    }

    render(){
        return(
            <>

            <div className="ed-grid"> 
            <h1>Formulario </h1>

            <form>

                    <div  className= "ed-grid m-grid-2">
                            <div id = "hola" className ="ed-item l-40  form__item">
                                <label>Nombre del usuario </label>
                                <input 
                                type ="text" 
                                onChange={e=>this.setState({ nombre: e.target.value



                                })} />
                            
                            </div>

                
                            <div className =" ed-item l-40 form__item">
                                <label>Correo Electronico </label>
                                    <input 
                                     aria-label ="email" 
                                     type ="email" 
                                    onChange={ e=>this.setState({correo:e.target.value})



                                    }
                                      />
                            </div>
                    </div>

               {/*     <div className="ed-item form__item">

                     <input className="button full small" type="submit" value="Enviar"
                      />

                   </div> */}



                    

                  


                    
                    
                    
                        

                    
            </form>
                <div>

                <h1>{`hola ${this.state.nombre}`}</h1>
            <span>{`tu correo es ${this.state.correo}`}</span>



                </div>




            </div>
                    

                   

                    


            </>


        )


    }











}




export default Formulario;