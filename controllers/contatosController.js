

const { response } = require("express");

const contatosController = {
    index: (request, response) => {
return response.send('exibindo lista de contatos');
    },
    show: (request, response) => {
       // console.log (request.params);
        const {nome} = request.params;
        return response.send(`exibindo detalhes dos contatos ${nome}`);

    }

    }



module.exports= contatosController;