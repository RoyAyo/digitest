//Set up mongoose connection
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI; //Development

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

const db = mongoose.connect(MONGO_URI,{useUnifiedTopology:true, useNewUrlParser:true}).then(() => {
    console.log('Connected successfully to Database');
}).catch((e : Error) => {
    console.log(e);
});

export default db;