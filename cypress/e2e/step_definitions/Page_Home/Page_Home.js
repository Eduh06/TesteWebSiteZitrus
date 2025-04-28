import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que acesso o site da Nexdom', () => {
  cy.visit('https://nexdom.tec.br/');
  cy.viewport(1920, 1080);
  cy.get('body').should('be.visible'); 
});

When('clico no menu saiba mais', () => {
  cy.contains('Saiba mais')    
    .should('be.visible')  // Verifica se o botão está visível
    .click({ force: true }); 

});
Then('devo verificar que foi redirecionado para a página sobre nós', () => {
  // Verifica se a URL está correta
  cy.url().should('include', '/sobre-nos/');
});

Then('devo ver os menus principais na página', () => {
  const menus = [
      'Home',
      'Sobre nós',
      'Soluções',
      'Carreiras',
      'Contato'
      // Adicione mais nomes de menus aqui se tiver
  ];

  menus.forEach((menu) => {
      cy.contains(menu).should('be.visible');
  });
});
  
  
  
  
  

