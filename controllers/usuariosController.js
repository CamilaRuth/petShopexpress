const bcrypt = require('bcrypt');
const {
    request,
    response
} = require('express');

const fs = require('fs');
const path = require('path');

const {
    uuid
} = require('uuidv4');

const usuariosPath = path.join('usuarios.json');

let usuarios = fs.readFileSync(usuariosPath, {
    encoding: 'utf-8'
});
usuarios = JSON.parse(usuarios);

const usuariosController = {
    cadastro: (request, response) => {
        response.render('cadastro', {
            titulo: "cadastre-se"
        })
    },

    salvar: (request, response) => {
        const {
            nome,
            email,
            senha
        } = request.body;


        const senhaCrypt = bcrypt.hashSync(senha, 10);

        usuarios.push({
            id: uuid(),
            nome,
            email,
            senha: senhaCrypt
        });

        let dadosJson = JSON.stringify(usuarios);
        fs.writeFileSync(usuariosPath, dadosJson);

        response.redirect("/login");



    },

    login: (request, response) => {
        response.render("login", {
            titulo: "login"
        })
    },

    autenticacao: (request, response) => {
        const {
            email,
            senha
        } = request.body;
        const usuarioEncontrado = usuarios.find(usuario => usuario.email == email);
        if (usuarioEncontrado && bcrypt.compareSync(senha, usuarioEncontrado.senha)) {

            request.session.usuarioLogado = usuarioEncontrado;
            response.redirect('/');
        } else {

            response.redirect('/login');

        }

    }
}

module.exports = usuariosController;