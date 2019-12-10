exports.Create = async (req, res, next) => {
    // Modelcreate(req.body()).then =>
    res.json({status: "conectado chido"})

exports.GetCover = async (req, res, next) => {
    // Modelcreate(req.body()).then =>
    res.json({status: "Es la portada principal"})
}

/////////////////
// Administrador
//////////////

exports.GetAdminMain = async (req, res, next) => {
    // Modelcreate(req.body()).then =>
    res.json({status: "Main page del Administrador"})
}

exports.GetBuildings = async (req, res, next) => {
    // Modelcreate(req.body()).then =>
    res.json({status: "Vista de todos los edificios del Admin"})
}

exports.GetContacts = async (req, res, next) => {
    // Modelcreate(req.body()).then =>
    res.json({status: "Vista de todos los inquilinos de todos los edificios"})
}

exports.GetNewBuilding = async (req, res, next) => {
    // Modelcreate(req.body()).then =>
    res.json({status: "Formulario para nuevo edificio"})
}

exports.PostNewBuilding = async (req, res, next) => {
    //   const { title, description } = req.body;
    //const { user } = req;
     res.json({status: "Mando datos para crear nuevo edificio"})
}

exports.GetBuildings = async (req, res, next) => {
    // Modelcreate(req.body()).then =>
    res.json({status: "Vista de todos los edificios del Admin"})
}

/////////////////
// 1 edificio

exports.get1Building = async (req, res) => {
    //const { id } = req.params;
    //const building = await Building.findById(id);
    res.json({status :"Vista de un solo edificio y sus departamentos"});
};

exports.get1BuildingContacts = async (req, res) => {
    //const { id } = req.params;
    //const building = await Building.findById(id);
    res.json({status :"Busqueda de un solo edificio y sus inquilinos"});
};

exports.get1BuildingPayments = async (req, res) => {
    //const { id } = req.params;
    //const building = await Building.findById(id);
    res.json({status :"Busqueda de un solo edificio y todos sus pagos"});
};
/////////////////
// INQUILINO
//////////////

exports.GetUserMain = async (req, res, next) => {
    // Modelcreate(req.body()).then =>
    res.json({status: "Main page del Inquilino"})
}

exports.getUser = async (req, res) => {
    //const { id } = req.params;
    //const building = await User.findById(id);
    res.json({status :"Vista de un usuario y sus datos"});
};

exports.GetNewUser = async (req, res, next) => {
    // Modelcreate(req.body()).then =>
    res.json({status: "Formulario para nuevo inquilino"})
}

exports.PostNewUser = async (req, res, next) => {
    //   const { title, description } = req.body;
    //const { user } = req;
     res.json({status: "Mando datos para crear nuevo inquilino"})
}

exports.getUserPayments = async (req, res) => {
    //const { id } = req.params;
    //const building = await User.findById(id);
    res.json({status :"Vista de un usuario y sus pagos"});
};

exports.GetNewPayment = async (req, res, next) => {
    // Modelcreate(req.body()).then =>
    res.json({status: "Formulario para nuevo inquilino"})
}

exports.PostNewPayment = async (req, res, next) => {
    //   const { title, description } = req.body;
    //const { user } = req;
     res.json({status: "Mando datos para crear nuevo inquilino"})
}