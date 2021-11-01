const db = require('../util/db');

class Process{
  constructor(){
    this.data = [];
  }

  create(req){
  if( req.body.type === '' || req.body.date === '' || req.body.desc === ''){
      return false;
    }
    else{
      db.loadDatabase({}, async function(){
        await db.getCollection('data').insert([
          {type: req.body.type, desc: req.body.desc, date: req.body.date}
        ]);
        db.saveDatabase();
      })
      return true;
      }
  }

  update(req){
    if( req.body.type === '' || req.body.desc === '' || req.body.date === ''){
      return false;
    }
    else{
      db.loadDatabase({}, function(){
        db.getCollection('data').findAndUpdate({'$loki': req.body.id}, item =>{
          item.type = req.body.type, item.desc = req.body.desc, item.date = req.body.date
        })
        db.saveDatabase();
      })
      return true;
      }
  }

  delete(req){
    db.loadDatabase({}, function(){
      db.getCollection('data').chain().find({'$loki': req.body.id }).remove();
      db.saveDatabase();
    })
    return true;
  }

}

module.exports = Process;
