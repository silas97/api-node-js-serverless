module.exports = (funcionarioId, { funcionarioRepository }) => {
    const params = {
        TableName: "funcionario",
        Key: {
            id: funcionarioId
        }
    }
    return funcionarioRepository.destroy(params);
};