const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const app = express();
const sequelize = require('./config/database')

app.use(bodyParser.json());

// app.use((req,res,next) => {
//     res.setHeader('Access-Control-Allow-Origin', '#');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
// })

app.use('/admin', adminRoutes)

const connect = async()=>{
    app.listen(process.env.PORT || 9090 ,async()=>{
        try {
            //Se emplea ORM sequelize para evitar ataques de SQLInjection, ya que transforma la data en objetos
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            
        } catch (error) {   
            console.error('Unable to connect to the database:', error);
            //reintentarse conectarse con la base de datos
            setTimeout(await sequelize.authenticate(), 9090);
        }
    })
}
connect();