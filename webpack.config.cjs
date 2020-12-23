module.exports = [{
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        library: "Questions",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}]
