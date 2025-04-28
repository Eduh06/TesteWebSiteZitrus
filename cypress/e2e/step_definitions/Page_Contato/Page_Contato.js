import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que estou na página de contato do website da nexdom", () => {
    cy.visit('https://nexdom.tec.br/Contato');
    cy.viewport(1920, 1080);
    cy.wait(3000);
});

When('preencho o formulário de contato sem preencher o campo obrigatório {string}', (campo) => {
    const CampoNome = '#form-field-name';
    const CampoEmpresa = '#form-field-message';
    const CampoEmail = '#form-field-email';

    // Limpa e preenche os campos necessários
    if (campo === 'Nome') {
        cy.get(CampoNome).clear({ force: true });
        cy.get(CampoEmpresa).clear({ force: true });
        cy.get(CampoEmpresa).type('Industrias Simpsons', { force: true });
        cy.get(CampoEmail).clear({ force: true });
        cy.get(CampoEmail).type('eduardo@example.com', { force: true });
        
    } else if (campo === 'Empresa') {
        cy.get(CampoNome).clear({ force: true });
        cy.get(CampoNome).type('Eduardo dos Santos', { force: true });
        cy.get(CampoEmail).clear({ force: true });
        cy.get(CampoEmail).type('eduardo@example.com', { force: true });
    } else if (campo === 'Email') {
        cy.get(CampoNome).clear({ force: true });
        cy.get(CampoNome).type('Eduardo dos Santos', { force: true });
        cy.get(CampoEmpresa).clear({ force: true });
        cy.get(CampoEmpresa).type('Industrias Simpsons', { force: true });
    }
    // Clica no botão Enviar
    cy.contains('Enviar').click({ force: true });
});

When('preencho o formulário de contato com o email inválido {string}', (email) => {
    const CampoNome = '#form-field-name';
    const CampoEmpresa = '#form-field-message';
    const CampoEmail = '#form-field-email';

    // Limpa e preenche os campos necessários
    cy.get(CampoNome).clear({ force: true });
    cy.get(CampoNome).type('Eduardo dos Santos', { force: true });
    cy.get(CampoEmpresa).clear({ force: true });
    cy.get(CampoEmpresa).type('Industrias Simpsons', { force: true });

    // Preenche o campo de email com o valor inválido
    cy.get(CampoEmail).clear({ force: true });
    cy.get(CampoEmail).type(email, { force: true });

    // Clica no botão Enviar
    cy.contains('Enviar').click({ force: true });
});

Then('devo ver a mensagem de erro {string} no campo {string}', (mensagemErro, campo) => {
    let seletorCampo = '';

    if (campo === 'Nome') {
        seletorCampo = '#form-field-name';
    } else if (campo === 'Email') {
        seletorCampo = '#form-field-email';
    } else if (campo === 'Empresa') {
        seletorCampo = '#form-field-message';
    }

    cy.get(seletorCampo)
      .invoke('prop', 'validationMessage')
      .should('include', mensagemErro);
});


