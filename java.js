// Definindo o array de perguntas
const questions = [
    {
        question: "Acredita no uso da Força para bem?",
        answers: {
            yes: { obiWan: 1, darthVader: 0 },
            no: { obiWan: 0, darthVader: 1 }
        }
    },
    {
        question: "Prefere o lado da Luz?",
        answers: {
            yes: { obiWan: 1, darthVader: 0 },
            no: { obiWan: 0, darthVader: 1 }
        }
    },
    {
        question: "Considera-se um líder natural?",
        answers: {
            yes: { obiWan: 1, darthVader: 0 },
            no: { obiWan: 0, darthVader: 1 }
        }
    },
    {
        question: "Gosta de seguir regras e tradições?",
        answers: {
            yes: { obiWan: 1, darthVader: 0 },
            no: { obiWan: 0, darthVader: 1 }
        }
    },
    {
        question: "Já se sentiu traído por alguém próximo?",
        answers: {
            yes: { obiWan: 0, darthVader: 1 },
            no: { obiWan: 1, darthVader: 0 }
        }
    },
    {
        question: "Se considera uma pessoa calma?",
        answers: {
            yes: { obiWan: 1, darthVader: 0 },
            no: { obiWan: 0, darthVader: 1 }
        }
    },
    {
        question: "Já teve pensamentos de vingança?",
        answers: {
            yes: { obiWan: 0, darthVader: 1 },
            no: { obiWan: 1, darthVader: 0 }
        }
    },
    {
        question: "Valoriza a amizade acima de tudo?",
        answers: {
            yes: { obiWan: 1, darthVader: 0 },
            no: { obiWan: 0, darthVader: 1 }
        }
    },
    {
        question: "Prefere resolver conflitos com diálogo?",
        answers: {
            yes: { obiWan: 1, darthVader: 0 },
            no: { obiWan: 0, darthVader: 1 }
        }
    },
    {
        question: "Acha que o poder é tudo?",
        answers: {
            yes: { obiWan: 0, darthVader: 1 },
            no: { obiWan: 1, darthVader: 0 }
        }
    },
];

// Variáveis para armazenar a pontuação
let obiWanScore = 0;
let darthVaderScore = 0;
let currentQuestionIndex = 0; // Para rastrear a pergunta atual

// Função para iniciar o questionário
function startQuiz() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const quizScreen = document.getElementById('quiz-screen');
    welcomeScreen.style.display = 'none';
    quizScreen.style.display = 'flex';
    loadQuestion(currentQuestionIndex);
}

// Função para carregar a pergunta
function loadQuestion(index) {
    const questionTitle = document.getElementById('question-title');
    const quizForm = document.getElementById('quiz-form');
    quizForm.innerHTML = '';

    if (index < questions.length) {
        questionTitle.innerText = questions[index].question;

        // Criar as opções de resposta
        const yesOption = document.createElement('label');
        yesOption.innerHTML = `<input type="radio" name="answer" value="yes" onchange="updateScore(${index})"> Sim`;
        yesOption.style.display = 'block'; // Para garantir que fiquem em linhas separadas

        const noOption = document.createElement('label');
        noOption.innerHTML = `<input type="radio" name="answer" value="no" onchange="updateScore(${index})"> Não`;
        noOption.style.display = 'block'; // Para garantir que fiquem em linhas separadas

        quizForm.appendChild(yesOption);
        quizForm.appendChild(noOption);
    } else {
        showResult();
    }
}

// Função para atualizar a pontuação e habilitar o botão "Próximo"
function updateScore(index) {
    const answer = document.querySelector('input[name="answer"]:checked').value;
    const currentQuestion = questions[index];

    if (answer === 'yes') {
        obiWanScore += currentQuestion.answers.yes.obiWan;
        darthVaderScore += currentQuestion.answers.yes.darthVader;
    } else {
        obiWanScore += currentQuestion.answers.no.obiWan;
        darthVaderScore += currentQuestion.answers.no.darthVader;
    }

    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = false; // Habilita o botão Próxima
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++; // Avança para a próxima pergunta
    loadQuestion(currentQuestionIndex);
}

// Função para mostrar o resultado
function showResult() {
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'flex';

    const resultName = document.getElementById('result-name');
    const resultDescription = document.getElementById('result-description');
    const resultImg = document.getElementById('result-img');
    
    if (obiWanScore > darthVaderScore) {
        resultName.innerText = "Obi-Wan Kenobi";
        resultDescription.innerText = "O mestre Jedi sábio e paciente.";
        resultImg.src = "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"; // URL da imagem do Obi-Wan
    } else {
        resultName.innerText = "Darth Vader";
        resultDescription.innerText = "O poderoso Sith com um passado trágico.";
        resultImg.src = "https://pngimg.com/uploads/darth_vader/darth_vader_PNG21.png"; //URL da imagem do Darth Vader

    }
    

    const resultScore = document.getElementById('result-score');
    resultScore.innerText = `Obi-Wan: ${obiWanScore} | Darth Vader: ${darthVaderScore}`;
}

// Função para reiniciar o quiz
function resetQuiz() {
    obiWanScore = 0;
    darthVaderScore = 0;
    currentQuestionIndex = 0; // Reinicia o índice da pergunta

    const resultScreen = document.getElementById('result-screen');
    resultScreen.style.display = 'none';

    const welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.style.display = 'flex'; // Mostra a tela de boas-vindas
}

// Adiciona o evento de clique no botão "Próximo"
document.getElementById('next-btn').addEventListener('click', nextQuestion);

// Adiciona o evento de clique no botão Iniciar
document.getElementById('start-btn').addEventListener('click', startQuiz);

// Adiciona o evento de clique no botão "Tentar novamente"
document.getElementById('reset-btn').addEventListener('click', resetQuiz);
