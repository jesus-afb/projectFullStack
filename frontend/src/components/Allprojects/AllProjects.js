import React from "react";
import { Card } from 'antd'

import 'bootstrap/dist/css/bootstrap.css'

import { MyContext } from '../../context'
const { Meta } = Card


export default function AllProjects(props) {
    return (
        <MyContext.Consumer>
            {context => (
                <div className="form">
                    <h1>Edificios Existentes</h1>
                    {context.allProjects.map((project, i) => {
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