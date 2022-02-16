const express = require('express');
const databaseConfig = require('./config/database.js');
const expressConfig = require('./config/express.js')
const routesConfig = require('./config/routes.js')



start()

async function start(){
    // set up
    const app = express();
expressConfig(app);
await databaseConfig(app);
routesConfig(app);
app.get('/',(req,res)=> {
    console.log(req.session)
    res.render('home',{layout:false})
});

app.listen(3000, ()=>console.log('>> > > > > > > >> > Server is live <<    < < < < < < < '))
//
}