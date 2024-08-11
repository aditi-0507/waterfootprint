import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req,res)=>{
  res.render("index");
});

app.get("/login", (req,res)=>{
  res.render("login");
});

app.get("/signUp", (req,res)=>{
  res.render("signup");
});

app.get("/home", (req,res)=>{
  res.redirect("/");
});

app.get("/features", (req,res)=>{
  res.render("features");
});

app.get("/faqs", (req,res)=>{
  res.render("faqs");
});

app.get("/aboutUs", (req,res)=>{
  res.render("about");
});

app.post("/check", (req, res) => {
  const mail = req.body.email;
  const pass = req.body.password;
  console.log(mail);
  console.log(pass);
  if (mail==="xyz@gmail.com" & pass === "12345678"){
  res.render("home");
  }else{
    res.redirect("login");
  }
});





  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  