const router = require('express').Router();
const { 
    Create, 
    GetCover,
    GetAdminMain,
    GetBuildings,
    GetContacts,
    GetNewBuilding,
    PostNewBuilding,
    get1Building,
    get1BuildingContacts,
    get1BuildingPayments,
    GetUserMain,
    getUser,
    PostNewUser,
    GetNewUser,
    getUserPayments,
    GetNewPayment,
    PostNewPayment
} = require('../controllers/buildings.controllers');


// pagina de portada
router.get('/', GetCover)

/////////////////////
//del adminisrtador
////////////////////
router.get ('/A/main',GetAdminMain)
router.get ('/A/edificios',GetBuildings)
router.get ('/A/agenda',GetContacts)
router.get ('/A/newbuilding',GetNewBuilding)  //formulario
router.post ('/A/newbuilding',PostNewBuilding)  //POST

// de un edifcio
router.get ('/A/edificios/:id_building',get1Building)
router.get ('/A/edificios/:id_building/:id_inquilinos',get1BuildingContacts)
router.get ('/A/edificios/:id_building/pagos',get1BuildingPayments)


/////////////////
//del inquilino
///////////////
router.get ('/signup',GetNewUser)
router.post ('/signup',PostNewUser)
router.get ('/U/main',GetUserMain)
router.get ('/U/:id/misdatos',getUser)
router.get ('/U/:id/pagos',getUserPayments)
router.get ('/U/:id/newpayment',GetNewPayment)  //formulario
router.post ('/U/:id/newpayment',PostNewPayment) //POST

module.exports = router;