console.log("probando el funciomaniento de NODE JS")
import express from "express";
import conectarDB from "./config/db.js";
import dotenv from 'dotenv'
import doctorRoutes from './routes/doctorRoutes.js'

const app = express();

dotenv.config();
conectarDB(); //conectamos la base de datos
app.use(express.json());
app.use('/doctores',doctorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
}); //pasamos un puerto para ejecutar el backend