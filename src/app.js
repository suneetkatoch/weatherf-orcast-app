const express=require("express");
const app=express();
const port=process.env.PORT || 8000;//when we are hosting then 1st part will used
const path=require("path");
const hbs=require("hbs");

//paths
const path1=path.join(__dirname,"../public");
const templatepas=path.join(__dirname,"../template/views");
const partialpas=path.join(__dirname,"../template/partials");


app.set("view engine",'hbs');
app.set('views',templatepas)
app.use(express.static(path1))
hbs.registerPartials(partialpas)



app.get("/",(req,res)=>{
    res.render('index')
    
});
app.get("/about",(req,res)=>{
    res.render('about')
    
});
app.get("/weather",(req,res)=>{
    res.render('weather');
});
app.get("*",(req,res)=>{
    res.render("404err");
}); 

app.listen(port,()=>{
    console.log(`listening at ${port}`);
})