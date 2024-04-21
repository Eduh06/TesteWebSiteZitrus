import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given("que estou na página inicial da Zitrus", () => {
    cy.visit('https://zitrus.com.br/');
    cy.viewport(1920, 1080);
    cy.wait(3000);
});

When('clico no botão {string}', (botao) => {
    cy.get('.elementor-sticky--active .elementor-nav-menu--layout-horizontal .menu-item-3423 a')
        .should('be.visible')
        .click();
});

Then('devo ser redirecionado para a página de {string}', (pagina) => {
    cy.url().should('include', '/carreiras');
    cy.wait(2000);
});

And('devo verificar o texto {string}', (texto) => {
    cy.contains(texto).should('exist');
});

And('devo verificar a presença do botão {string}', (botao) => {
    cy.get('#content .elementor-button-link').should('exist');
});