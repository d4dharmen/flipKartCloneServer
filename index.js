import express from 'express'
import route from './routes/loginRoutes.js';


const app = express();
const port = process.env.PORT || 3000;

// using router
app.use('/', route)




// creating server
app.listen(port, ()=>{
    console.log(`server strted on http://localhost:${port}`);
})