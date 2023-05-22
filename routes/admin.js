const express=require('express');
const router=express.Router();

router.get('/add-product', (req, res, next)=>{
   res.send('<body><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></body>')
    })
router.post('/add-product', (req, res, next)=>{
    console.log(req.body);
   res.redirect('/')
})

module.exports=router;