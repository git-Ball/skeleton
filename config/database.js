const mongoose = require('mongoose')

require('../models/User.js')

//TODO change database name
const dbName = 'wildlife';
const connectionString = `mongodb://127.0.0.1/${dbName}`;
module.exports = async (app)=>{
    try{
await mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex:false
});
console.log('DB Connected!!!!!!!');
mongoose.connection.on("error", (err) => {
  console.error("Database Error");
  console.error(err);
});
}
catch(err){
    console.error("Error Connection to DB");
    // console.error(err);
    process.exit(1);
}
};