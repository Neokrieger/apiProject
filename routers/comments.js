const express = require('express');
const router = express.Router();
const db = require('../util/db');

router.get('/view', (req, res) => {

  console.log('Get');

})

router.post('/make', async (req, res) => {

  console.log('Post');

})

router.put('/up', (req, res) => {

  console.log('Put');

})

router.delete('/del', (req, res) => {

  console.log('Delete');

})

module.exports = router;
