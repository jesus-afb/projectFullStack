const router = require('express').Router();
const { 
    Create, 
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
// router.get('/:id',GetBuilding)
router.post('/newuser',PostNewUser)
router.get('/users/:id',GetUser )
router.get('/:id_building/users',GetBuildingContacts) 
router.get('/users', GetContacts) //funciona pero choca

module.exports = router;




// // de un edifcio

// router.get ('/A/edificios/:id_building/pagos',get1BuildingPayments)


// /////////////////
// //del inquilino
// ///////////////

// router.get ('/U/:id/misdatos',getUser) 
// router.get ('/U/:id/pagos',getUserPayments)
// router.post ('/U/:id/newpayment',PostNewPayment) //POST

////////////////////
//DEl FRONT

// router.get ('/A/main',GetAdminMain)  // lo hace el front
// router.get ('/A/newbuilding',GetNewBuilding)  //formulario => es del front
// router.get ('/U/:id/newpayment',GetNewPayment)  // lo hace el front (quizas si no necesita user id)
// router.get ('/signup',GetNewUser)  // lo hace el front
// router.get ('/U/main',GetUserMain) // lo hace el front
