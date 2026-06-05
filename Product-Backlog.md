# Product Backlog — World Cup Champions Explorer

## 1. Visão do Produto

### Objetivo

Disponibilizar uma aplicação web que permita consultar as últimas 10 edições da Copa do Mundo FIFA, exibindo informações sobre torneios, países-sede, seleções campeãs, técnicos e jogadores dos times campeões.

### Público-alvo

* Estudantes
* Jornalistas esportivos
* Pesquisadores
* Torcedores
* Desenvolvedores utilizando a API

### MVP

* Consulta das últimas 10 Copas
* Visualização dos campeões
* Consulta dos elencos campeões
* API REST documentada
* Dockerização completa

---

# 2. Épicos

| ID   | Épico                     |
| ---- | ------------------------- |
| EP01 | Infraestrutura do Projeto |
| EP02 | Banco de Dados            |
| EP03 | API de Copas              |
| EP04 | API de Seleções Campeãs   |
| EP05 | API de Jogadores          |
| EP06 | Frontend                  |
| EP07 | Pesquisa e Filtros        |
| EP08 | Qualidade                 |
| EP09 | Observabilidade           |
| EP10 | Deploy e Produção         |

---

# EP01 — Infraestrutura do Projeto

## US001

**Como** desenvolvedor
**Quero** criar a estrutura inicial do projeto
**Para** iniciar o desenvolvimento padronizado

### Critérios de Aceite

* Estrutura FE criada
* Estrutura BE criada
* Estrutura DB criada
* Git configurado

### Prioridade

🔴 Alta

### Story Points

3

---

## US002

**Como** desenvolvedor
**Quero** configurar TypeScript
**Para** garantir tipagem estática

### Critérios

* TS configurado no FE
* TS configurado no BE

### Prioridade

🔴 Alta

### Story Points

2

---

## US003

**Como** desenvolvedor
**Quero** configurar ESLint e Prettier
**Para** manter padrão de código

### Story Points

2

---

# EP02 — Banco de Dados

## US004

**Como** sistema
**Quero** armazenar informações dos países
**Para** relacioná-los às Copas

### Critérios

Tabela Countries:

```text
id
name
continent
```

### Story Points

3

---

## US005

**Como** sistema
**Quero** armazenar as Copas do Mundo

### Critérios

Tabela WorldCups:

```text
id
year
host_country
champion_team
runner_up_team
final_score
```

### Story Points

5

---

## US006

**Como** sistema
**Quero** armazenar seleções

### Story Points

3

---

## US007

**Como** sistema
**Quero** armazenar técnicos

### Story Points

2

---

## US008

**Como** sistema
**Quero** armazenar jogadores

### Story Points

5

---

## US009

**Como** administrador
**Quero** popular automaticamente o banco

### Critérios

* Script seed executável
* Últimas 10 Copas cadastradas

### Story Points

5

---

# EP03 — API de Copas

## US010

**Como** usuário
**Quero** listar todas as Copas

### Endpoint

```http
GET /world-cups
```

### Critérios

Retornar:

* Ano
* País-sede
* Campeão

### Story Points

5

---

## US011

**Como** usuário
**Quero** consultar uma Copa específica

### Endpoint

```http
GET /world-cups/{year}
```

### Story Points

3

---

## US012

**Como** usuário
**Quero** visualizar detalhes da final

### Critérios

Retornar:

* Campeão
* Vice
* Resultado

### Story Points

2

---

# EP04 — API de Seleções Campeãs

## US013

**Como** usuário
**Quero** consultar uma seleção campeã

### Endpoint

```http
GET /champions/{team}
```

### Story Points

5

---

## US014

**Como** usuário
**Quero** visualizar o técnico da seleção

### Story Points

2

---

## US015

**Como** usuário
**Quero** visualizar o capitão da seleção

### Story Points

2

---

## US016

**Como** usuário
**Quero** visualizar quantidade de títulos

### Story Points

2

---

# EP05 — API de Jogadores

## US017

**Como** usuário
**Quero** listar jogadores da seleção

### Endpoint

```http
GET /champions/{team}/players
```

### Story Points

5

