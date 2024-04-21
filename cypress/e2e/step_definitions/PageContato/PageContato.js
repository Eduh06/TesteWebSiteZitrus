import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que estou na página de contato do website da Zitrus", () => {
    cy.visit('https://zitrus.com.br/Contato');
    cy.viewport(1920, 1080);
    cy.wait(3000);
});

When('preencho o formulário de contato sem preencher o campo obrigatório {string}', (campo) => {
    const CampoNome = '#rd-text_field-lagu3sy8';
    const CampoEmpresa = '.js-field-company';
    const CampoEmail = '#rd-email_field-lagu3sy9';
    if (campo === 'Nome') {
        cy.get(CampoNome).clear();
        cy.get(CampoEmail).clear().type('eduardo@example.com');
        cy.get(CampoEmpresa).clear().type('Industrias Simpsons');
    } else if (campo === 'Empresa') {
        cy.get(CampoNome).clear().type('Eduardo dos Santos');
        cy.get(CampoEmail).clear().type('eduardo@example.com');
    } else if (campo === 'Email') {
        cy.get(CampoNome).clear().type('Eduardo dos Santos');
        cy.get(CampoEmpresa).clear().type('Industrias Simpsons');
    }
    cy.contains('Enviar').click();
});

Then('devo ver a mensagem de erro {string}', (mensagemErro) => {
    cy.contains(mensagemErro).should('be.visible');
}); 






