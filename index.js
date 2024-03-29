import express from 'express';
import './node-cron.js'
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`)
})