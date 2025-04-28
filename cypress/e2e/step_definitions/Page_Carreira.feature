Feature: Navegação até a página de carreiras e verificação dos elementos

    Scenario: Deve navegar da página inicial até a página de carreiras e verificar os elementos
        Given que estou na página inicial da Zitrus
        When clico no botão "Carreiras"
        Then devo ser redirecionado para a página de "Carreiras"
        And devo verificar o texto "Acessar as vagas"
        And devo verificar a presença do botão "Acessar as vagas"

