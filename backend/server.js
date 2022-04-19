import express from "express";
import data from "./datalist.js";

const app = express();



app.get("/api/products", (req, res)=>{
    res.send(data.product);
})

app.get("/api/products/:id", (req, res)=>{
    const product = data.product.find((x)=> x._id ===req.params.id);
    if(product){
    res.send(data.product);
    }
    else
    res.status(404).send({message:"product not found"});
})
app.get('/', (req, res)=>{
    res.send("server is ready");
})
const port = process.env.PORT ||5000;
app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
})