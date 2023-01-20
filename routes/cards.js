const express = require('express');
const router = express.Router();
const Cards = require('../models/cards');


router.get('/',async(req, res) =>{
try{
const card = await Cards.find()
   res.json(card)
}catch(err){
   res.send('Error'+err); 
}

})


router.post('/',async(req, res) =>{
   const card = new Cards({
      Header:req.body.Header,
      title:req.body.title,
      text:req.body.text,
      number:req.body.number
   })
   try{
     const a1 =  await card.save()
         res.json(a1);
      }catch(err){
         res.send('Error'); 
      }

   
   })

   
router.get('/:id',async(req, res) =>{
   try{
      const card = await Cards.findById(req.params.id)
         res.json(card)
      }catch(err){
         res.send('Error'+err); 
      }

   
   })


   

  


module.exports = router