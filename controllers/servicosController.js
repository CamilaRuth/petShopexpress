const fs = require('fs');
const path = require('path');

const { uuid } =require('uuidv4');

const servicosPath = path.join('servicos.json');

let servicos = fs.readFileSync(servicosPath, { encoding: 'utf-8'});
servicos = JSON.parse(servicos);


const { response } = require("express");
const { request } = require("../app");
const contatosController = require("./contatosController");


const servicosController = {
    index: (request, response) => {
return response.render('adminServicos', {titulo:'Servicos', servicos });
    },
    cadastro: (request, response) =>{
        return response.render('servicosCadastro', {titulo: 'Cadastar serviços'});

    },
    salvar: (request, response)=> {
        let {nome, descricao, preco, ilustracao} = request.body;

        servicos.push({id: uuid(), nome, descricao, preco, ilustracao });
        let dadosJson = JSON.stringify(servicos);
        fs. writeFileSync(servicosPath, dadosJson);

        return response. redirect('/admin/servicos');
    },

    show: (request, response) => {
       // console.log (request.params);
        const {nome} = request.params;
        return response.send(`exibindo detalhes do serviço de ${nome}`);

    }

    }



module.exports= servicosController;