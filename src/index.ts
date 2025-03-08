import express from "express";
import userRoutes from './routes/userRoutes';

const index = express();
const porta = 3000;

index.use(express.json());
index.use('/', userRoutes);


index.listen(porta, () => console.log('O servidor esta rodando na porta ' + porta))