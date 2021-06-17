const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = class {
    constructor() {
        this.db = dynamoDb;
    }

    async store(params) {
        this.db.put(params, (error, data) => {
            if (error) {
                console.error(error);
                return error;
            }

            return {
                statusCode: 201,
                body: JSON.stringify(data.Item)
            };
        });
    }

    async show(params) {
        this.db.get(params, (error, data) => {
            if (error) {
                console.error(error);
                return error;
            }

            return data.Item ? {
                statusCode: 200,
                body: JSON.stringify(data.Item)
            } : {
                statusCode: 404,
                body: JSON.stringify({ "message": 'Task not found' })
            };

        });
    }

    async update(params) {
        this.db.update(params, (error, data) => {
            if (error) {
                console.error(error);
                return error;
            }

            return {
                statusCode: 200,
                body: JSON.stringify(data.Item)
            };

        });
    }

    async destroy(params) {
        this.db.delete(params, (error, data) => {
            if (error) {
                console.error(error);
                return error;
            }

            return {
                statusCode: 200,
                body: JSON.stringify({})
            };

        });
    }

    async index(params) {
        this.db.scan(params, (error, data) => {
            if (error) {
                console.error(error);
                return error;
            }

            return {
                statusCode: 200,
                body: JSON.stringify(data.Items)
            };
        });
    }
};