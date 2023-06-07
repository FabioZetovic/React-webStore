const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./rute/user");
const authRoute = require("./rute/auth");
const productRoute = require("./rute/product");
const cartRoute = require("./rute/cart");
const orderRoute = require("./rute/order");
const stripeRoute = require("./rute/stripe");
const cors = require("cors");

dotenv.config();


mongoose.set('strictQuery', true);
mongoose.connect
(process.env.MONGO_URL).then(()=>console.log("Spojeni smo na bazu")).catch((err)=>console.log(err));

// testiram radi li get ovako: app.get("/api/test",()=>{console.log("ksksk");})

//kad god neko napravi zahtjev na aplikaciji ispisuje se ovo 
//app.get("/api/test", () => { console.log("ZAHTJEV JE PRIHVACEN")})

app.use(cors());
//omogucava da primamo json requestove u post metodi, ynaci bey ovoga nebi mogli primat podatke jer nisu json
app.use(express.json());
//kad god odemo na api user nasa app ce koristit userRoute
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout", stripeRoute);




app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server radi")
})