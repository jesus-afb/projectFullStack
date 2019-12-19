import axios from "axios";


// aqui cual va , necesita ser una variable para cuando haga deploy ?
const baseURL = 'http://localhost:3000/edificios' //`${process.env.BACKEND}/edificios`

const payment = axios.create({
    baseURL,
    withCredentials: true
})

const PaymentService = {
  
    getpayments: () => {
        return payment.get("/allpayments")
    }
}

export default PaymentService



