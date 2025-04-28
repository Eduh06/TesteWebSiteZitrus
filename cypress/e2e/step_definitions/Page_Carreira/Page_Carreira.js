import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given("que estou na página inicial da Zitrus", () => {
    cy.visit('https://nexdom.tec.br/');
    cy.viewport(1920, 1080);
    cy.wait(3000); // Pode ajustar para wait explícito se preferir
});

When('clico no botão {string}', (botao) => {
    cy.contains('button, a, span', botao) // procura botão, link ou span pelo texto
        .should('be.visible')
        .click();
});

Then('devo ser redirecionado para a página de {string}', (pagina) => {
    const paginas = {
        "Carreiras": "/carreiras",
        // Adicione aqui mais páginas se precisar no futuro
    };

    const pathEsperado = paginas[pagina];

    cy.url().should('include', pathEsperado);
    cy.wait(2000);
});

And('devo verificar o texto {string}', (texto) => {
    cy.contains(texto)
        .should('exist');
});

And('devo verificar a presença do botão {string}', (botao) => {
    cy.contains('button, a', botao)
        .should('exist');
});