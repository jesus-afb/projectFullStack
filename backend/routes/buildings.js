const router = require('express').Router();
const { 
    Create, 
    GetBuildings,
    GetContacts,
    
    // PostNewBuilding,
    GetBuilding,
    GetBuildingContacts,
    GetBuildingPayments,
    GetUser,
    PostNewUser,
    GetUserPayments,
    PostNewPayment
} = require('../controllers/buildings.controllers');


// completas
router.post('/', Create) // new building
router.get('/', GetBuildings)
router.get('/1building/:id',GetBuilding) 
router.post('/newuser',PostNewUser)
router.get('/users/:id',GetUser )
router.get('/users_b/:id_building',GetBuildingContacts) 
router.get('/users_all', GetContacts) 
router.post('/users/:id/newpayment', PostNewPayment)
router.get('/allpayments_b/:id_building',GetBuildingPayments)
router.get('/allpayments_1u/:id_user',GetUserPayments)


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
