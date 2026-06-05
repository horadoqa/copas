# Plano de CI/CD — World Cup Champions Explorer

**Projeto:** World Cup Champions Explorer
**Versão:** 1.0
**Data:** Junho/2026
**Objetivo:** Automatizar integração, validação, empacotamento e implantação da aplicação Full Stack (Frontend + Backend + PostgreSQL).

---

# 1. Objetivos

O pipeline CI/CD deve garantir:

* Build automatizado
* Validação de código
* Execução de testes
* Análise de qualidade
* Geração de artefatos
* Build de imagens Docker
* Deploy automatizado
* Rollback controlado
* Rastreabilidade de versões

---

# 2. Estratégia de Branches

## Modelo Git Flow Simplificado

```text
main
│
├── develop
│
├── feature/frontend
├── feature/backend
├── feature/database
├── feature/tests
│
└── hotfix/*
```

---

## Branches

### main

Produção

Restrições:

* Merge somente via Pull Request
* Aprovação obrigatória
* Pipeline obrigatório

---

### develop

Homologação

Utilizada para:

* Integração contínua
* Testes de aceitação

---

### feature/*

Desenvolvimento de funcionalidades

Exemplos:

```text
feature/list-world-cups
feature/search-champions
feature/docker-config
```

---

### hotfix/*

Correções urgentes

Exemplo:

```text
hotfix/fix-api-error
```

---

# 3. Ambientes

| Ambiente | Objetivo        |
| -------- | --------------- |
| Local    | Desenvolvimento |
| Dev      | Integração      |
| Homolog  | Validação       |
| Produção | Uso final       |

---

# 4. Ferramentas

## Repositório

