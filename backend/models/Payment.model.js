const { model, Schema } = require("mongoose");

const paymentSchema = new Schema(
  {
    id_payment: {  //duda se outogenera ?
    },
    id_building: {
        type: Schema.Types.ObjectId,
        ref: "Building" 
    },
    id_user: {
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    building_code:{
        type: String,
        required: true
    },
    servicio_pagado:{
        type: string,
        enum: ["mantenimiento", "pago extraordinario", "servicios", "luz", "gas", "otro" ]
    },
    monto_pagado:{
        type: Number,
        required: true
    },
    payment_details:{
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
    
 