const GetFuncionarioUseCase = require('../UseCase/GetFuncionarioUseCase');
const FuncionarioRepository = require('../Repository/FuncionarioRepository');
const DatabaseRepository = require('../Adapter/DatabaseRepository');

const funcionarioRepository = new FuncionarioRepository(new DatabaseRepository());

module.exports = {
    async getFuncionario(event, context, callback) {
        const funcionarioId = event.pathParameters.id;
        const resposta = await GetFuncionarioUseCase(funcionarioId, { funcionarioRepository });
        callback(null, resposta);
    },
}