* [GitHub](https://github.com?utm_source=chatgpt.com)

---

## CI/CD

Opções recomendadas:

* [GitHub Actions](https://github.com/features/actions?utm_source=chatgpt.com)
* [GitLab CI/CD](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/?utm_source=chatgpt.com)
* [Azure DevOps](https://azure.microsoft.com/products/devops?utm_source=chatgpt.com)

Recomendação:

**GitHub Actions**

---

## Container Registry

Opções:

* [GitHub Container Registry](https://ghcr.io?utm_source=chatgpt.com)
* [Docker Hub](https://hub.docker.com?utm_source=chatgpt.com)
* [Amazon ECR](https://aws.amazon.com/ecr/?utm_source=chatgpt.com)

Recomendação:

**GHCR**

---

# 5. Pipeline de Continuous Integration

## Fluxo

```text
Pull Request
      │
      ▼
 Checkout
      │
      ▼
 Install Dependencies
      │
      ▼
 Lint
      │
      ▼
 Unit Tests
      │
      ▼
 Integration Tests
      │
      ▼
 Security Scan
      │
      ▼
 Build
      │
      ▼
 Success
```

---

# 6. Pipeline Frontend

## Etapa 1 — Checkout

Objetivo:

Baixar código.

---

## Etapa 2 — Instalação

```bash
npm ci
```

---

## Etapa 3 — Lint

```bash
npm run lint
```

---

## Etapa 4 — Testes

```bash
npm run test
```

---

## Etapa 5 — Build

```bash
npm run build
```

Saída:

```text
dist/
```

---

# 7. Pipeline Backend

## Etapa 1 — Instalação

```bash
npm ci
```

---

## Etapa 2 — Lint

```bash
npm run lint
```

---

## Etapa 3 — Testes Unitários

```bash
npm run test
```

---

## Etapa 4 — Cobertura

```bash
npm run test:coverage
```

Critério:

```text
>= 80%
```

---

## Etapa 5 — Build

```bash
npm run build
```

---

# 8. Banco de Dados

## Validação de Migrations

Executar:

```bash
npm run prisma:migrate
```

ou

```bash
npm run migrate
```

Resultado esperado:

```text
Sem erros
```

---

## Seed

Executar:

```bash
npm run seed
```

Validações:

* 10 Copas cadastradas
* Seleções cadastradas
* Jogadores cadastrados

---

# 9. Quality Gate

A pipeline falha se ocorrer:

### Lint

```text
Erro > 0
```

---

### Cobertura

```text
Backend < 80%
Frontend < 70%
```

---

### Vulnerabilidades

```text
Critical = Bloqueia
High = Bloqueia
```

---

### Build

```text
Falha de compilação
```

---

# 10. Segurança

## SAST

Ferramentas:

* [CodeQL](https://codeql.github.com?utm_source=chatgpt.com)
* [Semgrep](https://semgrep.dev?utm_source=chatgpt.com)

Executar:

```text
A cada Pull Request
```

---

## Dependency Scan

Ferramentas:

* [Dependabot](https://github.com/dependabot?utm_source=chatgpt.com)
* [Snyk](https://snyk.io?utm_source=chatgpt.com)

Objetivo:

Identificar bibliotecas vulneráveis.

---

## Container Scan

Ferramentas:

* [Trivy](https://trivy.dev?utm_source=chatgpt.com)
* [Grype](https://github.com/anchore/grype?utm_source=chatgpt.com)

Executar:

```text
Após build Docker
```

---

# 11. Build Docker

## Backend

```bash
docker build -t worldcup-api .
```

---

## Frontend

```bash
docker build -t worldcup-web .
```

---

## Tagging

Formato:

```text
vMAJOR.MINOR.PATCH
```

Exemplos:

```text
v1.0.0
v1.1.0
v1.1.1
```

---

# 12. Publicação de Imagens

## Registry

```text
ghcr.io/company/worldcup-api
ghcr.io/company/worldcup-web
```

Fluxo:

```text
Build
  ↓
Scan
  ↓
Push
```

---

# 13. Continuous Deployment

---

## Deploy DEV

Trigger:

```text
Merge em develop
```

Fluxo:

```text
Build
Deploy automático
Smoke Test
```

---

## Deploy Homolog

Trigger:

```text
Release Candidate
```

Fluxo:

```text
Deploy
BDD
Testes E2E
```

---

## Deploy Produção

Trigger:

```text
Tag v*
```

Exemplo:

```text
v1.0.0
```

Fluxo:

```text
Aprovação Manual
↓
Deploy
↓
Health Check
↓
Smoke Test
```

---

# 14. Estratégia de Deploy

## Blue-Green

Arquitetura:

```text
Produção Atual (Blue)
Produção Nova (Green)
```

Fluxo:

```text
Deploy Green
↓
Validação
↓
Troca de Tráfego
```

Vantagens:

* Zero downtime
* Rollback rápido

---

# 15. Smoke Tests

Após deploy:

### API

```http
GET /health
```

Esperado:

```json
{
  "status": "UP"
}
```

---

### Home

Verificar:

```text
HTTP 200
```

---

### Consulta Copa

Verificar:

```http
GET /world-cups
```

Retorno:

```text
Status 200
```

---

# 16. Rollback

## Critérios

Executar rollback se:

* Health Check falhar
* Erro crítico em produção
* Taxa de erro > 5%
* API indisponível

---

## Processo

### Docker

```bash
docker rollback
```

ou

```bash
docker compose down
docker compose up -d
```

utilizando a imagem anterior.

---

### Kubernetes

```bash
kubectl rollout undo deployment/worldcup-api
```

---

# 17. Monitoramento Pós-Deploy

Monitorar:

* Disponibilidade
* CPU
* Memória
* Latência
* Taxa de erro

Ferramentas:

* [Prometheus](https://prometheus.io?utm_source=chatgpt.com)
* [Grafana](https://grafana.com?utm_source=chatgpt.com)

---

# 18. Métricas de Sucesso

| Indicador                 | Meta     |
| ------------------------- | -------- |
| Build Success Rate        | > 95%    |
| Cobertura Backend         | ≥ 80%    |
| Cobertura Frontend        | ≥ 70%    |
| Tempo de Build            | < 10 min |
| Tempo de Deploy           | < 5 min  |
| Disponibilidade           | ≥ 99,5%  |
| Vulnerabilidades Críticas | 0        |
| Rollback Time             | < 10 min |

---

# 19. Estrutura dos Workflows

```text
.github/
└── workflows/
    ├── frontend-ci.yml
    ├── backend-ci.yml
    ├── security.yml
    ├── docker-build.yml
    ├── deploy-dev.yml
    ├── deploy-homolog.yml
    └── deploy-prod.yml
```

---

# 20. Fluxo Completo

```text
Developer
    │
    ▼
Feature Branch
    │
    ▼
Pull Request
    │
    ▼
CI Pipeline
    │
    ├── Lint
    ├── Tests
    ├── Coverage
    ├── Security Scan
    └── Build
    │
    ▼
Merge Develop
    │
    ▼
Deploy DEV
    │
    ▼
Homologação
    │
    ▼
Tag Release
    │
    ▼
Deploy Produção
    │
    ▼
Monitoramento
```

## Recomendação Executiva

Para este projeto, a combinação mais equilibrada entre simplicidade, custo e governança seria:

* Repositório em [GitHub](https://github.com?utm_source=chatgpt.com)
* CI/CD com [GitHub Actions](https://github.com/features/actions?utm_source=chatgpt.com)
* Imagens no [GitHub Container Registry](https://ghcr.io?utm_source=chatgpt.com)
* Ambientes DEV, Homolog e Produção
* Deploy Blue-Green
* Quality Gates obrigatórios
* SAST + Dependency Scan + Container Scan
* Testes automatizados executados em todos os Pull Requests

Essa configuração é adequada para um time pequeno ou médio e pode evoluir para uma arquitetura corporativa sem necessidade de reestruturação significativa.
