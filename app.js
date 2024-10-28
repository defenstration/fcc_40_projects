import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended : true}));

//app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    res.render('index.ejs')
})

app.get("/projects", (req, res) => {
    res.render("projects/projects.ejs")
})

app.get("/color-flipper", (req, res) => {
    res.render("projects/projects/color-flipper/color-flipper.ejs")
})

app.get("/counter", (req, res) => {
    res.render("projects/projects/counter/counter.ejs")
})

app.get("/reviews", (req, res) => {
    res.render("projects/projects/reviews/reviews.ejs")
})

app.get("/modal", (req, res) => {
    res.render("projects/projects/modal/modal.ejs")
})

app.get("/faq", (req, res) => {
    res.render("projects/projects/faq/faq.ejs")
})

app.get("/menu", (req, res) => {
    res.render("projects/projects/menu/menu.ejs")
})

app.get("/video-background", (req, res) => {
    res.render("projects/projects/videoBg/video-background.ejs")
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})