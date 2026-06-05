# BDD - World Cup Champions Explorer

Para um projeto desse porte, o ideal é organizar o BDD por **épicos**, cobrindo funcionalidades, regras de negócio, API, persistência, UX, segurança, observabilidade e cenários negativos.

## Feature: Consultar Copas do Mundo

### Cenário: Listar todas as Copas cadastradas

```gherkin
Feature: Listagem de Copas do Mundo

Scenario: Exibir todas as Copas disponíveis
  Given que existem 10 Copas do Mundo cadastradas
  When o usuário acessar a página inicial
  Then o sistema deve exibir as 10 Copas
  And cada Copa deve apresentar ano, país-sede e seleção campeã
```

### Cenário: Nenhuma Copa cadastrada

```gherkin
Scenario: Não existem Copas cadastradas
  Given que não existem Copas cadastradas
  When o usuário acessar a página inicial
  Then o sistema deve exibir a mensagem "Nenhuma Copa encontrada"
```

### Cenário: Erro ao carregar dados

```gherkin
Scenario: Falha na comunicação com a API
  Given que a API está indisponível
  When o usuário acessar a página inicial
  Then o sistema deve exibir uma mensagem de erro
```

---

## Feature: Visualizar detalhes de uma Copa

### Cenário: Exibir detalhes completos

```gherkin
Feature: Detalhes da Copa

Scenario: Consultar uma Copa existente
  Given que existe a Copa de 2022 cadastrada
  When o usuário acessar os detalhes da Copa de 2022
  Then o sistema deve exibir:
    | Ano |
    | País-sede |
    | Campeão |
    | Vice-campeão |
    | Resultado da Final |
    | Técnico |
    | Capitão |
```

### Cenário: Copa inexistente

```gherkin
Scenario: Consultar Copa inexistente
  Given que não existe a Copa de 2030 cadastrada
  When o usuário consultar a Copa de 2030
  Then o sistema deve retornar erro 404
```

---

## Feature: Buscar Copa por ano

### Cenário: Busca válida

```gherkin
Feature: Pesquisa por Ano

Scenario Outline: Buscar Copa existente
  Given que existe a Copa do ano "<ano>"
  When o usuário pesquisar por "<ano>"
  Then a Copa correspondente deve ser exibida

Examples:
  | ano |
  | 2022 |
  | 2018 |
  | 2014 |
```

### Cenário: Ano inexistente

```gherkin
Scenario: Buscar ano não cadastrado
  Given que não existe Copa em 1978
  When o usuário pesquisar por 1978
  Then o sistema deve informar que nenhuma Copa foi encontrada
```

### Cenário: Ano inválido

```gherkin
Scenario Outline: Informar ano inválido
  When o usuário pesquisar por "<ano>"
  Then o sistema deve exibir erro de validação

Examples:
  | ano |
  | abc |
  | -1 |
  | 0 |
  | 2022.5 |
```

---

## Feature: Buscar por país-sede

### Cenário: País-sede existente

```gherkin
Feature: Pesquisa por País-Sede

Scenario: Buscar Copa por país-sede
  Given que existe uma Copa sediada no Qatar
  When o usuário pesquisar por Qatar
  Then a Copa de 2022 deve ser exibida
```

### Cenário: País inexistente

```gherkin
Scenario: Buscar país inexistente
  Given que não existe Copa sediada em Marte
  When o usuário pesquisar por Marte
  Then nenhuma Copa deve ser encontrada
```

---

## Feature: Buscar seleção campeã

### Cenário: Campeão existente

```gherkin
Feature: Pesquisa por Campeão

Scenario: Buscar seleção campeã
  Given que a Argentina venceu a Copa de 2022
  When o usuário pesquisar por Argentina
  Then os dados da seleção campeã devem ser exibidos
```

### Cenário: Campeão inexistente

```gherkin
Scenario: Buscar seleção não cadastrada
  Given que não existe seleção cadastrada chamada Atlântida
  When o usuário pesquisar por Atlântida
  Then o sistema deve informar que a seleção não foi encontrada
```

---

## Feature: Consultar elenco campeão

### Cenário: Exibir jogadores

```gherkin
Feature: Elenco Campeão

Scenario: Consultar elenco da Argentina
  Given que existe o elenco campeão da Argentina em 2022
  When o usuário acessar os jogadores da Argentina
  Then todos os jogadores devem ser exibidos
```

### Cenário: Exibir posições dos jogadores

```gherkin
Scenario: Exibir posição dos atletas
  Given que existe um jogador cadastrado
  When os detalhes forem exibidos
  Then a posição do jogador deve ser apresentada
```

### Cenário: Elenco vazio

```gherkin
Scenario: Elenco não encontrado
  Given que a seleção não possui jogadores cadastrados
  When o usuário consultar o elenco
  Then o sistema deve informar que não há jogadores disponíveis
```

---

## Feature: Consultar técnico campeão

### Cenário: Técnico existente

```gherkin
Feature: Técnico Campeão

Scenario: Consultar técnico da seleção
  Given que Lionel Scaloni está cadastrado
  When o usuário visualizar os detalhes da Argentina
  Then o nome do técnico deve ser exibido
```

### Cenário: Técnico não cadastrado

```gherkin
Scenario: Técnico ausente
  Given que a seleção não possui técnico cadastrado
  When o usuário consultar os detalhes
  Then o sistema deve exibir "Não informado"
```

