const express = require('express');
const taskController = require('./controllers/taskController')
const taskMiddleware = require('./middleware/taksMiddleware')

const router = express.Router();

router.get('/health', (req, res) => res.status(200).json({ status: 'ok'}));
router.get('/tasks', taskController.getAll);
router.post('/tasks', taskMiddleware.validateTitle, taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', taskMiddleware.validateTitle, taskMiddleware.validateStatus, taskController.updateTask);

module.exports = router;