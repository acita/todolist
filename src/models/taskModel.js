const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute(
        'SELECT * FROM tasks'
    );
    return tasks[0];
}

const createTask = async (task)=> {
    const { title } = task;
    const dateUTC = new Date(Date.now()).toUTCString();
    const createdTask = await connection.execute(
        'INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)',
        [title, 'PENDENTE', dateUTC]
    )
    return createdTask[0];
}

const deleteTask = async (id)=> {
    const deletedTask = await connection.execute(
        'DELETE FROM tasks WHERE id = ?', 
        [id]
    );
    return deletedTask;
}

const updateTask = async (id, task)=> {
    const { title, status} = task;
    const updatedTask = await connection.execute(
        'UPDATE tasks SET title = ?, status = ? WHERE id = ?', 
        [title, status, id]
    );
    return updatedTask[0];
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};