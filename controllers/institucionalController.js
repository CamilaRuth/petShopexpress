//const { render } = require("ejs");
//const { request, response } = require("../app");


const fs = require('fs');
const path = require('path');

const servicosPath = path.join('servicos.json');

let servicos = fs.readFileSync(servicosPath, { encoding: 'utf-8'});
servicos = JSON.parse(servicos);

const institucionalController ={
    index: (request, response)=>{
        return response.render('index', {titulo: 'Home'});
    },
    sobre: (request, response)=>{
        return response.render('sobre', {titulo: 'Sobre'});
    },

    servicos: (request, response)=>{
        return response.render('servicos', {titulo: 'Serviços',servicos});
    },

    contato: (request, response)=>{
        return response.render('contato', {titulo: 'Contato'});
    }
}
module.exports = institucionalController;