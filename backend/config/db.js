import mongoose from 'mongoose'

//1. nos conectamos con la base de datos
const conectarDB = async() => {
    //2. usamos un try catch para verififcar si existe algun error
    try{
        //5. creamos una variable db para conectarnos con atlas
        const db = await mongoose.connect(process.env.MONGO_URI);
    
        const url = `${db.connection.host}:${db.connection.port}`
        //8. imprimimos un log
        console.log(`MongoDB funcional!!|:) --> url: ${url}`)
}
    catch (error){
        //3. inyectamos la variable error
        console.log(`error:${error.message}`);
        //4.imprimimos un mensaje de error si no lo logramos conectarnos
        process.exit(1);
    }
}

export default conectarDB;