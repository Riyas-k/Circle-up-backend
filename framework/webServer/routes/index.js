"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = __importDefault(require("./user/userRoutes"));
const adminRoutes_1 = __importDefault(require("./admin/adminRoutes"));
const routes = (app) => {
    app.use('/', (0, userRoutes_1.default)());
    app.use('/admin', (0, adminRoutes_1.default)());
};
exports.default = routes;
