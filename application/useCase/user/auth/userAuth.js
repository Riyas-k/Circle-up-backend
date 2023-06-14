"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userRegister = void 0;
const userRegister = async (
//business logic
user, userRepository, authService) => {
    user.email = user.email.toLowerCase();
    const isEmailExist = await userRepository.getUserByEmail(user.email);
    if (isEmailExist) {
        return { status: false };
    }
    let encryptPassword = await authService.encryptPassword(user.password);
    user.password = encryptPassword;
    const { _id: userId } = await userRepository.addUser(user);
    const token = await authService.generateToken(userId.toString());
    return { status: true, token };
};
exports.userRegister = userRegister;
const userLogin = async (user, userRepository, authService) => {
    let userExist = await userRepository.getUserValid(user.email);
    if (!userExist) {
        return { status: false };
    }
    let checkPassword = await authService.comparePassword(user.password, userExist.password);
    if (checkPassword) {
        return { status: true, userExist };
    }
    else {
        return { status: false };
    }
};
exports.userLogin = userLogin;
