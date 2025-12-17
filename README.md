# SRP x SVV | DROPS V3 - Tech Stack Guide

Este projeto é uma aplicação web interativa desenvolvida para o **Drops de Conhecimento V3**. O objetivo principal é destacar as diferenças, semelhanças e particularidades das tecnologias utilizadas nos projetos **SRP** e **SVV**, servindo como um guia técnico e de referência.

## 🎯 Sobre o Projeto

O "Drops V3" funciona como um blueprint arquitetural, explorando desde o backend e banco de dados até o frontend e infraestrutura.

### Tecnologias Abordadas no Conteúdo:
*   **Backend:** Entity Framework 6, Hangfire (Background Jobs), MediatR (Mediator Pattern), Bibliotecas de NFe/NFSe (Zeus/Tecnospeed).
*   **Banco de Dados:** SQL Server, SQL Ledger (Blockchain/Imutabilidade), Stored Procedures, Views.
*   **Frontend:** PrimeNG (Contexto Angular), Design System.
*   **Infraestrutura:** IIS (Internet Information Services), Windows Task Scheduler.

## 🛠️ Stack Tecnológica (Desta Aplicação)

Esta aplicação de apresentação foi construída utilizando tecnologias modernas:

*   **React 19**
*   **TypeScript**
*   **Vite**
*   **TailwindCSS**
*   **Express** (Servidor simples para deploy/produção)

## 🚀 Como Executar

### Pré-requisitos
*   Node.js (versão recente recomendada)
*   pnpm (ou npm)

### Instalação

```bash
# Instalar dependências
npm install
# ou
pnpm install
```

### Desenvolvimento

Para rodar o projeto em modo de desenvolvimento com Hot Reload:

```bash
npm run dev
# ou
pnpm dev
```

O servidor estará rodando geralmente em `http://localhost:3000`.

### Build e Produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Para rodar o servidor de produção (Express) servindo os arquivos estáticos:

```bash
npm start
```

## 👥 Créditos

Criado por **Taíssa e Natan** para o Drops de Conhecimento.
