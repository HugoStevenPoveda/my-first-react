
import React,{Component} from "react"
import UsersCard from "../Molecules/UsersCard"
import axios from "axios"


class Users extends Component{

     constructor(props){
         super(props)
         this.state={

            users:[]
        }
    }
/* 
    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users' , {method:'get'})
        .then(response => response.json())
        .then(
            response2=>{
                this.setState({users:response2})


            }
        )} */

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(resp=>{

         this.setState({users:resp.data} )

  }
    
    )





}



     render(){

        const {users} = this.state
         return(
             
            <div className="ed-grid" >
                <h1>usuario steven</h1>

                <div className="ed-grid s-grid-1 m-grid-2 l-grid-4">
                {
                 users.map(u =>( 
                   <UsersCard 
                    key={u.id}
                    names={u.name}
                    username={u.username}
                    email={u.email}
                    />
                 ))

                }



                 
        

                </div>
          

            </div>
                    

                  
                 
                 
                 


         )


     }







}

export default Users;