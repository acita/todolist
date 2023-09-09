const tasksModel = require('../models/taskModel');

const getAll = async (_req, res)=> {
    const taskList = await tasksModel.getAll();
    return res.status(200).json(taskList);
};

const createTask = async (req, res)=> {
    const createdTask = await tasksModel.createTask(req.body);
    return res.status(204).json();
}

module.exports = {
    getAll,
    createTask
};