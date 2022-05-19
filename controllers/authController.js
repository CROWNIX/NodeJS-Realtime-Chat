import User from "../models/user.js";

export const login = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username: username});

        if (!user) {
            return console.log("Login failed");
        }

        if (user.password !== password) return console.log("Login failed");

        res.redirect("/chat");
    } catch (error) {
        console.log(error);
    }
};

export const register = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username: username});

        if (user) {
            return console.log("User sudah terdaftar");
        }

        User.create(req.body, () => {
            res.redirect("/login");
        });
    } catch (error) {
        console.log(error);
    }
};
