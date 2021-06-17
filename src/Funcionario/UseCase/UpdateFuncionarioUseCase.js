const Funcionario = require('../Entity/Funcionario');

module.exports = (funcionarioId, nome, idade, cargo, { funcionarioRepository }) => {
    const funcionario = new Funcionario(funcionarioId, nome, idade, cargo);
    const params = {
        TableName: "funcionario",
        Key: {
            id: funcionario.id
        },
        ExpressionAttributeValues: {
            ':nome': funcionario.nome,
            ':idade': funcionario.idade,
            ':cargo': funcionario.cargo
        },
        UpdateExpression: 'set nome = :nome, idade = :idade, cargo = :cargo'
    };
    return funcionarioRepository.update(params);
};