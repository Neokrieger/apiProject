const express = require('express');
const router = express.Router();
const db = require('../util/db');
const Process = require('../util/Process.js');

const process = new Process();

router.get('/view', async (req, res) => {

  db.loadDatabase({}, function(){
    res.json({response : db.getCollection('data').data });
  })

})

router.post('/make', async (req, res) => {

  if(process.create(req)){
    res.json({response : "Success"});
  }else{
    res.json({response : "Please fill out all boxes"});
  }

})

router.put('/up', (req, res) => {

  if(process.update(req)){
    res.json({response : "Success"});
  }else{
    res.json({response : "Please fill out all boxes"});
  }

})

router.delete('/del', (req, res) => {

  if(process.delete(req)){
    res.json({response : "Success"});
  }

})

module.exports = router;
