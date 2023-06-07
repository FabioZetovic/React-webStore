const router =  require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);


router.post("/payment",(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        ammount:req.body.ammount,
        currency:"usd",
    },(stripeError, stripeRes)=>{
        if(stripeError){
            res.status(500).json(stripeError)
        }else{
            res.status(200).json(stripeRes)
        }
    })
})


module.exports = router;