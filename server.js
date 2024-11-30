const express=require('express');
const path=require('path');
const app=express();
const port=3000;

app.use(express.static(path.join(__dirname,'.')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'.','home.html'));
});

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
});