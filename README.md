# ⚖️ Sistema de Processos

Sistema fullstack para gerenciamento de processos e andamentos.

## 🚀 Tecnologias utilizadas

- **Frontend:** React + Axios
- **Backend:** Laravel
- **Banco de dados:** MySQL

---

## 📋 Funcionalidades

- Cadastro de processos
- Edição e exclusão de processos
- Listagem de processos
- Gerenciamento de andamentos
- Validação de campos no frontend
- API RESTful

---

## 📁 Estrutura do projeto
sistema-processos/
backend/ -> API desenvolvida em Laravel
frontend/ -> Aplicação React


---

## 🔌 Como rodar o projeto

### 🔹 Backend (Laravel)


cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve

🔹 Frontend (React)
cd frontend
npm install
npm run dev


🌐 Endpoints da API
Processos
GET /api/processos → Lista todos os processos
POST /api/processos → Cria um novo processo
PUT /api/processos/{id} → Atualiza um processo
DELETE /api/processos/{id} → Remove um processo
Andamentos
GET /api/andamentos → Lista todos os andamentos
POST /api/andamentos → Cria um andamento
PUT /api/andamentos/{id} → Atualiza um andamento
DELETE /api/andamentos/{id} → Remove um andamento


📌 Regra de negócio
Ao criar um processo com UF igual a MG, a API retorna uma mensagem personalizada:
{
  "msg": "Processo de MG criado com sucesso"
}


🧠 Boas práticas aplicadas
Separação clara entre frontend e backend
Uso de API RESTful
Componentização no React
Gerenciamento de estado com hooks
Organização de código
Validações no frontend
📝 Observações
Projeto desenvolvido para fins de avaliação técnica
Foco em clareza, organização e funcionamento completo do sistema

👨‍💻 Autor
Davi Andrade da Silva
