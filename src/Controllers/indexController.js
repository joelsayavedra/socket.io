const path = require('path');
// const {io}=require("../app");

const controller = {
    index: function(req,res){
        // io.on("connection",client=>{
        //     console.log("Controlador cargado");
        //     client.on("disconnect",()=>{
        //         console.log("Controlador descargado");
        //     });
        // });
        res.sendFile(path.resolve(__dirname, '../index.html'));
    },
}

module.exports = controller;