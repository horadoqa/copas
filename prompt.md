# **Versão do prompt:**

Crie uma aplicação full stack completa contendo Frontend, Backend e Banco de Dados, totalmente containerizada com Docker e Docker Compose.

## Objetivo
Desenvolver um sistema que exiba informações das últimas 10 edições da Copa do Mundo FIFA, incluindo:
* Ano da competição.
* País-sede.
* Seleção campeã.
* Técnico da seleção campeã.
* Elenco completo dos jogadores da seleção campeã.
* Posição dos jogadores (goleiro, defensor, meio-campista e atacante).
* Capitão da equipe.
* Resultado da final.
* Seleção vice-campeã.

## Requisitos de Arquitetura
**Frontend**
* Desenvolvido em React com TypeScript.
* Interface moderna e responsiva.
* Listagem das 10 Copas do Mundo.
* Página de detalhes de cada edição.
* Busca por ano, país-sede ou seleção campeã.
* Tabelas e cartões para exibição dos dados.
* Loading, tratamento de erros e estado vazio.
**Backend**
* Desenvolvido em Node.js com Express e TypeScript.
* Arquitetura em camadas (Controller, Service, Repository).
* API REST documentada com Swagger/OpenAPI.
* Endpoints para:
  * Listar todas as Copas.
  * Consultar Copa por ano.
  * Consultar seleção campeã.
  * Consultar jogadores de uma seleção campeã.
* Validação de dados.
* Tratamento centralizado de exceções.
* Logs estruturados.
**Banco de Dados**
* PostgreSQL.
* Modelagem relacional normalizada.
* Tabelas para:
  * WorldCups
  * Countries
  * Teams
  * Players
  * Coaches
  * Finals
* Scripts de criação e população inicial (seed) com dados reais das últimas 10 Copas do Mundo.

## Docker
* Criar Dockerfile para Frontend.
* Criar Dockerfile para Backend.
* Utilizar PostgreSQL em container.
* Criar docker-compose.yml para subir toda a solução com um único comando.
* Configurar variáveis de ambiente via .env.

## Qualidade e Boas Práticas
* TypeScript em todo o projeto.
* ESLint e Prettier configurados.
* Separação clara de responsabilidades.
* README completo com instruções de execução.
* Testes unitários para regras de negócio.
* Estrutura de diretórios organizada.

## Entregáveis
Forneça:
1. Estrutura completa de pastas.
2. Código-fonte do Frontend.
3. Código-fonte do Backend.
4. Scripts SQL de criação e carga inicial dos dados.
5. Dockerfiles.
6. docker-compose.yml.
7. Arquivo .env.example.
8. Documentação da API.
9. README com instruções para executar o sistema localmente.

O resultado deve ser um projeto pronto para execução com o comando:
```bash
docker compose up -d
```
e acessível via navegador, consumindo a API e exibindo corretamente os dados das últimas 10 Copas do Mundo e dos jogadores das seleções campeãs.
