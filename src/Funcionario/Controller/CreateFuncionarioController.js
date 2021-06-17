const CreateFuncionarioUseCase = require('../UseCase/CreateFuncionarioUseCase');
const FuncionarioRepository = require('../Repository/FuncionarioRepository');
const DatabaseRepository = require('../Adapter/DatabaseRepository');

const funcionarioRepository = new FuncionarioRepository(new DatabaseRepository());

module.exports = {
    async createFuncionario(event, context, callback) {
        const { nome, idade, cargo } = JSON.parse(event.body);
        const resposta = await CreateFuncionarioUseCase(nome, idade, cargo, { funcionarioRepository });
        callback(null, resposta);
    },
}