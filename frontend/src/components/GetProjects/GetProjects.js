import React , {Component} from "react";
import { Card } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import BuildingService from './../../services/BuildingService'


const { Meta } = Card

class GetProjects extends Component {
    state ={
        projects:[]
}
    
   componentDidMount = async () => {
         
        const {data} = await BuildingService.getbuildings()
        this.setState({ projects: data.allBuildings })
        console.log(this.state.projects)
       
  }  
    
    render(){
       
    return (  

                <div className="form">
                   
            
                    <h1>Los Edificios</h1>
                    {this.state.projects.map((project, i) => {
                     return(
                     <Card
                     hoverable
                     style={{ width: 240 }}
                     
                 >
                     <Meta title={project.name} description={project.direccion} key={i}/>
                 </Card>
                     ) 
                    })}
                </div>

    )}
}
export default GetProjects