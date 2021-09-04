const path = require('path');

const controller = {
    index: function(req,res){
        res.sendFile(path.resolve(__dirname, '../index.html'));
    },
}

module.exports = controller;