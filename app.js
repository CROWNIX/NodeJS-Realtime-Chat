import express from "express";
import web from "./routes/web.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(web);

app.listen(port, () => {
    console.log(`Realtime Chat | Listening att http://localhost${port}`);
});
