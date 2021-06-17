const UpdateFuncionarioUseCase = require('../UseCase/UpdateFuncionarioUseCase');
const FuncionarioRepository = require('../Repository/FuncionarioRepository');
const DatabaseRepository = require('../Adapter/DatabaseRepository');

const funcionarioRepository = new FuncionarioRepository(new DatabaseRepository());

module.exports = {
    async updateFuncionario(event, context, callback) {
        const funcionarioId = event.pathParameters.id;
        const { nome, idade, cargo } = JSON.parse(event.body);
        const resposta = await UpdateFuncionarioUseCase(funcionarioId, nome, idade, cargo, { funcionarioRepository });
        callback(null, resposta);
    },
}