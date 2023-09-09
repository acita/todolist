const express = require('express');
const taskController = require('./controllers/taskController')
const taskMiddleware = require('./middleware/taksMiddleware')

const router = express.Router();

router.get('/health', (req, res) => res.status(200).json({ status: 'ok'}));
router.get('/tasks', taskController.getAll);
router.post('/tasks', taskMiddleware.validateBody, taskController.createTask);

module.exports = router;