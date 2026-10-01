// server/api/board/board.routes.js
const express = require('express');
const router = express.Router();
const { getBoardData, createList, moveCard } = require('./board.controller');


router.get('/', getBoardData);
router.post('list', createList);
router.put('/card/move', moveCard);

module.exports = router;