---

## Feature: Consultar capitão da seleção

### Cenário: Capitão existente

```gherkin
Feature: Capitão da Equipe

Scenario: Exibir capitão
  Given que Lionel Messi é capitão da Argentina
  When o usuário consultar os detalhes da seleção
  Then Lionel Messi deve ser exibido como capitão
```

### Cenário: Capitão não cadastrado

```gherkin
Scenario: Capitão ausente
  Given que não existe capitão cadastrado
  When os detalhes forem exibidos
  Then o sistema deve exibir "Não informado"
```

---

## Feature: API REST

## GET /world-cups

### Cenário: Retorno com sucesso

```gherkin
Feature: API World Cups

Scenario: Listar Copas
  When uma requisição GET for enviada para /world-cups
  Then a API deve responder com status 200
```

### Cenário: Estrutura da resposta

```gherkin
Scenario: Validar contrato da API
  When uma requisição GET for enviada para /world-cups
  Then cada item deve possuir:
    | year |
    | hostCountry |
    | champion |
```

---

## GET /world-cups/{year}

```gherkin
Scenario: Consultar Copa existente
  Given que existe uma Copa cadastrada
  When GET /world-cups/2022 for executado
  Then retornar status 200
```

```gherkin
Scenario: Consultar Copa inexistente
  When GET /world-cups/2030 for executado
  Then retornar status 404
```

---

## GET /champions/{team}

```gherkin
Scenario: Buscar campeão existente
  When GET /champions/Argentina for executado
  Then retornar status 200
```

```gherkin
Scenario: Buscar campeão inexistente
  When GET /champions/Atlantida for executado
  Then retornar status 404
```

---

## Feature: Banco de Dados

### Cenário: Integridade referencial

```gherkin
Feature: Integridade de Dados

Scenario: Inserir jogador sem seleção
  Given que a seleção não existe
  When tentar cadastrar um jogador
  Then a operação deve ser rejeitada
```

### Cenário: Copa sem campeão

```gherkin
Scenario: Inserir Copa sem campeão
  When tentar salvar a Copa
  Then o banco deve impedir a operação
```

### Cenário: Capitão inexistente

```gherkin
Scenario: Associar capitão inválido
  Given que o jogador não existe
  When associá-lo como capitão
  Then a operação deve falhar
```

---

## Feature: Docker

### Cenário: Inicialização completa

```gherkin
Feature: Containers

Scenario: Subir ambiente completo
  Given que o docker compose está configurado
  When executar docker compose up -d
  Then frontend deve iniciar
  And backend deve iniciar
  And banco deve iniciar
```

### Cenário: Banco indisponível

```gherkin
Scenario: Banco fora do ar
  Given que o PostgreSQL está indisponível
  When o backend iniciar
  Then o serviço deve registrar erro
```

---

## Feature: Performance

### Cenário: Tempo de resposta

```gherkin
Feature: Performance

Scenario: Consultar lista de Copas
  When uma requisição for realizada
  Then o tempo de resposta deve ser inferior a 2 segundos
```

### Cenário: Consulta concorrente

```gherkin
Scenario: Múltiplos acessos simultâneos
  Given 100 usuários simultâneos
  When consultarem as Copas
  Then o sistema deve permanecer disponível
```

---

## Feature: Responsividade

### Cenário: Mobile

```gherkin
Feature: Responsividade

Scenario: Acesso por smartphone
  Given que o usuário utiliza um dispositivo móvel
  When acessar a aplicação
  Then os componentes devem se adaptar à tela
```

### Cenário: Tablet

```gherkin
Scenario: Acesso por tablet
  Given que o usuário utiliza um tablet
  When acessar a aplicação
  Then o layout deve permanecer utilizável
```

---

## Feature: Segurança

### Cenário: SQL Injection

```gherkin
Feature: Segurança

Scenario: Tentativa de SQL Injection
  When o usuário enviar "' OR 1=1 --"
  Then a consulta deve ser bloqueada
```

### Cenário: XSS

```gherkin
Scenario: Tentativa de XSS
  When o usuário enviar "<script>alert('xss')</script>"
  Then o conteúdo deve ser sanitizado
```

### Cenário: Rate Limit

```gherkin
Scenario: Muitas requisições
  Given que um cliente excedeu o limite permitido
  When continuar enviando requisições
  Then a API deve responder 429
```

---

## Feature: Observabilidade

### Cenário: Logs

```gherkin
Feature: Logs

Scenario: Registrar requisições
  When uma requisição for processada
  Then um log deve ser armazenado
```

### Cenário: Registro de erro

```gherkin
Scenario: Exceção na aplicação
  When ocorrer um erro interno
  Then o erro deve ser registrado
```

---

## Resumo

Uma suíte BDD corporativa para este projeto normalmente teria entre:

* 15 Features
* 80 a 120 Cenários
* 200+ Casos de teste derivados

abrangendo:

* Funcionalidades do Frontend
* API REST
* Banco de Dados
* Docker
* Performance
* Segurança
* Observabilidade
* Acessibilidade
* Responsividade
* Casos positivos, negativos e de borda (edge cases)

Isso fornece cobertura suficiente para testes automatizados com **Cucumber + Playwright (Frontend)** e **Cucumber + Jest/Supertest (Backend)** em um pipeline CI/CD.
