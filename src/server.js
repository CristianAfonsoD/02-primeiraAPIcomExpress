import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para parsing JSON
app.use(express.json());

// Rota de health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Minha primeira API com Express funcionando!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// Rota básica para usuários
app.get('/users', (req, res) => {
  const usuarios = [
    {
      id: 1,
      nome: 'Prof. Maria Silva',
      email: 'maria@escola.com',
      papel: 'PROFESSOR',
      dataCriacao: '2024-01-15T10:00:00Z',
    },
    {
      id: 2,
      nome: 'Admin João',
      email: 'joao@escola.com',
      papel: 'ADMIN',
      dataCriacao: '2024-01-10T08:30:00Z',
    },
  ];

  res.status(200).json(usuarios);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
