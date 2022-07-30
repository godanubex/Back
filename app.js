const express = require('express');
const app = express(); 
const cors = require("cors")

app.use(express.urlencoded());
app.use(express.json())

app.use(cors())

app.get("/getfood", (req, res) => {
    let food = [
        {
            "name" : "ผัดกะเพราะ"
        },
        {
            "name" : "ข้าวผัด"
        },
        {
            "name" : "คะน้าหมูกรอบ"
        }
    ]
    res.send(food)
})
app.listen(8000,()=>{
    console.log("Online!");
})


