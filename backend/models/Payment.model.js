const { model, Schema } = require("mongoose");

const paymentSchema = new Schema(
  {

    id_building: {
        type: Schema.Types.ObjectId,
        ref: "Building" 
    },
    id_user: {
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    clave_edificio:{  
        type: String,
    //    required: true
    },
    servicio_pagado:{
        type: String,
        enum: ["mantenimiento", "pago extraordinario", "servicios", "luz", "gas", "otro" ]
    },
    monto_pagado:{
        type: Number,
    //    required: true
    },
    payment_details:{
        type: String
    },
    execution_date:{
          type: String,
     //   type: Date,
    //    required: true
    }
}, {
        timestamps: true,
        versionKey: false  // 
      }
      );
    
      module.exports = model("Payment", paymentSchema);    
    
 