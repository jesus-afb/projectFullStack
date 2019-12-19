import React , {Component} from "react";
import { Card } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import UserService from '../../services/UserService'
const { Meta } = Card

class GetUsers extends Component {
    state = {
        users:[{}]
}

componentDidMount() {
    UserService.getusers()
    .then(({data}) => {
        this.setState ({ users: data.allUsers })
    })
    .catch(err => console.log(err))
}

render(){
    
    let todosLosUsers = []
        this.state.users.forEach (e => {
            todosLosUsers.push(e)
    })
    let cardUsers = todosLosUsers.map((e,i) => (
                  <Card
                     hoverable
                     style={{ width: 240 }}
                     key={i}
                     >

                     <Meta title={e.name} description={e.clave_edificio} key={i}/>

                 </Card>
        ))
        return (  

            <div className="form">
               
        
                <h1> Los Usuarios </h1>
                {cardUsers}
                
            </div>

)}
}




export default GetUsers