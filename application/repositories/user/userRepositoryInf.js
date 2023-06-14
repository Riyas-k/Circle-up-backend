"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDbRepository = void 0;
const userDbRepository = (repository) => {
    const addUser = async (user) => {
        return await repository.addUser(user);
    };
    const getUserByEmail = async (email) => {
        return repository.getUserByEmail(email);
    };
    const getUserValid = async (email) => {
        return repository.getUserValid(email);
    };
    return {
        addUser, getUserByEmail, getUserValid
    };
};
exports.userDbRepository = userDbRepository;
