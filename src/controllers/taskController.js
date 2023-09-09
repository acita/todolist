const tasksModel = require('../models/taskModel');

const getAll = async (_req, res)=> {
    const taskList = await tasksModel.getAll();
    return res.status(200).json(taskList);
};

const createTask = async (req, res)=> {
    const createdTask = await tasksModel.createTask(req.body);
    return res.status(204).json();
}

const deleteTask = async (req, res)=> {
    const {id } = req.params;
    await tasksModel.deleteTask(id);
    return res.status(204).json();
}

const updateTask = async (req, res)=> {
    const {id } = req.params;
    await tasksModel.updateTask(id, req.body);
    return res.status(204).json();
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};