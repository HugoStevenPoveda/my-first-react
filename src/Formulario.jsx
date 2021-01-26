/* formulario  */
import React,{Component} from 'react';


class Formulario extends Component{

    constructor(props){
        super(props);
        
        this.state={
            nombre:"",
            correo:"",
            fecha:new Date()
        }

        this.cambiarNombre =this.cambiarNombre.bind(this)
        this.cambiarCorreo =this.cambiarCorreo.bind(this)
        this.cambiarFecha =this.cambiarFecha.bind(this)


            
    }/* fin metodo constructor */


    cambiarNombre(e){
       this.setState({
            nombre: e.target.value })
      }

      cambiarCorreo(e){
        this.setState({
             correo: e.target.value })
       }  

       cambiarFecha(e){
        this.setState({
            fecha: new Date()})
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
                                onChange={this.cambiarNombre} />
                            
                            </div>

                
                            <div className =" ed-item l-40 form__item">
                                <label>Correo Electronico </label>
                                    <input 
                                     aria-label ="email" 
                                     type ="email" 
                                     onChange={this.cambiarCorreo}

                                      />
                            </div>

                    </div>

               {/*     <div className="ed-item form__item">

                     <input className="button full small" type="submit" value="Enviar"
                      />

                   </div> */}

                   <div>
                   <h4>
                   {Math.ceil(this.state.fecha/1000)}

                   </h4>

                   </div>



                    

                  


                    
                    
                    
                        

                    
            </form>
                <div>

                <h1>{`hola ${this.state.nombre}`}</h1>
            <span>{`tu correo es ${this.state.correo}`}</span>



                </div>




            </div>
                    

                   

                    


            </>


        )


    }

    componentDidMount(){

        this.intervaloFecha = setInterval(()=>{
            this.cambiarFecha()
            console.log(new Date()) } 
            
            , 1000)
    }




   componentDidUpdate(prevState,prevProps){
     /*  console.log(prevState )
      console.log(prevProps ) */

    }


    componentWillMount(){
        clearInterval(this.intervaloFecha)


    }











}/* fin de clase formulario */




export default Formulario;