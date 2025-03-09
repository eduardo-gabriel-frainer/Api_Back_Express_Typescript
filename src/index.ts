import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";  // Verifique se este arquivo contém a rota correta

const app = express();
const porta = 3333;

app.use(cors());  // Permite requisições externas (CORS)
app.use(express.json());
app.use("/", userRoutes);  // Se 'userRoutes' tem a rota '/listar', essa linha já cuida dela.

app.listen(porta, () => console.log(`O servidor está rodando na porta ${porta}`));
