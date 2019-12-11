const router = require('express').Router();
const { 
    Create, 
    // GetCover,
    // GetAdminMain,
    GetBuildings,
    GetContacts,
    // GetNewBuilding,
    // PostNewBuilding,
    GetBuilding,
    GetBuildingContacts,
    // get1BuildingPayments,
    // GetUserMain,
    GetUser,
    PostNewUser,
    // getUserPayments,
    // GetNewPayment,
    // PostNewPayment
} = require('../controllers/buildings.controllers');


// completas
router.post('/', Create)
router.get('/', GetBuildings)
router.get('/:id',GetBuilding)
router.post('/newuser',PostNewUser)
router.get('/users/:id',GetUser )
router.get('/:id_building/users',GetBuildingContacts) //regresa vacio
router.get('/users',GetContacts) // falla



/////////////////////
//del adminisrtador
////////////////////

// router.get ('/A/main',GetAdminMain)  // lo hace el front
// router.get ('/A/newbuilding',GetNewBuilding)  //formulario => es del front

// // de un edifcio

// router.get ('/A/edificios/:id_building/:id_inquilinos',get1BuildingContacts)
// router.get ('/A/edificios/:id_building/pagos',get1BuildingPayments)


// /////////////////
// //del inquilino
// ///////////////
// router.get ('/signup',GetNewUser)  // lo hace el front
// router.post ('/signup',PostNewUser) 
// router.get ('/U/main',GetUserMain) // lo hace el front
// router.get ('/U/:id/misdatos',getUser) 
// router.get ('/U/:id/pagos',getUserPayments)
// router.get ('/U/:id/newpayment',GetNewPayment)  // lo hace el front (quizas si no necesita user id)
// router.post ('/U/:id/newpayment',PostNewPayment) //POST

module.exports = router;