const express=require('express');
const path=require('path')
const bodyParser=require('body-parser')

const app=express();
const adminRouter=require('./newRoutes/admin');
const shopRouter=require('./newRoutes/shop');
// const contactRouter=require('./newRoutes/contactUs');

const errorController=require('../controller/error')

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRouter);
app.use(shopRouter);
// app.use(contactRouter);
app.use(errorController.get404)


app.use((req, res, next)=>{
    res.status(404).render('404',{pageTitle:'Page Not Found'})
});
app.listen(1111)
