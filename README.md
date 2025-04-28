# Teste Automatizado com Cypress no Website da Nexdom

Este projeto contém testes automatizados desenvolvidos com o Cypress e Cucumber para garantir o correto funcionamento das funcionalidades do website da Nexdom.

## Funcionalidades Testadas

### Etapa 1 - Primeiros Testes

- **Página de Contato:**
  - Validação dos campos obrigatórios.
  - Verificação da mensagem de erro ao tentar enviar o formulário com campos obrigatórios vazios.

- **Página de Carreiras:**

  - Navegação até a página de carreiras.
  - Verificação da presença dos elementos esperados, como o texto "Acesse as vagas e se inscreva pelo link abaixo." e o botão para acesso às vagas.


### Etapa 2 - Aumento de Cenários e Melhorias de Testes

- **Página de Contato:**
    - Validação do formato do Email
 
- **Página Home:**
    - Validação da presença dos menus de navegação
    - Validação do redirecionamento do botão "Saiba Mais" para a tela conheça nossa história

### Etapa 3 - Próxima etapa a ser desenvolvida

- **Página Home:**
    - Validação do redirecionamento para a página Gestão de Planos de Saúde
    - Validação do redirecionamento para a página Autorização e Atendimento
    - Validação do redirecionamento para a página Ressarcimento ao SUS
    - Validação do redirecionamento para a página Portal da Empresa e Beneficiário
    - Validação do redirecionamento para a página Gestão de Relacionamento e Ouvidoria
    - Validação do redirecionamento para a página DataHealth

- **Página de Contato:**
    - Validação do Envio do formulário e mensagem de sucesso
    - Validação do redirecionamento do botão "Carreiras" para a página da Gupy

- **Página de Carreiras:**
    - Validação do redirecionamento para a página da Gupy
    - Validação do redirecionamento para a página aviso de privacidade

## Como baixar o projeto

Para baixar o projeto, siga estas etapas:

1. Abra o terminal ou prompt de comando.
2. Navegue até o diretório onde deseja clonar o projeto.
3. Execute o seguinte comando:

       git clone https://github.com/Eduh06/TesteWebSiteZitrus.git

## Configurações

Antes de executar os testes, é necessário garantir ter todos os aplicativos

##### Cypress: 

Certifique-se de ter o Cypress e o Node.js instalados no seu ambiente de desenvolvimento. Se não tiver, você pode instalá-los seguindo os passos abaixo:

    npm install cypress --save-dev

##### Node.js:
   Antes de instalar o Cypress, certifique-se de ter o Node.js instalado. Você pode baixá-lo e instalá-lo a partir do site oficial do Node.js: [https://nodejs.org/](https://nodejs.org/)


##### Navegue até o diretório do projeto 

    cd TesteWebSiteZitrus

##### Execute o comando:

    npm install


## Como executar os testes

Após realizar o procedimento anterior você pode escolher entre duas maneiras de executar os testes:

### Comando Cypress Run (Modo Headless)

Para executar os testes no modo headless (sem interface gráfica), use o seguinte comando na raiz do projeto:

    npx cypress run


Este comando iniciará a execução dos testes automatizados usando o Cypress no modo headless. Os resultados serão exibidos no console.

### Comando Cypress Open (Modo Interativo)

Para executar os testes no modo interativo (com interface gráfica), use o seguinte comando na raiz do projeto:

    npx cypress open


Esse comando abrirá o Cypress Test Runner, onde será possivel interagir com os testes em tempo real, verificar os resultados detalhados e depurar os testes conforme necessário.

#### Visualizando as Specs

Ao executar o comando npx cypress open, o Cypress Test Runner será aberto, e você verá uma lista de specs disponíveis para execução. As specs são arquivos de feature Cucumber que contêm os cenários de teste para diferentes partes do website da Zitrus.

#### Selecionando e Executando os Testes
Para executar os testes, basta clicar na spec desejada no Cypress Test Runner. Isso iniciará a execução dos cenários de teste definidos nessa spec, e você poderá acompanhar o progresso e os resultados diretamente na interface do Test Runner.
- Page_Carreira.feature
- Page_Contato.feature
