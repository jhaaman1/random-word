const {Router} = require("express");

const userRouter = Router();

userRouter.get("/word",async(req,res)=>{


    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

              return result;

         }
         let num=Math.floor(Math.random() * (10 - 7) + 7)

         let a=generateString(num)

        res.send({"data":a.toLocaleLowerCase(),"msg":"This is my Random Word"})
   
   
})

module.exports = {userRouter};