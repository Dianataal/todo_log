describe('Todo List Application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  it('should display the todo list', () => {
    cy.contains('React task').should('be.visible');
    cy.contains('high').should('be.visible');
    cy.contains('22').should('be.visible');
    cy.contains('Client project').should('be.visible');
    cy.contains('high').should('be.visible');
    cy.contains('24').should('be.visible');
  });

  it('should have a fillable form to add user', () => {

    cy.contains('Username').next('input').type('user123');
    cy.contains('Age (Years)').next('input').type('25');

    cy.contains('Add User').click();

    cy.contains('user123');
    cy.contains('medium');
  });

  it('Add Task button should work', () => {
    cy.contains('Add Task').click();
  });

  it('should have a fillable form, new todo should be in list', () => {
    cy.contains('Add Task').click();

    cy.contains('Title').next('input').type('study');
    cy.contains('Priority').next('select').select('medium');
    cy.contains('Date').next('input').type('2023-12-12');

    cy.contains('Add Task').click();

    cy.contains('study');
    cy.contains('medium');
    cy.contains('December');
    cy.contains('12');
    cy.contains('2023');
  });

  it('the filter should filter by priority', () => {
    cy.contains('Filter by priority').siblings('select').select('high');

    cy.contains('React task').should('be.visible');
    cy.contains('high').should('be.visible');
    cy.contains('22').should('be.visible');

    cy.contains('Client project').should('be.visible');
    cy.contains('high').should('be.visible');
    cy.contains('24').should('be.visible');

    cy.contains('Filter by priority').siblings('select').select('low');

  });
});
