const express = require('express');
const router = express.Router();
const Alien = require('../models/login');


router.get('/',async(req, res) =>{
try{
const aliens = await Alien.find()
   res.json(aliens)
}catch(err){
   res.send('Error'+err); 
}

})


router.post('/',async(req, res) =>{
   const alien = new Alien({
      name:req.body.name,
      pasword:req.body.pasword
   })
   try{
     const a1 =  await alien.save()
         res.json(a1);
      }catch(err){
         res.send('Error'); 
      }

   
   })

   
router.get('/:id',async(req, res) =>{
   try{
      const alien = await Alien.findById(req.params.id)
         res.json(alien)
      }catch(err){
         res.send('Error'+err); 
      }

   
   })


   router.patch('/:id',async(req, res) =>{
   try{
      const alien = await Alien.findById(req.params.id)

      alien.sub = req.body.sub
      const a1 = await alien.save();
         res.json(al)
      }catch(err){
         res.send('Error'+err); 
      }

   
   })

   router.delete('/:id',async(req, res) =>{
      try{
         const alien = await Alien.findById(req.params.id)
   
         alien.sub = req.body.sub
         const a1 = await alien.delete();
            res.json(al)
         }catch(err){
            res.send('Error'+err); 
         }
   
      
      })


module.exports = router