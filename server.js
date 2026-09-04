const express = require("express");
const app = express();
const PORT = 3000;

//EJS setup
app.set("view engine", "ejs");
//read form data
app.use(express.urlencoded({ extended: true}));
//Home page
app.get("/",(req,res) =>{
    res.render("index",{
        submitted: false
    });
});
//Form submission 
app.post("/submit", (req ,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    
    console.log("Name:",name);
    console.log("Email",email);
    console.log("Message",message);
    res.render("index",{
        name: name,
        email:email,
        message:message,
        submitted: true
    });
});

//start server
app.listen(PORT , () => {
    console.log (`server running at http://localhost:${PORT}`);

});