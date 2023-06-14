"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepositoryMongoDB = void 0;
const userModel_1 = __importDefault(require("../../models/userModels/userModel"));
const userRepositoryMongoDB = () => {
    const addUser = async (user) => {
        const newUser = new userModel_1.default(user);
        return await newUser.save();
    };
    const getUserByEmail = async (email) => {
        const user = await userModel_1.default.findOne({ email: email });
        return user;
    };
    const getUserValid = async (email) => {
        const user = await userModel_1.default.findOne({ email: email });
        return user;
    };
    return {
        addUser, getUserByEmail, getUserValid
    };
};
exports.userRepositoryMongoDB = userRepositoryMongoDB;
