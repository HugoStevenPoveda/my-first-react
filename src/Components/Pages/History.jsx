import React from "react";

const Historial=({match,location,history})=>{
      return(
         <>

           <div>
           <h1>match</h1>
           <p>-------------------------</p>
           {  
                  JSON.stringify(match)
           }
           <h1>location</h1>
           {    JSON.stringify(location)}
           <h1>history</h1>
           {    JSON.stringify(history)}

        </div>


          
          
          
          
          
         </>
          
          )

}

export default Historial;