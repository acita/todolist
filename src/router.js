const express = require('express');
const taskController = require('./controllers/taskController')

const router = express.Router();

router.get('/health', (req, res) => res.status(200).json({ status: 'ok'}));
router.get('/tasks', taskController.getAll);
router.post('/tasks', taskController.createTask);

module.exports = router;