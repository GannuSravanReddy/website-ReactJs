const proxy = require('http-proxy-middleware')

module.exports = (app) => {
    app.use(proxy('/insert.php',{
        target: 'http://localhost/reactinsert/reactpost.php',
        changeOrigin: true
    }))
}