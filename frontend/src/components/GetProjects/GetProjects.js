import React from "react";
import { Card } from 'antd'
//import DataService from '../../services/DataService';
import 'bootstrap/dist/css/bootstrap.css'
import { MyContext } from '../../context'
const { Meta } = Card

export default function GetProjects(props) {
   
    return (  
        <MyContext.Consumer>
            {context => (
                <div className="form">
                    <h1>Mis Edificios</h1>
                    {context.projects.map((project, i) => {
                    console.log("mi context project" + context.project)
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
        </MyContext.Consumer>
    )
}