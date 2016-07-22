module.exports = {
    entry: "./src/js/entry.js",
    output: {
        path: __dirname,
        filename: "./build/build.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};