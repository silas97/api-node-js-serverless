const Funcionario = require('../Entity/Funcionario');
const uuid = require('uuid');

module.exports = (nome, idade, cargo, { funcionarioRepository }) => {
    const funcionario = new Funcionario(null, nome, idade, cargo);
    const params = {
        TableName: "funcionario",
        Item: {
            id: uuid.v1(),
            nome: funcionario.nome,
            idade: funcionario.idade,
            cargo: funcionario.cargo
        },
    }
    return funcionarioRepository.store(params);
};