const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req,res)=>{
    const filePath = path.join(__dirname, 'build', 'index.html')
    res.sendFile(filePath);
})



app.listen(4000);