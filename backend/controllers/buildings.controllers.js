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
            console.log( allUsers)
            res.json({status: 200, data:allUsers}) 
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
    
    //falta probar en postman 


// exports.GetBuildingContacts = async (req,res,next) => {
//     try{
//         const buildingcontacts = await User.find(req.params.id_building)
//         console.log(buildingcontacts)
//         res.json({status: 200, data:buildingcontacts}) 
//     }catch(e) {
//         console.error(e)
//         res.status(400).json({msg: 'error'})
//     }}







 























// /////////////////
// // Administrador
// //////////////

// // exports.GetAdminMain = async (req, res, next) => {
// //     // Modelcreate(req.body()).then =>
// //     res.json({status: "Main page del Administrador"})
// // }

// exports.GetBuildings = async (req, res, next) => {
//     let allBuildings = await Building.find()
//     // Modelcreate(req.body()).then =>
//     res.json({allBuildings})
// }

// exports.GetContacts = async (req, res, next) => {
//     // Modelcreate(req.body()).then =>
//     res.json({status: "Vista de todos los inquilinos de todos los edificios"})
// }

// exports.GetNewBuilding = async (req, res, next) => {
//     // Modelcreate(req.body()).then =>
//     res.json({status: "Formulario para nuevo edificio"})
// }

// exports.PostNewBuilding = async (req, res, next) => {
//     //   const { title, description } = req.body;
//     //const { user } = req;
//      res.json({status: "Mando datos para crear nuevo edificio"})
// }

// exports.GetBuildings = async (req, res, next) => {
//     // Modelcreate(req.body()).then =>
//     res.json({status: "Vista de todos los edificios del Admin"})
// }

// /////////////////
// // 1 edificio

// exports.get1Building = async (req, res) => {
//     //const { id } = req.params;
//     //const building = await Building.findById(id);
//     res.json({status :"Vista de un solo edificio y sus departamentos"});
// };

// exports.get1BuildingContacts = async (req, res) => {
//     //const { id } = req.params;
//     //const building = await Building.findById(id);
//     res.json({status :"Busqueda de un solo edificio y sus inquilinos"});
// };

// exports.get1BuildingPayments = async (req, res) => {
//     //const { id } = req.params;
//     //const building = await Building.findById(id);
//     res.json({status :"Busqueda de un solo edificio y todos sus pagos"});
// };
// /////////////////
// // INQUILINO
// //////////////

// exports.GetUserMain = async (req, res, next) => {
//     // Modelcreate(req.body()).then =>
//     res.json({status: "Main page del Inquilino"})
// }

// exports.getUser = async (req, res) => {
//     //const { id } = req.params;
//     //const building = await User.findById(id);
//     res.json({status :"Vista de un usuario y sus datos"});
// };

// exports.GetNewUser = async (req, res, next) => {
//     // Modelcreate(req.body()).then =>
//     res.json({status: "Formulario para nuevo inquilino"})
// }

// exports.PostNewUser = async (req, res, next) => {
//     //   const { title, description } = req.body;
//     //const { user } = req;
//      res.json({status: "Mando datos para crear nuevo inquilino"})
// }

// exports.getUserPayments = async (req, res) => {
//     //const { id } = req.params;
//     //const building = await User.findById(id);
//     res.json({status :"Vista de un usuario y sus pagos"});
// };

// exports.GetNewPayment = async (req, res, next) => {
//     // Modelcreate(req.body()).then =>
//     res.json({status: "Formulario para nuevo inquilino"})
// }