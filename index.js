const express = require('express');
const { userRouter } = require('./routers/User.routes');
// require(dotenv.config())
const app = express();
app.use(express.json());

app.get('/', function(req, res){
    res.send('Hello World')
});

const PORT = process.env.PORT || 8000;

app.use('/random', userRouter)

app.listen(PORT, async(req,res) =>{
    try{
        console.log('Connecting to db successfully');
    }
    catch(err){
        console.log('Error connecting to DB');
        console.log(err);
    }
    console.log(`Listening on ${PORT}`)
})


