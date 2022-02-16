const authContoller = require('../contollers/auth.js')

module.exports =(app)=>{
    app.use(authContoller)
}