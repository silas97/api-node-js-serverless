module.exports = (funcionarioId, { funcinarioRepository }) => {
    const params = {
        TableName: "funcionario",
        Key: {
            id: funcionarioId
        }
    }
    return funcinarioRepository.show(params);
};