const router = require('express').Router();
const { 
    Create, 
    GetBuildings,
    GetContacts,
    
    GetAllPayments,
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
router.get('/allpayments',GetAllPayments) //nueva

module.exports = router;





