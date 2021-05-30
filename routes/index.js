const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController');
const servicosController = require('../controllers/servicosController');
const contatosController = require('../controllers/contatosController');
const institucionalController = require( '../controllers/institucionalController');


// rotas para paginas institucionais
router.get('/', institucionalController.index);

router.get('/sobre', institucionalController.sobre);

//router.get('/servicos/:nome', servicosController.show);
router.get('/servicos', institucionalController.servicos);

router.get('/contato', institucionalController.contato);
//router.get('/contatos/:nome', contatosController.show);


router.get('/pets', petsController.index);
router.get('/pets/:nome', petsController.show);



module.exports = router;
