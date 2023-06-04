const stepService = require('./StepService');

const getAll = async (page, size) => {
    try {
        return await stepService.getAll(page, size);
    } catch (error) {
        return false;
    }
}

const deleteById = async (id) => {
    try {
        return await stepService.deleteById(id);
    } catch (error) {
        return false;
    }
}

const addNew = async (content, numStep) => {
    try {
        return await stepService.addNew(content, numStep);
    } catch (error) {
        return false;
    }
}

const getById = async (id) => {
    try {
        return await stepService.getById(id);
    } catch (error) {
        return null;
    }
}

const updateById = async (id, content, numStep) => {
    try {
        return await stepService.updateById(id, content, numStep);
    } catch (error) {
        return false;
    }
}

const searchByContent = async (content) => {
    try {
        return await stepService.searchByContent(content);
    } catch (error) {
        console.log('Search recipe by name error: ', error);
    }
    return null;
}

module.exports = {
    getAll, deleteById, addNew,
    getById, updateById, searchByContent,

};