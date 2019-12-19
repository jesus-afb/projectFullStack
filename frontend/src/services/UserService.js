import axios from "axios";


// aqui cual va , necesita ser una variable para cuando haga deploy ?
const baseURL = 'http://localhost:3000/edificios' //`${process.env.BACKEND}/edificios`

const user = axios.create({
    baseURL,
    withCredentials: true
})

const UserService = {
  
    getusers: () => {
        return user.get("/users_all")
    }      
  
}

export default UserService

