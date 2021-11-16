describe('BlogLists app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset');
    cy.visit('http://localhost:3000');
  });

  it('Login form is shown', function () {
    cy.contains('log in to application');
    cy.contains('username');
    cy.contains('password');
    cy.contains('submit');
  });

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.get('#username').type('abswan');
      cy.get('#password').type('nawsba');
      cy.contains('submit').click();
      cy.contains('logout');
      cy.contains('create new blog');
      cy.contains('Canonical string reduction Edsger W. Dijkstra');
      cy.contains('First class tests Robert C. Martin');
      cy.contains('React patterns Michael Chan');
      cy.contains('Go To Statement Considered Harmful Edsger W. Dijkstra');
      cy.contains('Type wars Robert C. Martin');
      cy.contains('TDD harms architecture Robert C. Martin');
    });

    // it('fails with wrong credentials', function () {
    //   // ...
    // });
  });
});
