const servico = (request, response, next) => {
    let {
        nome,
        preco
    } = request.body;

    if (nome == "" || preco == "") {
        response.send("preencha todos os campos!");

    } else {
        next();
    }

};

module.exports = servico;