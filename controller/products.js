const path = require("../util/path");
const Product=require('../models/products');


exports.getAddProducts=(req, res, next)=>{
    res.render('add-product', {
        pageTitle:'Add Product',
        path:'/admin/add-product',
        formsCSS:true,
        productCSS:true,
        activeAddProduct:true
    })
};
exports.getProducts = (req, res, next)=>{
    const prodId=req.params.productId;
    product.findById(prodId, product=>{
       res.render('shop/product-detail',{
        product:product,
        pageTitle:product.title
       })
    })
    res.redirect('/');
}

exports.postAddProducts=(req, res, next)=>{
   const product=new Product(req.body.title);
   product.save();
    res.redirect('/')
    
}

exports.getProducts=(req, res, next)=>{
    product.fetchAll(product=>{
        res.render('shop',{
            prods:products,
            pageTitle:'Shop',
            path:'/',
            hasProducts:products.length>0,
            activeShop:true,
            productCSS:true
        })   
    });
  
}