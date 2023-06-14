"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userAuth_1 = require("../../../application/useCase/user/auth/userAuth");
const authController = (authServiceInterface, authService, UserDbInterface, userDbService) => {
    const dbUserRepository = UserDbInterface(userDbService());
    const authServices = authServiceInterface(authService());
    const registerUser = (0, express_async_handler_1.default)(async (req, res) => {
        const { firstName, lastName, UserName, phone, email, password } = req.body;
        const user = {
            firstName, lastName, UserName, phone, email, password
        };
        const token = await (0, userAuth_1.userRegister)(user, dbUserRepository, authServices);
        console.log(token);
        if (token.status == true) {
            res.json({ status: true, message: 'User registered', token });
        }
        else {
            res.json({ status: false });
        }
    });
    const loginUser = (0, express_async_handler_1.default)(async (req, res) => {
        const { email, password } = req.body;
        const userDetails = { email, password };
        const user = await (0, userAuth_1.userLogin)(userDetails, dbUserRepository, authServices);
        if (user.status) {
            const { userExist } = user;
            res.json({ status: true, userExist: userExist });
        }
        else {
            res.json({ status: false });
        }
    });
    return {
        registerUser, loginUser
    };
};
exports.default = authController;
