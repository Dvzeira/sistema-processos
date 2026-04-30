# 🏛️ Sistema de Processos Judiciais

Sistema fullstack para cadastro e gerenciamento de processos judiciais, desenvolvido como teste técnico utilizando **React, Laravel e Docker**.

---

## 🚀 Visão Geral

O sistema permite o cadastro e gerenciamento de processos judiciais com regras de negócio específicas e controle de andamentos vinculados a cada processo.

---

## 🧠 Regras de Negócio

- Ao cadastrar um processo:
  - Se a UF for **MG** → mensagem:  
    "Processo de MG criado com sucesso"
  - Caso contrário →  
    "Processo fora de MG criado com sucesso"

- Cada processo pode possuir múltiplos andamentos
- Andamentos pertencem a um processo (relação 1:N)
- Ao excluir um processo, seus andamentos são removidos automaticamente (cascade)

---

## 🛠️ Tecnologias

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

## 🐳 Como executar o projeto

### 1. Clonar o repositório

```bash id="clone1"
git clone https://github.com/Dvzeira/sistema-processos.git
cd sistema-processos
2. Subir os containers
docker compose up -d --build
3. Rodar migrations
docker exec -it laravel_app php artisan migrate
🌐 Acessos
Frontend: http://localhost:5173
Backend API: http://localhost:8000/api/processos
Banco de dados: MySQL (Docker container)
📂 Estrutura do Projeto
sistema-processos/
│
├── backend/        # Laravel API
├── frontend/       # React App
├── docker-compose.yml
├── README.md
⚙️ Funcionalidades
Processos
Criar processo
Listar processos
Editar processo
Excluir processo
Andamentos
Adicionar andamento
Listar andamentos
Remover automaticamente ao excluir processo
🧪 Status do Projeto

✔ Backend funcional
✔ Frontend funcional
✔ Banco de dados integrado
✔ Docker configurado
✔ API REST funcionando
✔ Regras de negócio implementadas

👨‍💻 Autor

Desenvolvido por Davi Andrade

Projeto desenvolvido para avaliação técnica fullstack (React + Laravel + Docker).

📌 Observação

Projeto construído com foco em boas práticas de integração entre frontend, backend e containerização.