"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes")); // Verifique se este arquivo contém a rota correta
const app = (0, express_1.default)();
const porta = 3333;
app.use((0, cors_1.default)()); // Permite requisições externas (CORS)
app.use(express_1.default.json());
app.use("/", userRoutes_1.default); // Se 'userRoutes' tem a rota '/listar', essa linha já cuida dela.
app.listen(porta, () => console.log(`O servidor está rodando na porta ${porta}`));
