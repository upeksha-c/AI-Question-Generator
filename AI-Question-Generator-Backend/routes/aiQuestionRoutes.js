const express = require('express');
const router = express.Router();
const {generateAIQuestions} = require('../controllers/aiQuestionController');

router.post('/', generateAIQuestions);

module.exports = router;