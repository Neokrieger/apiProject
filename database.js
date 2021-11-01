const loki = require('lokijs');

const db = new loki('db.json');

db.addCollection('data');

db.saveDatabase();
