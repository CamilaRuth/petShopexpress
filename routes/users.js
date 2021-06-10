const express = require('express');
const usuariosController = require('../controllers/usuariosController');
var router = express.Router();

/* GET users listing. */
router.get('/cadastro', usuariosController.cadastro);

router.post('/cadastro', usuariosController.salvar);

router.get('/login', usuariosController.login);

router.post('/login', usuariosController.autenticacao);

module.exports = router;