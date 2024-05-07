const express = require('express');
const router = express.Router();

router.use('/questions', require('../routes/question'));
router.use('/options', require('../routes/option'));


module.exports = router;
