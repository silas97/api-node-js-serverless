const DeleteFuncionarioUseCase = require('../UseCase/DeleteFuncionarioUseCase');
const FuncionarioRepository = require('../Repository/FuncionarioRepository');
const DatabaseRepository = require('../Adapter/DatabaseRepository');

const funcionarioRepository = new FuncionarioRepository(new DatabaseRepository());

module.exports = {
    async deleteFuncionario(event, context, callback) {
        const funcionarioId = event.pathParameters.id;
        const resposta = await DeleteFuncionarioUseCase(funcionarioId, { funcionarioRepository });
        callback(null, resposta);
    },

};