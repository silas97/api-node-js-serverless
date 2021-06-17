module.exports = ({ funcionarioRepository }) => {
    const params = {
        TableName: "funcionario"
    };
    return funcionarioRepository.index(params);
};