let Building = require('../models/Building.model')
let User = require('../models/User')
let Payment = require('../models/Payment.model')

//probadas

exports.Create = async (req, res, next) => {
    try {
        const newBuilding = await Building.create({
            clave_edificio : req.body.clave_edificio,
            direccion : req.body.direccion
        })
        console.log (newBuilding)
        res.json({status:200, data: {         
            clave_edificio : newBuilding.clave_edificio,
            direccion : newBuilding.direccion,
            id: newBuilding._id         
        }})
    } catch(e) {
        console.error(e)
        res.status(400).json({msg: 'error'})
    }
}

exports.GetBuildings = async (req,res,next) => {
   const allBuildings = await Building.find()
   console.log(allBuildings)
   res.status(200).json({allBuildings}) 
}

exports.GetBuilding = async (req,res,next) => {
    console.log(req.params)
//    const building = await Building.find({ _id: req.params.id})
    const building = await Building.findById(req.params.id)
console.log(building)
    res.json({status: 200, data:building}) 
 }

     
exports.GetContacts = async (req,res,next) => {
        try{
            const allUsers = await User.find()
            console.log( allUsers )
            res.status(200).json({ allUsers}) 
        }catch(e) {
            console.error(e)
            res.status(400).json({msg: 'error'})
    }}


exports.PostNewUser = async (req, res, next) => {
    try {
        const {
            address,
            email,
            name,
            clave_edificio,
            phone,
            administrator,
            id_building
             } = req.body

        console.log (id_building, 
        administrator,
        phone,
        clave_edificio,
        name,
        email,
        address )

        const newUser = await User.register({ address, email, name, clave_edificio, phone, administrator,id_building}, req.body.password)
        res.status(200).json({newUser})
    } catch(e) {
        console.error(e)
        res.status(400).json({msg: 'error'})
    }
    }

exports.GetUser = async (req,res,next) => {
    try{
const user = await User.findById(req.params.id)
console.log("lo de params.id: "+ req.params.id)
    console.log("lo de user:" + user)
    res.json({status: 200, data:user}) 
}catch(e) {
    console.error(e)
    res.status(400).json({msg: 'error'})
}}

exports.GetBuildingContacts = async (req, res, next) => {
    try {
        let {
            id_building
                } = req.params

        console.log ("el id building :" + id_building)

        const buildingcontacts = await User.find({ id_building})
        res.status(200).json({buildingcontacts})
    } catch(e) {
        console.error(e)
        res.status(400).json({msg: 'error'})
    }
    }

exports.PostNewPayment = async (req, res, next) => {
    
    try {
        let {
            id_building,
            id_user,
            clave_edificio,
            servicio_pagado,
            monto_pagado,
            payment_details,
            execution_date
                } = req.body

        console.log (
            id_building,
            id_user,
            clave_edificio,
            servicio_pagado,
            monto_pagado,
            payment_details,
            execution_date
        )

        const postNewPayment = await Payment.create({ id_building, id_user, clave_edificio, 
                                    servicio_pagado, monto_pagado, payment_details, execution_date
            })
        res.status(200).json({postNewPayment})
    } catch(e) {
        console.error(e)
        res.status(400).json({msg: 'error'})
    }
    }

exports.GetBuildingPayments = async (req, res, next) => {
    try {
        let {
            id_building
                } = req.params

        console.log ("el id building :" + id_building)

        const buildingpayments = await Payment.find({ id_building})
        res.status(200).json({buildingpayments})
        console.log(buildingpayments + "chale")
    } catch(e) {
        console.error(e)
        res.status(400).json({msg: 'error'})
    }
    }

    
    exports.GetUserPayments= async (req, res, next) => {
        try {
            console.log("Los req.params: " + req.params)
            let {
                id_user
            } = req.params
            
            console.log ("el id user :" + id_user)
            
            const userpayments = await Payment.find({ id_user})
            res.status(200).json({userpayments})
            console.log(userpayments)
        } catch(e) {
            console.error(e)
            res.status(400).json({msg: 'error'})
        }
    }

    exports.GetAllPayments= async (req, res, next) => {
        try {

            const allpayments = await Payment.find()
            res.status(200).json({allpayments})
            console.log(allpayments)
        } catch(e) {
            console.error(e)
            res.status(400).json({msg: 'error'})
        }
    }
    








 

















