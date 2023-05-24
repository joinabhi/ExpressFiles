const express=require('express');
const bodyParser=require('body-parser')

const app=express();
const adminRouter=require('./routes/message');
const shopRouter=require('./routes/login')

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRouter);
app.use(shopRouter);




app.listen(1000)
