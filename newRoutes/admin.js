const path=require('path');
const express=require('express');
const rootDir=require('../util/path');
const router=express.Router();

router.get('/add-product', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'view', 'addPdt.html'))
});

router.post('/add-product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
});

module.exports=router