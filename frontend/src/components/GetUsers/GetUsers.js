import React , {Component} from "react";
import { Card } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import UserService from './../../services/UserService'


const { Meta } = Card

class GetUsers extends Component {
    state ={
        users:[]
}
   
   componentDidMount = async () => {
        const {data} = await UserService.getusers()
        this.setState({ users: data.allUsers })
    }  
        
    render(){
       
        return (  
            <div className="form">
                 <h1>Los Usuarios</h1>
                    {this.state.users.map((user, i) => {
                     return(
                     <Card
                     hoverable
                     style={{ width: 240 }}
                    >
                     <Meta title={user.name} description={user.direccion} key={i}/>
                 </Card>
                     ) 
                    })}
                </div>

    )}
}
export default GetUsers