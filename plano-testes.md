# Plano de Testes — World Cup Champions Explorer

**Versão:** 1.0
**Projeto:** World Cup Champions Explorer
**Tipo de Documento:** Plano Mestre de Testes (Master Test Plan)
**Data:** Junho/2026

---

# 1. Objetivo

Definir a estratégia, abordagem, escopo, critérios, recursos e cronograma de testes para garantir a qualidade da aplicação **World Cup Champions Explorer**, composta por Frontend, Backend e Banco de Dados.

O plano visa assegurar que:

* Os dados das Copas do Mundo sejam exibidos corretamente.
* As APIs retornem informações consistentes.
* A interface funcione em diferentes dispositivos.
* O sistema seja resiliente a falhas.
* Os requisitos funcionais e não funcionais sejam atendidos.

---

# 2. Escopo

## Dentro do Escopo

### Frontend

* Página inicial
* Listagem das Copas
* Pesquisa
* Filtros
* Página de detalhes
* Exibição dos jogadores
* Responsividade
* Tratamento de erros

### Backend

* API REST
* Validações
* Tratamento de exceções
* Swagger
* Health Check

### Banco de Dados

* Estrutura relacional
* Integridade referencial
* Scripts de seed

### Infraestrutura

* Docker
* Docker Compose
* Variáveis de ambiente

---

## Fora do Escopo

* Integração com APIs externas
* Aplicativo mobile
* Autenticação de usuários
* Administração de conteúdo
* Cadastro manual de jogadores

---

# 3. Estratégia de Testes

## Pirâmide de Testes

```text
                E2E
              /     \
       Integração
      /             \
Unitários
```

Distribuição recomendada:

| Tipo       | Cobertura |
| ---------- | --------: |
| Unitário   |       70% |
| Integração |       20% |
| E2E        |       10% |

---

# 4. Tipos de Teste

---

# 4.1 Testes Unitários

## Objetivo

Validar regras de negócio isoladamente.

### Backend

Ferramentas:

* Jest
* Supertest

Cobertura:

* Services
* Validators
* Helpers
* Repositories (mockados)

### Casos

#### CT-001

```text
Validar busca de Copa existente
```

Resultado esperado:

```text
Retornar objeto da Copa
```

---

#### CT-002

```text
Validar busca de Copa inexistente
```

Resultado esperado:

```text
Retornar erro de negócio
```

---

#### CT-003

```text
Validar cálculo de quantidade de títulos
```

Resultado esperado:

```text
Quantidade correta
```

---

# 4.2 Testes de Integração

## Objetivo

Validar comunicação entre API e Banco.

Ferramentas:

* Jest
* PostgreSQL de teste

---

### CT-004

```text
Listar Copas
```

Endpoint:

```http
GET /world-cups
```

Resultado esperado:

```text
Status 200
Retorna 10 registros
```

---

### CT-005

```text
Buscar Copa por ano
```

Resultado esperado:

```text
Status 200
Ano encontrado
```

---

### CT-006

```text
Buscar ano inexistente
```

Resultado esperado:

```text
Status 404
```

---

### CT-007

```text
Listar jogadores
```

Resultado esperado:

```text
Lista completa retornada
```

---

# 4.3 Testes End-to-End (E2E)

## Objetivo

Validar fluxo completo do usuário.

Ferramenta:

* Playwright

---

### CT-008

Fluxo:

```text
Abrir Home
Selecionar Copa
Visualizar detalhes
```

Resultado esperado:

```text
Dados exibidos corretamente
```

---

### CT-009

Fluxo:

```text
Pesquisar Argentina
Abrir seleção
Visualizar elenco
```

Resultado esperado:

```text
Lista de jogadores carregada
```

---

### CT-010

Fluxo:

```text
Pesquisar ano
Abrir resultado
```

Resultado esperado:

```text
Resultado correto
```

---

# 5. Testes Funcionais

---

## Módulo: Copas

### CT-011

```text
Exibir últimas 10 Copas
```

Esperado:

```text
10 registros
```

---

### CT-012

```text
Exibir país-sede
```

Esperado:

```text
Campo preenchido
```

---

### CT-013

```text
Exibir campeão
```

Esperado:

```text
Campo preenchido
```

---

### CT-014

```text
Exibir vice-campeão
```

Esperado:

```text
Campo preenchido
```

---

### CT-015

```text
Exibir resultado da final
```

Esperado:

```text
Campo preenchido
```

---

## Módulo: Seleções

### CT-016

```text
Exibir técnico
```

---

### CT-017

```text
Exibir capitão
```

---

### CT-018

```text
Exibir quantidade de títulos
```

---

## Módulo: Jogadores

### CT-019

```text
Exibir nome
```

---

### CT-020

```text
Exibir posição
```

---

### CT-021

```text
Exibir número da camisa
```

---

