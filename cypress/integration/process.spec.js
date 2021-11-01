describe('Feature tests for api', function(){

  it('Test if api can handle post request', () =>{

    cy.task("taskTruncateTables");

    const mockData = {type: "testType", desc: 'testDesc', date: 'testDate'};

    cy.request({
      method: 'POST',
      url: 'make',
      body: mockData
    }).should(res =>{
      expect(res.body.response).to.eq('Success');
    })

  })

  it('Test if data can be accessed through get request', () =>{

    cy.request({
      method: 'GET',
      url: 'view'
    }).should(res =>{
      expect(res.body.response[0].type).to.eq('testType');
    })

  })

  it('Test if data can be altered through put request', () =>{

    const mockData = {id : 1, type: "updateType", desc: 'updateDesc', date: 'updateDate'};

    cy.request({
      method: 'PUT',
      url: 'up',
      body: mockData
    })

    cy.request({
      method: 'GET',
      url: 'view'
    }).should(res =>{
      expect(res.body.response[0].type).to.eq('updateType');
    })

  })

  it('Test if data can be deleted through delete request', () =>{

    const mockData = {id : 1}

    cy.request({
      method: 'DELETE',
      url: 'del',
      body: mockData
    }).should(res =>{
      expect(res.body.response[0].type).to.eq(undefined);
    })

  })



})
