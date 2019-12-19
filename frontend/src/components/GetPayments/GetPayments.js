import React , {Component} from "react";
import { Card } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import PaymentService from './../../services/PaymentService'


const { Meta } = Card

class GetPayments extends Component {
    state ={
        payments:[]
}
    
   componentDidMount = async () => {
          
        const {data} = await PaymentService.getpayments()
        console.log(data)
        this.setState({ payments: data.allpayments })
        console.log(this.state.payments)
       
  }  
    
    render(){
       
    return (  

                <div className="form">

                    <h1> Los Pagos</h1>
                    {this.state.payments.map((payment, i) => {
                     return(
                     <Card
                     hoverable
                     style={{ width: 240 }}
                     
                 >
                     <Meta title={payment.clave_edificio} description={payment.servicio_pagado} key={i}/>
                 </Card>
                     ) 
                    })}
                </div>
 
    )}
}
export default GetPayments