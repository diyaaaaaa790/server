const express=require('express');
const app=express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req,res)=>{
    console.log('Server is running!')
});

app.post('/signup',(req,res)=>{
    const {username, password, dob, email}=req.body;
    if(!username|| username.trim()===''){
        return res.status(400).json({error:"Username cannot be empty"})
    }
    if(!email|| email.trim()===''){
        return res.status(400).json({error:"Email cannot be empty"})
    }
    if(!password|| password.length < 8 || password.length>16){
        return res.status(400).json({error:"Password should be greater than 8 and less than 16"})
    }
    res.status(201).json({
        message:"user signup successfully",
        user: {username, email,dob}
    });

});



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});
