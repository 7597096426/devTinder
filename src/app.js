const express = require('express');
const app = express();
const connectDb = require('./config/database');

connectDb().then(()=>{
    console.log('db connected successfully');
    app.listen(7777, () => {
        console.log('server running successfully');
    });
}).catch((err)=>{
    console.log('error in db connection');
}
);



