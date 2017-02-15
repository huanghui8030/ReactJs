var path = require('path');
module.exports = {
    entry : path.join(__dirname , './app/entry.js') ,
    output : {
        path : path.join(__dirname , 'out') ,
        publicPath : './out/' ,
        filename : 'bundle.js'
        
    },
    module : {
        loaders : [
            {test:/\.js$/,loader:'babel-loader'},
            {test:/\.css$/,loader:'style!css'},
            {test:/\.(jpg|png|gif|jpeg)$/,loader:'url?limit=8192'},
            {test:/\.scss$/,loader:'style|css|sass'},
            {test:/\.less$/,loader:'style|css|less'}
        ]
    }
};