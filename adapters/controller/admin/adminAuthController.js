"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const adminAuthController = (AdminAuthServiceInterface, adminAuthService, adminDbInterface, adminDbService) => {
    const dbUserRepository = adminDbInterface(adminDbService());
    const adminAuthServices = AdminAuthServiceInterface(adminAuthService());
    const loginAdmin = (0, express_async_handler_1.default)(async (req, res) => {
        console.log(req.body);
    });
    return {
        loginAdmin
    };
};
exports.default = adminAuthController;
