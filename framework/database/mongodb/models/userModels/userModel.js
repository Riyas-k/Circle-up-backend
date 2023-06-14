"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true,
        // unique:true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dp: {
        type: String
    },
    bio: {
        type: String
    },
    gender: {
        type: String
    },
    city: {
        type: String
    },
    DOB: {
        type: String
    },
    isBlock: {
        type: Boolean,
        default: false
    },
    followers: [],
    following: []
}, {
    timestamps: true
});
const User = (0, mongoose_1.model)('user', userSchema);
exports.default = User;
