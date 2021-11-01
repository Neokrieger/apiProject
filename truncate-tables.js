const db = require('./util/db');

const truncateTables = async () => {

  await db.loadDatabase({}, async function(){
    db.getCollection('data').clear();
    db.saveDatabase();
  })

};

module.exports = truncateTables;
