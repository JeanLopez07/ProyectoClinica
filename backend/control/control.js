import {Doctor} from '../models/Doctor.js';

const cdoctores = async (req, res) => {
    try {
      // Verificarmo si el usuario ya está registrado en la base de datos
      console.log(req.body)

      const { email ,password} = req.body;

      const existingDoctor = await Doctor.findOne({ email });
      const existingDoctor_pass = await Doctor.findOne({ password });

      if (existingDoctor && existingDoctor_pass) {
        // Si el usuario ya existe, con esta función se envía un mensaje de error 400
        return res.status(400).json({ mensaje: 'El usuario ya está registrado en la base de datos y las contraseñas coinciden' });
    }
    
  
      // Si el usuario no está registrado, creamos uno nuevo
      const doctor = new Doctor(req.body); 
      await doctor.save(); 
  
      res.json({ mensaje: 'Registrando un nuevo doct' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Hubo un error' });
    }
  };
  

const login = (req, res)=> {
    res.send({msg:"desde la ruta /api/doctores"})
};

const perfil = (req, res)=> {
    res.json({msg:"desde la ruta /api/doctores/perfil"})
};


export {
    cdoctores,login,perfil
}

//
