# API de Cursos

Uma API REST moderna para gerenciamento de cursos, construída com Node.js, Fastify, TypeScript e PostgreSQL.

## 🚀 Tecnologias

- **Node.js 22** - Runtime JavaScript
- **Fastify** - Framework web rápido e eficiente
- **TypeScript** - Tipagem estática
- **PostgreSQL** - Banco de dados relacional
- **Drizzle ORM** - ORM type-safe para TypeScript
- **Zod** - Validação de schemas
- **JWT** - Autenticação
- **Argon2** - Hash de senhas
- **Vitest** - Framework de testes
- **Docker** - Containerização

## 📋 Funcionalidades

- ✅ Autenticação com JWT
- ✅ Sistema de roles (estudante/gerente)
- ✅ CRUD de cursos
- ✅ Sistema de matrículas
- ✅ Documentação automática da API (Swagger/Scalar)
- ✅ Testes automatizados
- ✅ Containerização com Docker
- ✅ Validação de dados com Zod

## 🏗️ Estrutura do Projeto

```
src/
├── routes/           # Rotas da API
├── database/         # Configuração do banco
├── utils/            # Utilitários
├── @types/           # Definições de tipos
└── tests/            # Testes
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 22+
- PostgreSQL
- npm

### Configuração

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
NODE_ENV="development"
DATABASE_URL="postgres://postgres:postgres@localhost:5432/db"
JWT_SECRET="seu-jwt-secret-aqui"
```

4. Configure o banco de dados:

```bash
# Gerar migrações
npm run db:generate

# Executar migrações
npm run db:migrate

# Popular o banco com dados de exemplo
npm run db:seed
```

## 🚀 Executando o Projeto

### Desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3333`

### Documentação da API

Acesse `http://localhost:3333/docs` para visualizar a documentação interativa da API.

## 🐳 Docker

### Build da imagem

```bash
docker build -t api-cursos .
```

### Executar com Docker Compose

```bash
docker-compose up
```

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Executar testes com coverage
npm test --coverage
```

## 📊 Banco de Dados

### Schema

- **users**: Usuários do sistema

  - `id` (UUID)
  - `name` (text)
  - `email` (text, único)
  - `password` (text, hasheada)
  - `role` (enum: 'student' | 'manager')

- **courses**: Cursos disponíveis

  - `id` (UUID)
  - `title` (text, único)
  - `description` (text)

- **enrollments**: Matrículas de usuários em cursos
  - `id` (UUID)
  - `userId` (UUID, FK para users)
  - `courseId` (UUID, FK para courses)
  - `createdAt` (timestamp)

### Comandos do Banco

```bash
# Gerar migrações
npm run db:generate

# Executar migrações
npm run db:migrate

# Abrir Drizzle Studio (interface visual)
npm run db:studio

# Popular banco com dados de exemplo
npm run db:seed
```

## 🔐 Autenticação

A API utiliza JWT para autenticação. Para acessar rotas protegidas:

1. Faça login via `POST /login`
2. Use o token retornado no header `Authorization: Bearer <token>`

### Roles

- **student**: Pode visualizar cursos e se matricular
- **manager**: Pode criar, editar e gerenciar cursos

## 📝 Endpoints Principais

- `POST /login` - Autenticação
- `GET /courses` - Listar cursos
- `GET /courses/:id` - Buscar curso por ID
- `POST /courses` - Criar curso (apenas managers)
- `POST /enrollments` - Matricular em curso

## 🛡️ Segurança

- Senhas hasheadas com Argon2
- Validação de dados com Zod
- Autenticação JWT
- Rate limiting (configurável)
- CORS configurado

## 📈 Performance

- Fastify para alta performance
- Queries otimizadas com Drizzle ORM
- Logs estruturados com Pino
- Cache de validações

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
