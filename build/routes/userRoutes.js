"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let usuarios = [];
router.get('/', (req, res) => {
    res.send('Deveria ser a tela do Front');
});
router.post('/cadastro', (req, res) => {
    const { id, nome, idade } = req.body;
    const novoUsuario = { id, nome, idade };
    res.send(novoUsuario);
    usuarios.push(novoUsuario);
});
router.get('/listar', (req, res) => {
    res.json(usuarios);
});
router.delete('/deletar/:id', (req, res) => {
    const { id } = req.params;
    // Busca o índice do usuário com o id fornecido
    const index = usuarios.findIndex(user => user.id === parseInt(id));
    let usuarioDeletado = usuarios[index].nome;
    usuarios.splice(index, 1);
    res.send('Usuario ' + usuarioDeletado + ' Deletado com sucesso');
});
router.put('/editar/:id', (req, res) => {
    const { id, nome, idade } = req.body;
    const index = usuarios.findIndex(user => user.id === parseInt(id));
    usuarios[index] = { id: parseInt(id), nome, idade };
});
exports.default = router;
