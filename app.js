const express=require('express');
const path=express('path')
const bodyParser=require('body-parser')

const app=express();
const adminRouter=require('./newRoutes/admin');
const shopRouter=require('./newRoutes/shop');
const contactRouter=require('./newRoutes/contactUs');

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRouter);
app.use(shopRouter);
app.use(contactRouter);


app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'view', '404.html'))
})
app.listen(1111)
