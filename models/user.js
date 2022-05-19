import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/realtime-chat");

const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
    updated_at: {
        type: Date,
        default: new Date(),
    },
});

export default mongoose.model("user", userSchema);
// //? Menambah 1 data
// const user1 = new User({
//     username: "Heriyanto",
//     email: "heriyanto@gmail.com",
//     password: "12345",
// });

// //? Simpan ke collection
// user1.save().then((res) => console.log(res));
