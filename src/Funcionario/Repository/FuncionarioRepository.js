module.exports = class {
    constructor(repository) {
        this.repository = repository;
    }

    store(params) {
        return this.repository.store(params);
    }

    show(params) {
        return this.repository.show(params);
    }

    update(params) {
        return this.repository.update(params);
    }

    destroy(params) {
        return this.repository.destroy(params);
    }

    index(params) {
        return this.repository.index(params);
    }

};