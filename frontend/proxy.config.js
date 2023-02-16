const proxy = [
    {
        context: '/app',
        target: 'http://localhost:8000/product',
        pathRewrite: { '^/app': '' }
    }
];
module.exports = proxy;