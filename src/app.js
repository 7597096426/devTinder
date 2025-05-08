const express = require('express');

const app = express();

app.use('/test',[(req,res,next)=>{
    //res.send('test route');
    next();
},(req,res,next)=>{
   // res.send('test route 2');
    next();
},(req,res,next)=>{
    console.log('last code response');
    res.send('last code response');
    //next();
}]
)



app.listen(7777,()=>{
    console.log('server running successfully');
});