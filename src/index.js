const express =require('express');
require('dotenv').config();

const {PORT}=require('./config/serverConfig');

const  setupAndStartServer =async () => {
    // create the express object 
    const app = express();


    app.listen(PORT,()=>{
        console.log(`Server start at PORT = ${PORT}`)
    })

}