import axios from "axios";

// aqui cual va , necesita ser una variable para cuando haga deploy ?
const baseURL = 'http://localhost:3000/edificios'

const building = axios.create({
    baseURL,
    withCredentials: true
})

const BuildingService = {
    getbuildings: () => {
        return building.get("/")
    },
    getUser: building => {
        return building.post('/myUsers', building)
    },
    allUsers: building => {
        return building.post('/allUsers', building)
    },
    logout: () => {
        return building.get('/logout')
    }
}

export default BuildingService



