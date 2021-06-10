const express = require('express'); // chama modulo express
const multer = require('multer');
const path = require('path');
const router = express.Router(); //chama metodode querencia rotas
const servicosController = require('../controllers/servicosController');
const validaCadastroServico = require('../middlewares/validacao/servico');

const storage = multer.diskStorage({
  destination: (request, filename, cb) => {
    cb(null, path.join('uploads'));
  },
  filename: (request, file, cb) => {
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
  }

});

const upload = multer({
  storage: storage
});

//*o codigo usado sem render*
//router.get('/', function(req, res, admin) {
//res.send('Painel adminstrativo');
//}); 

router.get('/', (request, response) => {
  response.render('admin', {
    titulo: 'Painel Administrativo'
  });
});


router.get('/servicos', servicosController.index);


router.get('/servicos/cadastro', servicosController.cadastro);

router.post('/servicos/cadastro', upload.single('ilustracao'), validaCadastroServico, servicosController.salvar);

router.get('/servicos/editar/:id', servicosController.editar);

router.put('/servicos/editar/:id', upload.single('ilustracao'), servicosController.atualizar);

router.get('/servicos/excluir/:id', servicosController.excluir);

router.delete('/servicos/excluir/:id', servicosController.remover);




module.exports = router;