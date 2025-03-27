# Desafio Follow CEP

Este repositório contém as aplicações back-end e front-end desenvolvidas para o desafio **Follow CEP**, que permite buscar informações de um CEP utilizando uma API externa e armazenar o histórico de buscas por usuário autenticado.

---

## Aplicação Backend

### Tecnologias Utilizadas:
- **Node.js**
- **Express**
- **Sequelize ORM**
- **PostgreSQL**
- **JWT (Autenticação)**
- **Docker/Docker Compose**
- **Axios**

### Passos para Rodar a Aplicação Back-end

1. Clone o repositório.
2. Entre na pasta `follow-back-end` e crie um arquivo `.env` com as variáveis necessárias com base no modelo .env.example.
3. Rode o comando `npm install` para instalar as dependências.
4. Com o Docker rodando, execute o comando `docker-compose up` para iniciar a aplicação.
5. A aplicação será inicializada. A porta padrão é a 3333.

---

## Aplicação Front-end

### Tecnologias Utilizadas:
- **React.js**
- **Vite**
- **TailwindCSS**
- **Axios**


### Passos para Rodar a Aplicação Front-end

1. Clone o repositório caso ainda não tenha sido feito.
2. Entre na pasta `follow-front-end` e execute o comando `npm install` para instalar as dependências.
3. Com o servidor back-end rodando, execute o comando `npm run dev` para executar a aplicação.

