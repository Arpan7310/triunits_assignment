const express=require("express")
const router=express.Router();


router.get("/",async (req,res)=>{
    try{
        res.send({response:"I am alive"}).status(200)
    }
    catch(err){
        console.log(err)
    }
});

module.exports=router;