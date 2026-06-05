Para esse projeto específico, o tamanho do time depende muito do objetivo. Se a meta for um **MVP funcional**, a equipe pode ser pequena. Se for um produto corporativo com qualidade de produção, observabilidade, testes automatizados e CI/CD, o time cresce.

## Cenário 1 — MVP (1 a 3 semanas)

### Equipe mínima

| Papel                       |  Quantidade |
| --------------------------- | ----------: |
| Full Stack Developer        |           1 |
| QA                          | 1 (parcial) |
| Product Owner / Stakeholder | 1 (parcial) |

### Responsabilidades

**Full Stack Developer**

* React + TypeScript
* Node.js + Express
* PostgreSQL
* Docker Compose
* Swagger
* Seed de dados das Copas
* Deploy local

**QA**

* Testes funcionais
* Validação dos critérios de aceite
* Testes exploratórios

**Total**

* 1 Dev Full Stack
* 1 QA compartilhado

---

## Cenário 2 — Projeto Profissional (4 a 8 semanas)

### Equipe recomendada

| Papel              | Quantidade |
| ------------------ | ---------: |
| Tech Lead          |          1 |
| Frontend Developer |          1 |
| Backend Developer  |          1 |
| QA Engineer        |          1 |
| Product Owner      |          1 |

### Responsabilidades

#### Tech Lead

* Arquitetura
* Revisão de código
* Padrões
* Integrações
* Decisões técnicas

#### Frontend

* React
* Componentização
* UX
* Consumo da API
* Testes de interface

#### Backend

* APIs
* Banco
* Segurança
* Docker
* Swagger

#### QA

* BDD
* Testes automatizados
* Testes manuais
* Regressão

#### Product Owner

* Refinamento
* Backlog
* Critérios de aceite

**Total**

* 5 pessoas

---

## Cenário 3 — Produto Corporativo

Se o sistema fizer parte de um portal esportivo ou plataforma pública.

| Papel               | Quantidade |
| ------------------- | ---------: |
| Product Owner       |          1 |
| Scrum Master        |          1 |
| Tech Lead           |          1 |
| Frontend Developers |          2 |
| Backend Developers  |          2 |
| QA Automation       |          1 |
| QA Manual           |          1 |
| DevOps              |          1 |
| UX/UI Designer      |          1 |

**Total**

* 10 pessoas

---

# Estimativa de esforço

### Desenvolvimento

| Atividade           | Esforço |
| ------------------- | ------: |
| Modelagem BD        |   1 dia |
| Backend             |  4 dias |
| Frontend            |  5 dias |
| Docker              |   1 dia |
| Swagger             |   1 dia |
| Testes unitários    |  2 dias |
| Ajustes e correções |  2 dias |

**Total Dev:** ~16 dias úteis

---

### QA

| Atividade      | Esforço |
| -------------- | ------: |
| Planejamento   |   1 dia |
| Casos de teste |  2 dias |
| Execução       |  2 dias |
| Regressão      |   1 dia |

**Total QA:** ~6 dias úteis

---

# Recomendação

Para esse projeto, considerando que ele é basicamente um **catálogo de dados históricos da Copa do Mundo**, a composição mais eficiente seria:

| Papel             |  Quantidade |
| ----------------- | ----------: |
| Full Stack Senior |           1 |
| QA                |           1 |
| Product Owner     | 1 (parcial) |

**Equipe total: 2 pessoas dedicadas + 1 stakeholder parcial.**

Com essa estrutura é possível entregar uma versão completa, com Docker, API REST, PostgreSQL, React, Swagger, testes e documentação em aproximadamente **2 a 3 semanas**.
