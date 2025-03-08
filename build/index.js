"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const index = (0, express_1.default)();
const porta = 3000;
index.use(express_1.default.json());
index.use('/', userRoutes_1.default);
index.listen(porta, () => console.log('O servidor esta rodando na porta ' + porta));
