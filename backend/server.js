import express from "express";
import data from "./datalist.js";

const app = express();

app.get("/api/products", (req, res)=>{
    res.send(data.product);
})

app.get('/', (req, res)=>{
    res.send("server is ready");
})
const port = process.env.PORT ||5000;
app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
})