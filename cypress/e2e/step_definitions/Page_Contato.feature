Feature: Validação dos campos obrigatórios no formulário de contato

Scenario: Deve retornar mensagem de erro ao não preencher o campo obrigatório Nome
  Given que estou na página de contato do website da nexdom
  When preencho o formulário de contato sem preencher o campo obrigatório "Nome"
  Then devo ver a mensagem de erro "Preencha este campo." no campo "Nome"

Scenario: Deve retornar mensagem de erro ao não preencher o campo obrigatório Email
  Given que estou na página de contato do website da nexdom
  When preencho o formulário de contato sem preencher o campo obrigatório "Email"
  Then devo ver a mensagem de erro "Preencha este campo." no campo "Email"

Scenario: Deve retornar mensagem de erro ao não preencher o campo obrigatório Empresa
  Given que estou na página de contato do website da nexdom
  When preencho o formulário de contato sem preencher o campo obrigatório "Empresa"
  Then devo ver a mensagem de erro "Preencha este campo." no campo "Empresa"

Scenario: Deve retornar mensagem de erro ao preencher o campo Email com formato inválido
  Given que estou na página de contato do website da nexdom
  When preencho o formulário de contato com o email inválido "email-invalido"
  Then devo ver a mensagem de erro "Inclua um \"@\" no endereço de e-mail." no campo "Email"
