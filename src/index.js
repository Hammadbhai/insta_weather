const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000 ;

const static_path = path.join(__dirname,"../public");

app.use(express.static(static_path));
app.set('view engine', 'hbs');




// routing 

app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404er',{
        errormsg: 'Ops! Page not found'
    });
})

// running serve port
app.listen(port,() => {
    console.log(`server is running at ${port}`);
})
