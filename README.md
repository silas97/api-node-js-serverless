# Uma API seguindo os princípios de Arquitetura Limpa com Serveless (NodeJS)

## Clean Architecture

O aplicativo segue o Uncle Bob "[Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)" princípios e estrutura do projeto :

### Clean Architecture layers

![Schema of flow of Clean Architecture](/doc/Uncle_Bob_Clean_Architecture.jpg)

### Anatomia do projeto

```
src 
 └ node_modules (generated)                  → Dependências NPM
 └ test                                      → Pasta de origem para testes de unidade ou funcionais
 └ handler.js                                → Principal ponto de entrada do aplicativo
 └ serverless.yml                            → Configuração sem servidor serverless
 └ Funcionario                               → Pasta onde contém a implementação de Funcionário 
    └ Repository                             → Implementação de objetos para acesso a dados
    └ UseCases                               → Regras de negócios da aplicação 
    └ Controller                             → Manipuladores de rotas
    └ Adapter                                → Criar um adaptador para conversão de dados para uso externo
    └ Entity                                 → Modelo encapsulado para uma regra de negócio
```

### A regra de dependência

> A regra que faz essa arquitetura funcionar é a regra de dependência. Esta regra diz que as dependências do código-fonte só podem apontar para dentro. Nada em um círculo interno pode saber absolutamente nada sobre algo em um círculo externo. Em particular, o nome de algo declarado em um círculo externo não deve ser mencionado pelo código em um círculo interno. Isso inclui funções, classes. variáveis, ou qualquer outra entidade de software nomeada.
  

src. https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#the-dependency-rule

### Servidor, Rotas e Plugins

A função do servidor é interceptar a solicitação HTTP e combinar a rota correspondente.

As rotas são objetos de configuração cujas responsabilidades são verificar o formato da solicitação e os parâmetros e, em seguida, chamar o bom controlador (com a solicitação recebida). Eles são registrados como Plugins.

Plugins são objetos de configuração que empacotam um conjunto de recursos (ex: autenticação e questões de segurança, rotas, pré-manipuladores, etc.) e são registrados na inicialização do servidor.  

### Controllers

Os controladores são os pontos de entrada para o contexto do aplicativo.

Eles têm 3 responsabilidades principais:

1. Extraia os parâmetros (consulta ou corpo) da solicitação
2. Chamar os casos de usos (camada de aplicativo)
3. Retorne uma resposta HTTP (com código de status e dados da aplicação)

### Use Cases

Um caso de uso é uma unidade lógica de negócios.

É uma classe que deve ter um método que será chamado pelos controladores.

Ele pode ter um construtor para definir suas dependências ou seu contexto de execução.

## Banco de Dados

Um "[Banco de Dados](https://www.oracle.com/br/database/what-is-database/)" é uma coleção organizada de informações; dados; estruturadas; normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS).

O Sistema de Gerenciamento de Banco de Dados utilizado foi o Amazon DynamoDB, ele é um banco de dados NoSQL. Diferente de um banco de dados relacional, as interações com o DynamoDB são stateless, os aplicativos não precisam manter conexões de rede persistentes, mas apenas solicitações e respostas HTTPS.

## Referencial

Todos os créditos desta documentação vai para: https://github.com/dornellas13/nodejs-clean-architecture-app