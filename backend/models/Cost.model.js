const { model, Schema } = require("mongoose");

const CostSchema = new Schema(
  {
    id_Cost: {  //duda se outogenera ?
    },
    id_building: {
        type: Schema.Types.ObjectId,
        ref: "Building" 
    },
    building_code:{
        type: String,
        required: true
    },
    servicio_pagado:{
        type: string,
        enum: ["vigilancia", "mantenimiento mecánico", "pago extraordinario", "limpieza", "servicio eléctrico", "servicio de gas", "otros costos" ]
    },
    monto_pagado:{
        type: Number,
        required: true
    },
    cost_details:{
        type: string
    },
    execution_date:{
        type: Date,
        required: true
    },

    {
        timestamps: true,
        versionKey: false  // 
      })
    
      module.exports = model("Favor", favorSchema);