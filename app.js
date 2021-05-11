
// ***************** BY USING EXPRESS ********************//

const setup_db=require("./index")
const express=require("express")
const { users,department,bank } = require('./models/persons');
setup_db()
const app=express()
app.use(express.json())

app.get('/user',async (req,res,next)=>{
    try{
    const { id }=req.params
    const users_data= await users.query();
    res.json({users_data})
    }catch (err){
    console.error(err)
    }
})

app.get('/bank',async (req,res,next)=>{
    try{
    const { id }=req.params
    const bank_data= await bank.query();
    res.json({bank_data})
    }catch (err){
    console.error(err)
    }
})


app.get('/department',async (req,res,next)=>{
    try{
    const { id }=req.params
    const dep_data= await department.query();
    res.json({dep_data})
    }catch (err){
    console.error(err)
    }
})
app.get('/user/:id',async (req,res,next)=>{
    try{
    const { id }=req.params
    const app_user= await users.query().findById(id);
    res.json({app_user})
    }catch (err){
    console.error(err)
    }
})
app.get('/bank/:id',async (req,res,next)=>{
    try{
    const { id }=req.params
    const bank_user= await bank.query().findById(id);
    res.json({bank_user})
    }catch (err){
    console.error(err)
    }
})
app.get('/department/:id',async (req,res,next)=>{
    try{
    const { id }=req.params
    const dep_user= await department.query().findById(id);
    res.json({dep_user})
    }catch (err){
    console.error(err)
    }
})


app.post('/create_user', async (req,res,next)=>{
    try{
    const user_create= await users.query().insert({
        id:req.body.id,
        name: req.body.name,
        email: req.body.email,
        salary : req.body.salary,
        department_id : req.body.department_id,
        bank_details : req.body.bank_details
      });
        res.send({user_create})
        console.log(user_create)
    }catch (err){
        console.error(err)
    }
})

app.post('/create_dep',async (req,res,next)=>{
    try{
    const dep_create= await department.query().insert({
        id:req.body.id,
        name: req.body.name,
        stregth: req.body.stregth,
        capacity: req.body.capacity
      });
        res.send({dep_create})
    }catch (err){
    console.error(err)
    }
})

app.post('/create_bank',async (req,res,next)=>{
    try{
    const bank_create= await bank.query().insert({
        id:req.body.id,
        bank_Name: req.body.bank_Name,
        account_number: req.body.account_number,
        ifsc :req.body.ifsc,
        micr : req.body.micr,
        branch : req.body.branch
      });
        res.send({bank_create})
        console.log(bank_create)
    }catch (err){
    console.error(err)
    }
})


app.put('/update_user/:id',async (req,res,next)=>{
    try{
    const { id }=req.params
    const user_update = await users.query()
    .findById(id)
    .patch({
        id:req.body.id,
        name: req.body.name,
        email: req.body.email,
        salary : req.body.salary,
        department_id : req.body.department_id,
        bank_details : req.body.bank_details
    });
    res.json({user_update})
    }catch (err){
    console.error(err)
    }
})
app.put('/update_dep/:id',async (req,res,next)=>{
    try{
    const { id }=req.params
    const user_update = await department.query()
    .findById(id)
    .patch({
        id:req.body.id,
        name: req.body.name,
        stregth: req.body.stregth,
        capacity: req.body.capacity
    });
    res.json({user_update})
    }catch (err){
    console.error(err)
    }
})
app.put('/update_bank/:id',async (req,res,next)=>{
    try{
    const { id }=req.params
    const bank_update = await bank.query()
    .findById(id)
    .patch({
        id:req.body.id,
        bank_Name: req.body.bank_Name,
        account_number: req.body.account_number,
        ifsc :req.body.ifsc,
        micr : req.body.micr,
        branch : req.body.branch
    });
    res.send({bank_update})
    }catch (err){
    console.error(err)
    }
})


app.delete('/delete_user/:id',async (req,res,next)=>{
    try{
    const { id }=req.params
    const user_del= await users.query().deleteById(id);
    res.send("deleted")
    }catch (err){
    console.error(err)
    }
})  
app.delete('/delete_dep/:id',async (req,res,next)=>{
    try{
    const { id }=req.params
    const dep_del=await department.query().deleteById(id);
    res.send("deleted")
    }catch (err){
    console.error(err)
    }
})  

app.delete('/delete_bank/:id',async (req,res,next)=>{
    try{
    const { id }=req.params
    const bank_del=await bank.query().deleteById(id);
    res.send("deleted")
    }catch (err){
    console.error(err)
    }
})  

app.listen(8080,()=>{
    console.log("got it")
})

