const ListFuncionarioUseCase = require('../UseCase/ListFuncionarioUseCase');
const FuncionarioRepository = require('../Repository/FuncionarioRepository');
const DatabaseRepository = require('../Adapter/DatabaseRepository');

const funcionarioRepository = new FuncionarioRepository(new DatabaseRepository());

module.exports = {
    async findFuncionarios(event, context, callback) {
        const resposta = await ListFuncionarioUseCase({ funcionarioRepository });
        callback(null, resposta);
    },
}