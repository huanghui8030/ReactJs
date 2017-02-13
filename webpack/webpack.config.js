var path = require('path');
module.exports = {
    entry : path.join(__dirname , './app/entry.js') ,
    output : {
        path : path.join(__dirname , 'out') ,
        publicPath : './out/' ,
        filename : 'bundle.js'
        
    }
};