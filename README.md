# Sistema de Processos Judiciais

Projeto fullstack para cadastro e gerenciamento de processos judiciais, desenvolvido como teste técnico utilizando React, Laravel e Docker.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React (Vite)
- JavaScript
- Fetch API

### Backend
- Laravel 13
- PHP 8.4
- API REST

### Banco de Dados
- MySQL 8

### Infraestrutura
- Docker
- Docker Compose

---

## 🧠 Regras de Negócio

1) Ao cadastrar um processo:
  - Se a UF for **MG**, exibir:  
    "Processo de MG criado com sucesso"
  - Caso contrário:  
    "Processo fora de MG criado com sucesso"

2) Cada processo pode possuir múltiplos andamentos
3) Andamentos são vinculados ao processo (relação 1:N)
4) Ao excluir um processo, seus andamentos são removidos automaticamente (cascade delete)

---



## 🚀 Como rodar o projeto

1. Subir os containers:
docker compose up -d --build

2. instalar dependências do Laravel 
docker compose run --rm backend composer install

3. rodar migrations
docker compose exec backend php artisan migrate



🌐 Acessos
Frontend: http://localhost:5173
Backend API: http://localhost:8000/api/processos
Banco de dados: MySQL (Docker)

O projeto foi desenvolvido com foco em integração entre frontend, backend e infraestrutura containerizada utilizando Docker.

Autor: Davi Andrade da Silva
