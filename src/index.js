const express =require('express');
const bodyParser=require("body-parser")




require('dotenv').config();

const {PORT}=require('./config/serverConfig.js');

const  setupAndStartServer =async () => {
    // create the express object 
    const app = express();
     
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT,()=>{
        console.log(`Server start at PORT = ${PORT}`)
    })

}
setupAndStartServer()