Feature: Verifições no menu Home

  Scenario: Verificar menus na página home
    Given que acesso o site da Nexdom
    Then devo ver os menus principais na página

  Scenario: Clicar no menu saiba mais e verificar o redirecionamento
    Given que acesso o site da Nexdom
    When clico no menu saiba mais
    Then devo verificar que foi redirecionado para a página sobre nós
    
