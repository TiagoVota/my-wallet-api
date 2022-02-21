# 💸 My Wallet API
## 🚀 Descrição do Projeto
Cansado de se enrolar com as compras ao final do mês? Então My Wallet é a solução perfeita para os seus problemas! Com ele você terá todos os seus gastos e ganhos na ponta de seus dedos de forma rápida, prática e perfeita para manter sua vida financeira organizada!

<br/>


## 🔍 Sobre
Com My Wallet API, você poderá fazer cadastro e login de usuários; criar entradas/saídas de dinheiro além de poder editá-las ou removê-las; mostrar todas as transações para o usuário e deixá-lo fazer o logout de sua conta! Com está API podemos encontrar as seguintes funcionalidades:

### Features
- [x] [`Verificar se o server está funcionando`](get-health)
- [x] [`Realizar cadastro`](#post-authlogin)
- [x] [`Fazer login`](#post-authsign-up)
- [x] [`Adicionar entrada/saída de dinheiro`](#get-transactions)
- [x] [`Modificar entrada/saída de dinheiro`](#post-transactions)
- [x] [`Remover entrada/saída de dinheiro`](#put-transactionstransactionid)
- [x] [`Visualizar todas suas transações e saldo total`](#delete-transactionstransactionid)
- [x] [`Fazer logout sua conta`](#delete-authlogout)

<br/>


## ✔️ Tabela de conteúdo
<!--ts-->
- [💸 My Wallet API](#-my-wallet-api)
	- [🚀 Descrição do Projeto](#-descrição-do-projeto)
	- [🔍 Sobre](#-sobre)
		- [Features](#features)
	- [✔️ Tabela de conteúdo](#️-tabela-de-conteúdo)
	- [🖥 Tecnologias](#-tecnologias)
	- [⚙️ Como usar](#️-como-usar)
		- [Instalando o app](#instalando-o-app)
		- [Instalando a API](#instalando-a-api)
		- [Iniciando o servidor](#iniciando-o-servidor)
		- [Preparando setup](#preparando-setup)
		- [Inicializando a API](#inicializando-a-api)
	- [📜 Documentação](#-documentação)
		- [`GET /health`](#get-health)
		- [`POST /auth/login`](#post-authlogin)
		- [`POST /auth/sign-up`](#post-authsign-up)
		- [`GET /transactions`](#get-transactions)
		- [`POST /transactions`](#post-transactions)
		- [`PUT /transactions/:transactionId`](#put-transactionstransactionid)
		- [`DELETE /transactions/:transactionId`](#delete-transactionstransactionid)
		- [`DELETE /auth/logout`](#delete-authlogout)
	- [👨🏼‍💻 Autores](#-autores)
<!--te-->

<br/>


## 🖥 Tecnologias
<p align="center">
	<img alt="mongodb" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img alt="nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img alt="npm" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
  <img alt="expressjs" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img alt="eslinter" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>
</p>

<br/>


## ⚙️ Como usar

Para utilizar essa API, será necessário ter nas suas máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [MongoDB](https://www.mongodb.com/).
Além disso recomendo fortemente a utilização de um bom ter um editor de código, como o [VSCode](https://code.visualstudio.com/)!


### Instalando o app
Seguir os passos descritos na seção de [instalação do app](https://github.com/TiagoVota/my-wallet/blob/main/README.md).

### Instalando a API
```bash

# Clone este repositório
$ git clone https://github.com/TiagoVota/my-Wallet-api

# Acesse a pasta do projeto no terminal/cmd
$ cd my-wallet-api

# Instale as dependências
$ npm install

```

### Iniciando o servidor

```bash

# Enquanto estiver utilizando o MongoDB, seu servidor deve estar funcionando
mongod --dbpath ~/.mongo

# Esse comando deverá ser feito toda vez que quiser rodar o servidor do mongoDB

```

### Preparando setup
Na pasta principal da API, crie um arquivo `.env.dev` aos mesmos moldes do arquivo [`.env.example`](https://github.com/TiagoVota/my-wallet-api/blob/main/.env.example).

### Inicializando a API
```bash

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev

# O servidor inciará na porta:PORT (escolhida no arquivo .env) - acesse http://localhost:PORT 

```

<br/>


## 📜 Documentação
Agora veremos quais os principais end points dessa aplicação

### `GET /health`

### `POST /auth/login`

### `POST /auth/sign-up`

### `GET /transactions`

### `POST /transactions`

### `PUT /transactions/:transactionId`

### `DELETE /transactions/:transactionId`

### `DELETE /auth/logout`

<br/>


## 👨🏼‍💻 Autores

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/56308226?v=4" width="100px;" alt="Foto de perfil Tiago Vota Cucco"/>

Feito por Tiago Vota Cucco. Entre em contato comigo!

[![Gmail Badge](https://img.shields.io/badge/-tiagovotacucco@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:tiagovotacucco@gmail.com)](mailto:tiagovotacucco@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-Tiago-Vota?style=flat&logo=Linkedin&logoColor=white&color=blue&link=https://www.linkedin.com/in/tiago-vota-cucco-394916204)](https://www.linkedin.com/in/tiago-vota-cucco-394916204) 

<br/><br/>
