Feature: Validação dos campos obrigatórios no formulário de contato

Scenario: Deve retornar mensagem de erro ao não preencher o campo obrigatório Nome
Given que estou na página de contato do website da Zitrus
When preencho o formulário de contato sem preencher o campo obrigatório "Nome"
Then devo ver a mensagem de erro "Campo obrigatório"

Scenario: Deve retornar mensagem de erro ao não preencher o campo obrigatório Email
Given que estou na página de contato do website da Zitrus
When preencho o formulário de contato sem preencher o campo obrigatório "Email"
Then devo ver a mensagem de erro "Campo obrigatório"

Scenario: Deve retornar mensagem de erro ao não preencher o campo obrigatório Empresa
Given que estou na página de contato do website da Zitrus
When preencho o formulário de contato sem preencher o campo obrigatório "Empresa"
Then devo ver a mensagem de erro "Campo obrigatório"