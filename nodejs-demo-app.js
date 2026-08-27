const express = require('express');
const app = express();
const port = 3000;

app.get('/home' , (req , res) => {
    res.send('Hello visitor!!!!!');
})

app.listen(port , () => {
    console.log('nodejs-demo-app has started running express server.')
})