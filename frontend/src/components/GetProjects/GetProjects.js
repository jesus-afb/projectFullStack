import React , {Component} from "react";
import { Card } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import BuildingService from './../../services/BuildingService'
const { Meta } = Card

class GetProjects extends Component {
    state = {
        projects: [{}]
}
    
    componentDidMount() {
         BuildingService.getbuildings()
        .then(({data}) => {
            this.setState ({projects: data.allBuildings })
        })
        .catch(err => console.log(err))
    }
    
    render(){

        let tochosLOsBuildings = []
        this.state.projects.forEach(e => {
            tochosLOsBuildings.push(e)
        })

        let cardBuilding = tochosLOsBuildings.map((e, i) => (
                  <Card
                     hoverable
                     style={{ width: 240 }}
                     key={i}
                     >

                     <Meta title={e.clave_edificio} description={e.direccion} key={i}/>

                 </Card>
        ))
       
    return (  

                <div className="form">
                   
            
                    <h1> Los Edificios </h1>
                    {cardBuilding}
                    
                </div>

    )}
}
export default GetProjects