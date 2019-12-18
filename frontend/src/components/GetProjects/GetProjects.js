import React from "react";
import { Card } from 'antd'
//import { Form, Input, Button, Select } from 'antd'
//import DataService from '../../services/DataService';
//import { FormAddProject }  from "../../components/styled-components/components"
//import DataService from '../../services/DataService'
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
                     return(
                     <Card
                     hoverable
                     style={{ width: 240 }}
                     cover={<img alt="photoProfile" src={project.photoURL} key={i}/>}
                 >
                     <Meta title={project.title} description={project.description} key={i}/>
                 </Card>
                     ) 
                    })}
                </div>
            )}
        </MyContext.Consumer>
    )
}