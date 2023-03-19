module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.PROD_HOST': JSON.stringify(process.env.PROD_HOST)
        }),
    ],
};