
// let express=require("express");
// let app=express();
// const f=require("fs");
// const persons={
//     username:"sowmya",
//     password:"ss",
//     dob:"10july"
// }
// // app.use(express.json());


// app.get("/res",(req,res)=>{
//     f.writeFile("indextext.html",JSON.stringify(persons),(err,data)=>{
//                if(err){
//                 res.send("error")
//                }
//                else{
//                 res.send("sucess")
//                }
// })

// })
// app.listen(3000,()=>{
//     console.log("data")
// })


// let express=require("express");
// let app=express();
// const f=require("fs")

//  app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// app.get("/query",(req,res)=>{
// var a=req.query.name
// var b=req.query.age

//     console.log(req.query)
//     console.log(req.query.name)
//   //  res.send(a)
//     res.send(b)
   
// })

// app.get("/body",(req,res)=>{
//     var body=req.body
//     console.log("helloooooo")
//     console.log(req.body);
//     res.send(body)
// })
// app.listen(3000,()=>{
//     console.log("hello")
// })



let express=require("express");
let app=express();
const f=require("fs");

app.use(express.json())

app.get("/register",(req,res)=>{
    const {username,password}=(req.body)
    f.readFile("localstore.json",(err,data)=>{
        const user= JSON.parse(data);

        const found=user.find((item)=>item.username===username && item.password===password)
        
        if(found){
            res.send("already exist")
        }
        else{
            user.push(req.body)

            f.writeFile("localstore.json",JSON.stringify(user),(err,data)=>{
                if(err){
                    res.send(err)
                }
                else{

                    res.send("sucess")
                }
            })
        }
    })
})

app.get("/login",(req,res)=>{
   
    f.readFile("localstore.json",(err,data)=>{
        let user=JSON.parse(data)
        const {username,password}=(req.body)

        let check=user.find((item)=> item.username==username && item.password==password)

        if(check){
            res.send("successfully logined")
        }
        else{res.send("invalid crediantial")}
    })
})

app.listen(3000,()=>{
    console.log("good morning");
  
})


// app.get("/login",(req,res)=>{
//     f.readFile("localstore.json",(err,data)=>{
//         let userdata=JSON.parse(data)

//         let check=userdata.find((item)=> item.username==username && item.password==password)

//         if(check){
//             res.send("successfully logined")
//         }
//         else{res.send("invalid crediantial")}
//     })
// })