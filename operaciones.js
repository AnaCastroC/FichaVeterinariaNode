 const fs = require('fs'); // importamos el modulo de file system

 registrar = (nombre, edad, tipo, color, enfermedad) => {
  let citas = require('./citas.json'); // importamos el archivo json
  citas.push({nombre, edad, tipo, color, enfermedad}); // agrega un nuevo elemento al arreglo
  fs.writeFileSync('./citas.json', JSON.stringify(citas), 'utf-8'); // convierte el objeto a string
  console.log('mascota ingresada con éxito', citas); 
 }

 leer = () => {
     const citas = require('./citas.json'); // importamos el archivo json
     console.log('Citas registradas', citas);
 }

module.exports = {registrar, leer}; 


// PARA REALIZAR LO MISMO, PERO CONECTÁNDOSE A UNA BASE DE DATOS MONGODB
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/veterinaria', {useNewUrlParser: true, useUnifiedTopology: true});

// const citaSchema = new mongoose.Schema({
//     nombre: String,
//     edad: String,
//     tipo: String,
//     color: String,
//     enfermedad: String
// });

// const Cita = mongoose.model('Cita', citaSchema);

// registrar = async (nombre, edad, tipo, color, enfermedad) => {
//     const cita = new Cita({nombre, edad, tipo, color, enfermedad});
//     try{
//         await cita.save();
//         console.log('Cita registrada con éxito', cita);
//     } catch(error){
//         console.log(error);
//     }
// }

// leer = async () => {
//     try{
//         const citas = await Cita.find();
//         console.log('Citas registradas', citas);
//     } catch(error){
//         console.log(error);
//     }
// }

// module.exports = {registrar, leer};