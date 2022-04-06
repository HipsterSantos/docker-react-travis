const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    console.log('hey there');
})


app.listen(8000,()=>{
    console.log('listening on port ')
})


