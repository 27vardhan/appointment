const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isDoctor: {
        type: Boolean,
        default: false,
    },
    //notification will be responsible for unread notifications
    notification: {                             
        type: Array,
        default: [],
    },

    // responsible for read
    seennotification: {
        type: Array,
        default: [],
    },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;