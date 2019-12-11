const { model, Schema} = require ("mongoose")

const buildingSchema = new Schema(
{
  clave_edificio: {
    type: String,
    required: true            
  },
  direccion: {
    type: String,
    required: true
  }},
  {
    timestamps: true,
    versionKey: false
  }
);
    
module.exports = model("Building", buildingSchema);

