//*************************************BY USING HAPI JS*********************************//

const setup_db=require("./index")
const { users,department,bank } = require('./models/persons');
setup_db()
const hapi = require("@hapi/hapi");
const app = new hapi.server({
  port: 9000,
  host: "localhost",
});

app.route([
    {
        method:'GET',
        path:'/get_user',
        handler: async(req,h,next)=>{
                return  await users.query();            
        }
    },
    {
        method:'GET',
        path:'/get_dep',
        handler: async(req,h,next)=>{
            return  await department.query();            
        }
    },
    {
        method:'GET',
        path:'/get_bank',
        handler: async(req,h,next)=>{
            return  await bank.query();            
        }
    },
    {
        method:'POST',
        path:'/create_user',
        handler: async (req,h,)=>{
            console.log(req.payload)
            const user_data= await users.query().insert({
                id:req.payload.id,
                name: req.payload.name,
                email: req.payload.email,
                salary : req.payload.salary,
                department_id : req.payload.department_id,
                bank_details : req.payload.bank_details
                });
            console.log(user_data)
            return user_data
        }
    },
    {
        method:'POST',
        path:'/create_dep',
        handler: async (req,h,)=>{
            console.log(req.payload)
            const user_dep= await department.query().insert({
                id:req.payload.id,
                name: req.payload.name,
                stregth: req.payload.stregth,
                capacity: req.payload.capacity
                });
            console.log(user_dep)
            return user_dep
        }
    },
   {
        method:'POST',
        path:'/create_bank',
        handler: async (req,h,)=>{
            console.log(req.payload)
            const user_bank= await bank.query().insert({
                id:req.payload.id,
                bank_Name: req.payload.bank_Name,
                account_number: req.payload.account_number,
                ifsc :req.payload.ifsc,
                micr : req.payload.micr,
                branch : req.payload.branch
                });
            console.log(user_bank)
            return user_bank
        }
    },

    {
        method:'PUT',
        path:'/update_user/{id}',
        handler: async (req,h,)=>{
            const { id }=req.params
            const user_data= await users.query().findById(id).patch({
                name: req.payload.name,
                email: req.payload.email,
                salary : req.payload.salary,
                department_id : req.payload.department_id,
                bank_details : req.payload.bank_details
                });
            console.log(user_data)
            return user_data
        }
    },
    {
        method:'PUT',
        path:'/update_dep/{id}',
        handler: async (req,h,)=>{
            const { id }=req.params
            const dep_data= await department.query().findById(id).patch({
                name: req.payload.name,
                stregth: req.payload.stregth,
                capacity: req.payload.capacity
                });
            console.log(dep_data)
            return dep_data
        }
    },
    {
        method:'PUT',
        path:'/update_bank/{id}',
        handler: async (req,h,)=>{
            const { id }=req.params
            const bank_update = await bank.query().findById(id).patch({
                bank_Name : req.payload.bank_Name,
                account_number : req.payload.account_number,
                ifsc : req.payload.ifsc,
                micr : req.payload.micr,
                branch : req.payload.branch
                });
            console.log(bank_update)
            return bank_update
         }
    },
    {
        method:'DELETE',
        path:'/del_user/{id}',
        handler: async (req,h,)=>{
            const { id }=req.params
            const user_del= await users.query().deleteById(id);
            return ("deleted")
        }
    },
    {
        method:'DELETE',
        path:'/del_dep/{id}',
        handler: async (req,h,)=>{
            const { id }=req.params
            const user_del= await department.query().deleteById(id);
            return ("deleted")
        }
    },
    {
        method:'DELETE',
        path:'/del_bank/{id}',
        handler: async (req,h,)=>{
            const { id }=req.params
            const user_del= await bank.query().deleteById(id);
            return ("deleted")
        }
    }
])


const  past =async ()=>{
    await app.start()
    console.log(app.info.uri)
}
process.on('unhandledRejection',(err)=>{
    console.log('not found')
    process.exit(1)
})
past()
