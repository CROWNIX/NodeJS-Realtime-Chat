import express from "express";
import {login, register} from "../controllers/authController.js";

const router = express.Router();

router.get("/login", (req, res) => {
    res.render("layouts/main", {
        content: "../login",
        title: "Login",
    });
});

router.post("/login", login);

router.get("/register", (req, res) => {
    res.render("layouts/main", {
        content: "../register",
        title: "Register",
    });
});

router.post("/register", register);

router.get("/chat", (req, res) => {
    res.render("layouts/main", {
        content: "../chat",
        title: "Chat",
    });
});

export default router;