### CT-022

```text
Exibir data de nascimento
```

---

# 6. Testes Negativos

---

### CT-023

```text
Ano inválido
```

Entrada:

```text
abc
```

Esperado:

```text
400 Bad Request
```

---

### CT-024

```text
Ano negativo
```

Esperado:

```text
400
```

---

### CT-025

```text
Seleção inexistente
```

Esperado:

```text
404
```

---

### CT-026

```text
Endpoint inexistente
```

Esperado:

```text
404
```

---

### CT-027

```text
Payload inválido
```

Esperado:

```text
422
```

---

# 7. Testes de Segurança

---

### CT-028

SQL Injection

Entrada:

```sql
' OR 1=1 --
```

Esperado:

```text
Consulta bloqueada
```

---

### CT-029

XSS

Entrada:

```html
<script>alert('x')</script>
```

Esperado:

```text
Conteúdo sanitizado
```

---

### CT-030

Rate Limit

Fluxo:

```text
1000 requisições em curto período
```

Esperado:

```text
429 Too Many Requests
```

---

### CT-031

Headers HTTP

Verificar:

```text
X-Frame-Options
Content-Security-Policy
X-Content-Type-Options
```

---

# 8. Testes de Performance

Ferramentas:

* k6
* JMeter

---

### CT-032

Carga leve

```text
50 usuários simultâneos
```

Esperado:

```text
< 2 segundos
```

---

### CT-033

Carga média

```text
200 usuários simultâneos
```

Esperado:

```text
Disponível
```

---

### CT-034

Stress

```text
500 usuários simultâneos
```

Esperado:

```text
Sem indisponibilidade crítica
```

---

# 9. Testes de Banco de Dados

---

### CT-035

Validar FK

Esperado:

```text
Não permitir jogador sem seleção
```

---

### CT-036

Validar unicidade

Esperado:

```text
Ano da Copa não duplicado
```

---

### CT-037

Validar seed

Esperado:

```text
10 Copas carregadas
```

---

# 10. Testes de Docker

---

### CT-038

Subir ambiente

Comando:

```bash
docker compose up -d
```

Esperado:

```text
Todos os containers ativos
```

---

### CT-039

Reiniciar ambiente

Esperado:

```text
Persistência do banco
```

---

### CT-040

Variáveis ausentes

Esperado:

```text
Falha controlada
```

---

# 11. Testes de Responsividade

Ferramentas:

* Playwright
* Chrome DevTools

---

### CT-041

Mobile

```text
375x667
```

---

### CT-042

Tablet

```text
768x1024
```

---

### CT-043

Desktop

```text
1920x1080
```

---

# 12. Testes de Acessibilidade

Ferramentas:

* axe-core
* Lighthouse

---

### CT-044

Navegação por teclado

Esperado:

```text
100% navegável
```

---

### CT-045

Contraste

Esperado:

```text
WCAG AA
```

---

### CT-046

Leitor de tela

Esperado:

```text
Elementos identificáveis
```

---

# 13. Critérios de Entrada

Para iniciar os testes:

* Ambiente disponível
* Banco configurado
* Dados seed carregados
* Build gerada
* APIs publicadas

---

# 14. Critérios de Saída

Para aprovação da release:

### Funcional

* 100% dos cenários críticos aprovados

### Qualidade

* Sem defeitos críticos
* Sem defeitos bloqueantes

### Cobertura

* Backend ≥ 80%
* Frontend ≥ 70%

### Performance

* APIs < 2 segundos

### Segurança

* Sem vulnerabilidades críticas

---

# 15. Matriz de Riscos

| Risco            | Impacto | Mitigação                |
| ---------------- | ------- | ------------------------ |
| Dados incorretos | Alto    | Revisão da seed          |
| APIs instáveis   | Alto    | Testes automatizados     |
| Falhas Docker    | Médio   | Testes de infraestrutura |
| Performance      | Médio   | Testes de carga          |
| Vulnerabilidades | Alto    | SAST + DAST              |

---

# 16. Entregáveis do QA

* Plano de Testes
* Casos de Teste
* Evidências
* Relatórios de Execução
* Relatório de Bugs
* Relatório Final de Homologação
* Dashboard de Cobertura
* Relatório de Performance

## Resumo Executivo

| Item                 |        Quantidade |
| -------------------- | ----------------: |
| Casos Funcionais     |                22 |
| Casos Negativos      |                 5 |
| Casos Segurança      |                 4 |
| Casos Performance    |                 3 |
| Casos Banco          |                 3 |
| Casos Docker         |                 3 |
| Casos Responsividade |                 3 |
| Casos Acessibilidade |                 3 |
| **Total**            | **46 Casos Base** |

A partir desses 46 casos base, é comum derivar entre **120 e 180 execuções de teste** considerando navegadores, dispositivos, ambientes e combinações de dados.
