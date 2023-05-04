// This is going to be the main backend file
const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"register"
});
app.post("/",(req,res)=>{
const {email,password} = req.body;
console.log(email,password);
})

//signup api call

app.post("/signup",(req,res)=>{
    const {id_count,name,email,password} = req.body;
    var sql = "insert into employee (`id`,`name`,`email`,`password`) values (?,?,?,?)";
    var values = [
      id_count,
      name,
      email,
      password
    ]
    db.query(sql, values, (err,result)=>{
        if(err){
            console.log(err);
        return res.status(500).json( result);
        }
        return res.status(200).json({ message: "Success" });
    });
})

//login api call
app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    var sql = `select * from employee where email = ? and password = ?`;
    db.query(sql,[email,password] ,(err,result)=>{
        if(err){
            console.log(err);
        return res.status(500).json( result);
        }
        console.log(result);
        if(result.length == 0)
        {
            return res.status(200).json({ message: "Not Registered" });
        }
        return res.status(200).json({ message: "Success" });
    });
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})