const { response } = require("express");

const petsController = {
    index: (request, response) => {
return response.send('exibindo lista de pets');
    },
    show: (request, response) => {
       // console.log (request.params);
        const {nome} = request.params;
        return response.send(`exibindo detalhes do pet ${nome}`);

    }

    }



module.exports= petsController;