# 🏆 World Cup Champions Explorer

Aplicação Full Stack para consulta das últimas 10 edições da Copa do Mundo FIFA, permitindo visualizar informações detalhadas sobre cada torneio, países-sede, seleções campeãs, técnicos e elenco completo dos times campeões.

---

# 📋 Visão Geral

O sistema é composto por:

* **Frontend:** React + TypeScript
* **Backend:** Node.js + Express + TypeScript
* **Banco de Dados:** PostgreSQL
* **Containerização:** Docker e Docker Compose
* **Documentação da API:** Swagger/OpenAPI

A aplicação permite:

* Listar as últimas 10 Copas do Mundo.
* Visualizar detalhes de cada edição.
* Consultar seleções campeãs.
* Exibir técnicos e jogadores das equipes campeãs.
* Pesquisar por ano, país-sede ou seleção campeã.

---

# 🏗 Arquitetura

```text
world-cup-explorer/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── database/
│   │   └── app.ts
│   │
│   ├── tests/
│   ├── Dockerfile
│   └── package.json
│
├── database/
│   ├── schema.sql
│   ├── seed.sql
│   └── migrations/
│
├── docker-compose.yml
├── .env.example
└── README.md
```

---

# 🚀 Tecnologias Utilizadas

## Frontend

* React
* TypeScript
* React Router
* Axios
* Material UI ou Tailwind CSS
* React Query

## Backend

* Node.js
* Express
* TypeScript
* Prisma ORM
* Swagger
* Jest

## Banco de Dados

* PostgreSQL

## DevOps

* Docker
* Docker Compose

---

# 📦 Funcionalidades

## Copas do Mundo

Exibição das últimas 10 edições contendo:

* Ano
* País-sede
* Seleção campeã
* Seleção vice-campeã
* Resultado da final

## Seleções Campeãs

Informações detalhadas:

* Nome da seleção
* Técnico
* Capitão
* Quantidade de títulos

## Jogadores

Listagem completa do elenco campeão:

* Nome
* Número da camisa
* Posição
* Data de nascimento

## Pesquisa

Filtro por:

* Ano
* País-sede
* Seleção campeã

---

# 🗄 Modelo de Dados

## Countries

```sql
id
name
continent
```

## WorldCups

```sql
id
year
host_country_id
champion_team_id
runner_up_team_id
final_score
```

## Coaches

```sql
id
name
nationality
```

## Teams

```sql
id
name
country_id
coach_id
captain_player_id
```

## Players

```sql
id
name
position
shirt_number
birth_date
team_id
```

---

# 🔌 API REST

## Base URL

```text
http://localhost:3000/api
```

---

## Listar todas as Copas

```http
GET /world-cups
```

### Exemplo de resposta

```json
[
  {
    "year": 2022,
    "hostCountry": "Qatar",
    "champion": "Argentina"
  }
]
```

---

## Buscar Copa por Ano

```http
GET /world-cups/:year
```

### Exemplo

```http
GET /world-cups/2022
```

---

## Buscar Seleção Campeã

```http
GET /champions/:team
```

### Exemplo

```http
GET /champions/Argentina
```

---

## Listar Jogadores da Seleção Campeã

```http
GET /champions/:team/players
```

### Exemplo

```http
GET /champions/Argentina/players
```

---

# 📚 Swagger

Após iniciar a aplicação:

```text
http://localhost:3000/docs
```

A documentação interativa estará disponível via Swagger UI.

---

# ⚙️ Configuração do Ambiente

## Pré-requisitos

Instale:

* Docker
* Docker Compose

Verifique:

```bash
docker --version
docker compose version
```

---

# 🔐 Variáveis de Ambiente

Crie um arquivo `.env` baseado em:

```env
# PostgreSQL
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=worldcup

# Backend
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@db:5432/worldcup

# Frontend
VITE_API_URL=http://localhost:3000/api
```

---

# 🐳 Executando com Docker

## Construir os containers

```bash
docker compose build
```

## Iniciar aplicação

```bash
docker compose up -d
```

## Visualizar logs

```bash
docker compose logs -f
```

## Encerrar aplicação

```bash
docker compose down
```

---

# 🌐 URLs da Aplicação

## Frontend

```text
http://localhost:5173
```

## Backend

```text
http://localhost:3000
```

## Swagger

```text
http://localhost:3000/docs
```

## PostgreSQL

```text
localhost:5432
```

---

# 🧪 Testes

## Backend

Executar testes unitários:

```bash
cd backend

npm test
```

Executar cobertura:

```bash
npm run test:coverage
```

---

# 📊 Dados Utilizados

A base inicial contém informações das últimas 10 Copas do Mundo FIFA:

| Ano  | Campeão            |
| ---- | ------------------ |
| 2022 | Argentina          |
| 2018 | França             |
| 2014 | Alemanha           |
| 2010 | Espanha            |
| 2006 | Itália             |
| 2002 | Brasil             |
| 1998 | França             |
| 1994 | Brasil             |
| 1990 | Alemanha Ocidental |
| 1986 | Argentina          |

Além dos respectivos:

* Técnicos
* Capitães
* Elencos campeões
* Países-sede
* Resultados das finais

---

# 📈 Possíveis Melhorias Futuras

* Histórico completo de todas as Copas do Mundo.
* Estatísticas individuais dos jogadores.
* Comparação entre seleções campeãs.
* Dashboard analítico.
* Gráficos interativos.
* Autenticação e autorização.
* Cache com Redis.
* Integração com APIs esportivas externas.

---

# 🤝 Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:

```bash
git checkout -b feature/minha-feature
```

3. Commit suas alterações:

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

4. Envie para o repositório remoto:

```bash
git push origin feature/minha-feature
```

5. Abra um Pull Request.

---

# 📄 Licença

Este projeto está licenciado sob a licença MIT.

---

# 👨‍💻 Autor

Projeto desenvolvido como demonstração de uma arquitetura Full Stack moderna utilizando React, Node.js, PostgreSQL e Docker.
