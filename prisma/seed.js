import prisma from "../src/config/database.js";

async function main() {
  const professor = await prisma.user.create({
    data: {
      nome: "Professor Teste",
      email: "professor.teste@email.com",
      papel: "PROFESSOR",
    },
  });

  const materia = await prisma.subject.create({
    data: {
      nome: "Sistemas de Informação",
      professorId: professor.id,
    },
  });

  const questao = await prisma.question.create({
    data: {
      enunciado: "O que é um Sistema de Informação?",
      dificuldade: 1,
      respostaCorreta: "Um conjunto de recursos que coleta, processa e distribui informações.",
      subjectId: materia.id,
      authorId: professor.id,
    },
  });

  console.log("Professor criado:", professor);
  console.log("Matéria criada:", materia);
  console.log("Questão criada:", questao);
}

main()
  .catch((error) => {
    console.error("Erro ao criar dados:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });