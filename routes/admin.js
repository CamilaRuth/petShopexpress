const express = require('express'); // chama modulo express
const { request, response } = require('../app');
const router = express.Router(); //chama metodode querencia rotas
const servicosController = require ('../controllers/servicosController');


//*o codigo usado sem render*
//router.get('/', function(req, res, admin) {
    //res.send('Painel adminstrativo');
  //}); 

  router.get('/',(request, response) => {
      response.render ('admin',{titulo: 'Painel administrativo'});
  });


router.get('/servicos', servicosController.index);


router.get('/servicos/cadastro', servicosController.cadastro);

router.post('/servicos/cadastro', servicosController.salvar);




module.exports = router;
