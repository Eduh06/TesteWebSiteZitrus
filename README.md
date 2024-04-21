# Teste Automatizado com Cypress no Website da Zitrus

Este projeto contém testes automatizados desenvolvidos com o Cypress e Cucumber para garantir o correto funcionamento das funcionalidades do website da Zitrus.

##### Funcionalidades Testadas
Os testes automatizados cobrem as seguintes funcionalidades:

1. Formulário de Contato:
- Validação dos campos obrigatórios.
- Verificação da mensagem de erro ao tentar enviar o formulário com campos obrigatórios vazios

2. Página de Carreiras:
- Navegação até a página de carreiras.
- Verificação da presença dos elementos esperados, como vagas disponíveis e botão de inscrição.

 
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

