const fs = require('fs');
const path = require('path');

const {
    uuid
} = require('uuidv4');

const servicosPath = path.join('servicos.json');

let servicos = fs.readFileSync(servicosPath, {
    encoding: 'utf-8'
});
servicos = JSON.parse(servicos);



const servicosController = {
    index: (request, response) => {
        return response.render('adminServicos', {
            titulo: 'Servicos',
            servicos
        });
    },
    cadastro: (request, response) => {
        return response.render('servicosCadastro', {
            titulo: 'Cadastar serviços'
        });

    },
    salvar: (request, response) => {
        let {
            nome,
            descricao,
            preco
        } = request.body;

        //let ilustracao = request.files [0].originalname; 
        let ilustracao = request.file.filename;


        servicos.push({
            id: uuid(),
            nome,
            descricao,
            preco,
            ilustracao
        });
        let dadosJson = JSON.stringify(servicos);
        fs.writeFileSync(servicosPath, dadosJson);

        return response.redirect('/admin/servicos');
    },

    editar: (request, response) => {
        let {
            id
        } = request.params;

        let servicoEncontrado = servicos.find(servico => servico.id == id);
        return response.render('servicosEditar', {
            titulo: 'Editar Serviços',
            servico: servicoEncontrado
        })


    },

    atualizar: (request, response) => {
        let {
            id
        } = request.params;
        let {
            nome,
            descricao,
            preco
        } = request.body;
        let servicoEncontrado = servicos.find(servico => servico.id == id);
        servicoEncontrado.nome = nome;
        servicoEncontrado.descricao = descricao;
        servicoEncontrado.preco = preco;

        if (request.file) {
            servicoEncontrado.ilustracao = request.file.filename;
        }
        let dadosJson = JSON.stringify(servicos);
        fs.writeFileSync(servicosPath, dadosJson);

        return response.redirect('/admin/servicos');

    }

}


module.exports = servicosController;