

const express = require('express');

const router = express.Router();

const { getProducts, saveProduct ,getIndividualsProducts} = require('../database/productdata');

 const { authorization } = require('../middleware/authorization')

 const {deleteProducts,updateproducts } = require('../database/productdata')


// router.get('/', authorization('product.read'), async (req, res) => {

//     const products = await getProducts();

//     console.log(products)


//     return res.send(products)


// }) 


router.get('/', authorization('product.read'), async (req, res,next) => {

  try{

    const products = await getProducts();
   console.log("get products",products)
    return res.send(products)
  }
  catch(error){
    next(error)
  }

   


 }) 


router.get('/:id',authorization('product.read') , async (req, res) => {

    const {id} = req.params;

    const oneproducts = await getIndividualsProducts(id);

    //product list individuals ki as a array me aa rahi hi object me lana hoga

    if(oneproducts.length > 0){

        return res.send(oneproducts[0]);

    }

    console.log(oneproducts)


    // return res.send(oneproducts) get data in objects

    return res.send({}) 


})

router.post('/',authorization('product.write'), async(req, res)=> {
    const data = req.body;
    const product = await saveProduct(data); 
    console.log(product)
    return res.send({message:"Product Saved"});
    
})




router.delete('/:id', async (req, res, next) => {


    try {
  
  
      const { id } = req.params;
      const delProduct = await deleteProducts(id)
  
     return res.send(delProduct)
    }
  
    catch (error) {
      next(error)
  
    }
  })
  




  router.put('/:id', async (req, res, next) => {

    try {
      const {id} = req.params;
  
  
  
      const {name,brand,description,price,quantity } = req.body;
  
      const result = await updateproducts(id, name,brand,description,price,quantity);
      console.log("database updates",result)


      return res.send(result)
      
  
    } catch (err) {
      next(err)
    }
  })










module.exports = router;