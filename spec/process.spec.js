const Process = require('../util/Process.js');
const db = require('../util/db');

describe('Checking class interaction with database', () =>{
  beforeEach(() => {
    db.loadDatabase({}, async function(){
      db.getCollection('data').clear();
      db.saveDatabase();
    })
  });

  it('Is able to successfully add data to the database', () =>{
    const process = new Process();
    const mockData = {body: {type: "testType", desc: 'testDesc', date: 'testDate'}};
    let check = process.create(mockData);
    expect(check).toEqual(true);
  })

  it('Is able to successfully edit data', () =>{
    const process = new Process();
    const mockData = {body: {type: "testType", desc: 'testDesc', date: 'testDate'}};
    process.create(mockData);

    const newMockData = {body: {type: "testType", desc: 'testDesc', date: 'testDate'}};

    let check = process.update(newMockData);

    expect(check).toEqual(true);
  })

})
