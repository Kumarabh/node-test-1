const express = require('express');
const router = express.Router();

const myControllers = require('./../controllers/myControllers');

router.post('/register', myControllers.register);

router.post('/login', myControllers.login);

module.exports = router;