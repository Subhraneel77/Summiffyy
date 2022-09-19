const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: "*"
}))

// app.get("/api",(req,res)=>{
//     res.json({"users":["userOne","userTwo","userThree","Swarnava"]})
// })
app.get('/summarize',(req,res)=>{
    const spawn = require("child_process").spawn;
    const process = spawn('python',["../NLPmodel/NLPmodel.py",req.query.article])
    process.stdout.on('data',(data)=>{
        res.send(data.toString());
    })
})


app.listen(5000,()=>{
    console.log("Server started up at 5000")
})