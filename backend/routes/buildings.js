const router = require('express').Router();
const { 
    Create, 
    // GetCover,
    // GetAdminMain,
    GetBuildings,
    // GetContacts,
    // GetNewBuilding,
    // PostNewBuilding,
    GetBuilding,
    // get1BuildingContacts,
    // get1BuildingPayments,
    // GetUserMain,
    // getUser,
    // PostNewUser,
    // GetNewUser,
    // getUserPayments,
    // GetNewPayment,
    // PostNewPayment
} = require('../controllers/buildings.controllers');


// pagina de portada
router.post('/', Create)
router.get('/', GetBuildings)
router.get('/:id',GetBuilding)

/////////////////////
//del adminisrtador
////////////////////
// router.get( '/A', (req, res, next) => {
//     res.status(200).json({msg: 'todo chido'});
// });

// router.get ('/A/main',GetAdminMain)  // lo hace el front
// router.get ('/A/edificios', GetBuildings)
// router.get ('/A/agenda',GetContacts)
// router.get ('/A/newbuilding',GetNewBuilding)  //formulario => es del front
// router.post ('/A/newbuilding',PostNewBuilding)  //POST

// // de un edifcio
// router.get ('/A/edificios/:id_building',get1Building)
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