# Projeto: Portal Oficial do Calendário da Copa do Mundo FIFA 2026

Desenvolva uma página web moderna, elegante e totalmente responsiva inspirada na Copa do Mundo FIFA 2026. O objetivo é criar uma experiência semelhante a um portal esportivo profissional, com visual premium, excelente usabilidade, acessibilidade e alto desempenho.

## Diretrizes de Design

* Utilizar identidade visual inspirada no futebol e na Copa do Mundo 2026.
* Design moderno com gradientes, efeitos glassmorphism e animações suaves.
* Paleta de cores vibrante com destaque para verde, azul, dourado e branco.
* Layout elegante e intuitivo para desktop, tablet e dispositivos móveis.
* Ícones modernos e elementos visuais esportivos.
* Tipografia limpa e profissional.
* Implementar modo Claro/Escuro com alternância dinâmica.

---

## Estrutura da Página

### 1. Cabeçalho (Header)

* Logo ou ícone da Copa do Mundo 2026.
* Título principal:
  **"Calendário da Copa do Mundo FIFA 2026"**
* Menu de navegação suave para:

  * Início
  * Jogos
  * Classificação
  * Estatísticas
  * Sedes

---

### 2. Banner Principal (Hero Section)

Exibir:

* Imagem temática de futebol em tela cheia.
* Sobreposição com efeito de gradiente.
* Texto de destaque:
  **"Acompanhe todos os jogos da Copa do Mundo 2026"**
* Botão de ação:
  **"Ver Calendário"**

---

### 3. Contadores Regressivos

Criar dois cards de destaque:

#### Abertura do Mundial

Exibir:

* Dias
* Horas
* Minutos
* Segundos

#### Final da Copa

Exibir:

* Dias
* Horas
* Minutos
* Segundos

Atualização em tempo real usando JavaScript.

---

### 4. Sistema de Filtros

Adicionar:

* Filtro por fase da competição:

  * Fase de Grupos
  * 16 Avos de Final
  * Oitavas de Final
  * Quartas de Final
  * Semifinais
  * Disputa do 3º Lugar
  * Final

* Filtro por seleção.

* Filtro por cidade-sede.

* Campo de pesquisa instantânea.

Os resultados devem ser atualizados sem recarregar a página.

---

### 5. Calendário de Jogos

Exibir todos os jogos em formato de cards modernos.

Cada card deve conter:

* Data
* Horário
* Seleção mandante
* Seleção visitante
* Bandeiras das seleções
* Estádio
* Cidade-sede
* Fase da competição

Recursos visuais:

* Hover animado.
* Sombras suaves.
* Destaque especial para jogos do dia.
* Badge identificando a fase do torneio.

---

### 6. Dados dos Jogos

Armazenar todos os jogos em um arquivo JSON estruturado.

Exemplo:

```json
{
  "fase": "Fase de Grupos",
  "data": "2026-06-11",
  "hora": "21:00",
  "timeA": "Brasil",
  "timeB": "França",
  "estadio": "MetLife Stadium",
  "cidade": "New York"
}
```

Carregar os dados dinamicamente utilizando JavaScript.

---

### 7. Tabela de Classificação

Criar tabela responsiva para a fase de grupos.

Exibir:

* Posição
* Seleção
* Jogos
* Vitórias
* Empates
* Derrotas
* Gols Pró
* Gols Contra
* Saldo
* Pontos

Adicionar ordenação dinâmica.

---

### 8. Estatísticas

Exibir cards com:

* Total de jogos
* Total de gols
* Média de gols
* Seleção com mais gols
* Artilheiro do torneio

---

### 9. Seção das Cidades-Sede

Apresentar:

* Nome da cidade
* País
* Estádio
* Capacidade
* Imagem da sede

Utilizar layout em cards.

---

### 10. Rodapé

Exibir:

* Informações sobre a Copa do Mundo FIFA 2026.
* Direitos autorais.
* Links para redes sociais.
* Créditos do projeto.

---

## Requisitos Técnicos

### Tecnologias

* HTML5
* CSS3
* JavaScript Vanilla

### Boas Práticas

* Código modular e organizado.
* Comentários explicativos.
* Estrutura semântica.
* SEO básico.
* Acessibilidade (WCAG).
* Lazy Loading para imagens.
* Performance otimizada.

### Recursos Visuais

* Animações CSS suaves.
* Transições modernas.
* Efeitos de vidro (Glassmorphism).
* Gradientes elegantes.
* Cards interativos.

### Responsividade

Garantir perfeita adaptação para:

* Desktop
* Notebook
* Tablet
* Smartphone

### Extras Desejáveis

* Persistência do modo escuro usando LocalStorage.
* Botão "Voltar ao topo".
* Animações ao rolar a página.
* Atualização automática dos contadores regressivos.
* Possibilidade futura de integração com API de resultados ao vivo.

## Resultado Esperado

A página deve se parecer com um portal esportivo premium, semelhante aos grandes sites de cobertura de eventos esportivos internacionais, oferecendo uma experiência moderna, elegante, rápida e intuitiva para acompanhar a Copa do Mundo FIFA 2026.
