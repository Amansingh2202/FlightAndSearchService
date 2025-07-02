const express = require('express');
const bodyParser=require("body-parser")
const db = require('./models/index.js');
const sequelize = require('sequelize');

const {City,Airport}= require('./models/index.js');




require('dotenv').config();

const {PORT}=require('./config/serverConfig.js');

const ApiRoutes= require('./routes/index.js');

const  setupAndStartServer =async () => {
    // create the express object 
    const app = express();
     
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=>{
        console.log(`Server start at PORT = ${PORT}`)

     // giving me the details of all the airport by cityId 2 
    //    const city=await City.findOne({
    //     where:{
    //       id:2
    //     }
    //    })
                  
             
    //    const airport =await city.getAirports();
    //    console.log(airport.map((a)=>a.toJSON()));

     

       
    //  if(process.env.SYNC_DB){
    //     db.sequelize.sync({force:true});
    //  }
    


    })

}
setupAndStartServer()