---

## US018

**Como** usuário
**Quero** visualizar posição do jogador

### Story Points

2

---

## US019

**Como** usuário
**Quero** visualizar número da camisa

### Story Points

2

---

## US020

**Como** usuário
**Quero** visualizar data de nascimento

### Story Points

2

---

# EP06 — Frontend

## US021

**Como** visitante
**Quero** acessar uma página inicial

### Critérios

Exibir:

* Título
* Lista das Copas

### Story Points

3

---

## US022

**Como** visitante
**Quero** visualizar cards das Copas

### Story Points

3

---

## US023

**Como** visitante
**Quero** abrir detalhes da Copa

### Story Points

5

---

## US024

**Como** visitante
**Quero** visualizar seleção campeã

### Story Points

3

---

## US025

**Como** visitante
**Quero** visualizar elenco campeão

### Story Points

5

---

## US026

**Como** visitante
**Quero** navegar entre páginas

### Story Points

3

---

## US027

**Como** visitante
**Quero** visualizar carregamento

### Critérios

* Skeleton
* Spinner

### Story Points

2

---

## US028

**Como** visitante
**Quero** visualizar mensagens de erro

### Story Points

2

---

# EP07 — Pesquisa e Filtros

## US029

**Como** usuário
**Quero** pesquisar por ano

### Story Points

3

---

## US030

**Como** usuário
**Quero** pesquisar por país-sede

### Story Points

3

---

## US031

**Como** usuário
**Quero** pesquisar por campeão

### Story Points

3

---

## US032

**Como** usuário
**Quero** limpar filtros

### Story Points

1

---

# EP08 — Qualidade

## US033

**Como** QA
**Quero** validar a API

### Critérios

* Testes automatizados

### Story Points

5

---

## US034

**Como** QA
**Quero** validar o frontend

### Story Points

5

---

## US035

**Como** QA
**Quero** executar regressão

### Story Points

3

---

## US036

**Como** QA
**Quero** validar critérios BDD

### Story Points

5

---

# EP09 — Observabilidade

## US037

**Como** suporte
**Quero** registrar logs

### Story Points

3

---

## US038

**Como** suporte
**Quero** registrar erros

### Story Points

3

---

## US039

**Como** suporte
**Quero** monitorar saúde da aplicação

### Endpoint

```http
GET /health
```

### Story Points

2

---

# EP10 — Deploy e Produção

## US040

**Como** DevOps
**Quero** criar Dockerfile do backend

### Story Points

2

---

## US041

**Como** DevOps
**Quero** criar Dockerfile do frontend

### Story Points

2

---

## US042

**Como** DevOps
**Quero** criar docker-compose

### Story Points

3

---

## US043

**Como** DevOps
**Quero** configurar variáveis de ambiente

### Story Points

2

---

## US044

**Como** DevOps
**Quero** criar pipeline CI/CD

### Critérios

* Build
* Testes
* Deploy

### Story Points

8

---

## US045

**Como** usuário final
**Quero** acessar a aplicação publicada

### Critérios

* HTTPS
* Disponibilidade

### Story Points

3

---

# Backlog Técnico (Tech Debt)

## TD001

Melhorar cobertura de testes para 90%

SP: 5

---

## TD002

Implementar cache Redis

SP: 8

---

## TD003

Adicionar paginação

SP: 3

---

## TD004

Implementar autenticação

SP: 8

---

## TD005

Adicionar métricas Prometheus

SP: 8

---

# MVP (Release 1.0)

Histórias obrigatórias:

* US001 → US032
* US040 → US043

Total aproximado: **90–110 Story Points**

---

# Release 1.1

* US033 → US039
* US044

Total aproximado: **20–30 Story Points**

---

# Release 2.0

Melhorias:

* Redis
* Observabilidade avançada
* Autenticação
* Métricas
* Escalabilidade

Total aproximado: **25–40 Story Points**

Esse backlog já está estruturado para ser importado em ferramentas como **Jira**, **Azure DevOps**, **ClickUp**, **Monday.com** ou **Trello**, servindo como base para planejamento de sprints, estimativas e acompanhamento do projeto.
