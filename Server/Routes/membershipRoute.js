const e=require('express');
const appRouter=e.Router();
const { body, validationResult } = require('express-validator');
const ProviderModel=require('../models/Provider');

/* TESTING API CALLS GET AND POST 
appRouter.get('/login',(req,res)=>{
    res.send("this is login page end point");
})

appRouter.post('/register',(req,res)=>{
    const obj={
        name:req.body.name,
        message:"this is a message from local server"
    }
    res.send(obj);
}) */

//when provider posts some order this api call is made.
appRouter.post('/PostData',[
    body(['name','location'],'please fill this').notEmpty(),
    body('mobile_number').notEmpty().isMobilePhone(),
],async(req,res)=>{
    // console.log(req.body);
    const errorList=validationResult(req);
    const errors=errorList.array();
    // console.log(errors);
    // res.send("hy from server");
    /* When you use res.status(400).json({}) to send a response, it sends the response to the client but doesn't stop the execution of the function. Without a return statement, the function continues executing the code below it, including the create method. */
    if(errors.length>0){
        return res.status(400).json({success:false,message:"Fill all the fields", errors});
    }

    ProviderModel.create(
        {
            name: req.body.name,
            mobile_number: req.body.mobile_number,
            location:req.body.location,
            note:req.body.note
        }
    )
    .then((result)=>{
        res.status(201).json({success:true,obj:result,message:"ticket created successfully"});
    })
    .catch(error=>{
        res.status(400).json({success:false,message:"no ticket created! some error occured",error});
    })
});

//when any user opens our page he will be able to see all avialable orders. Because this api fetches all the orders from database.
appRouter.get('/getData',
(req,res)=>{
    ProviderModel.find({})
    .then((documents) => {
        res.json({documents,message:"data fetched successfully!"}); // Send the retrieved documents as a JSON response
      })
      .catch((error) => {
        // console.error('Error retrieving documents:', error);
        res.status(500).json({success:false,message: 'An error occurred while fetching documents' });
      });
});

//when user accepts the order. record will be removed from database.
appRouter.delete('/deleteData/:Id',(req,res)=>{
    ProviderModel.findById(req.params.Id)
    .then(async(data)=>{
        if(data){
            const a=await ProviderModel.deleteOne(data);
            res.status(200).json({success:true,message:"Thank you for accepting the order.",data});
        }
        else{
            res.status(404).json({success:false,message:"no record found"});
        }
    })
    .catch((error)=>{
        res.status(404).json({success:false,message:"some internal error occured",error});
    })
})  

module.exports=appRouter;