const characters = {
    luke: {
        name: 'Luke Skywalker',
        description: 'Você é Luke Skywalker, um herói Jedi e salvador da galáxia.',
        img: 'images/luke.png',
        side: 'light', 
        score: 0
    },
    vader: {
        name: 'Darth Vader',
        description: 'Você é Darth Vader, o Sith mais temido da galáxia.',
        img: 'images/darth.png',
        side: 'dark',
        score: 0
    },
    obiwan: {
        name: 'Obi-Wan Kenobi',
        description: 'Você é Obi-Wan Kenobi, um sábio mestre Jedi.',
        img: 'images/Obi-Wan.png',
        side: 'light', 
        score: 0
    },
    yoda: {
        name: 'Yoda',
        description: 'Você é Yoda, o mais sábio dos Jedi.',
        img: 'images/yoda.png',
        side: 'light', 
        score: 0
    },
    anakin: {
        name: 'Anakin Skywalker',
        description: 'Você é Anakin Skywalker, um Jedi poderoso com um destino trágico.',
        img: 'images/Ani.png',
        side: 'light', 
        score: 0
    },
    ahsoka: {
        name: 'Ahsoka Tano',
        description: 'Você é Ahsoka Tano, uma Jedi independente e resiliente.',
        img: 'images/Ahsoka.png',
        side: 'light', 
        score: 0
    },
    mace: {
        name: 'Mace Windu',
        description: 'Você é Mace Windu, um dos Jedi mais fortes e líderes do Conselho Jedi.',
        img: 'images/Mace.png',
        side: 'light', 
        score: 0
    },
    leia: {
        name: 'Leia Organa',
        description: 'Você é Leia Organa, uma líder rebelde e destemida.',
        img: 'images/Leia.png',
        side: 'light', 
        score: 0
    },
    palpatine: {
        name: 'Palpatine',
        description: 'Você é Palpatine, o Imperador da Galáxia e Lorde Sith.',
        img: 'images/Palpatine.png',
        side: 'dark', 
        score: 0
    },
    maul: {
        name: 'Darth Maul',
        description: 'Você é Darth Maul, um guerreiro Sith implacável.',
        img: 'images/Darth-Maul.png',
        side: 'dark',   
        score: 0
    },
    grievous: {
        name: 'General Grievous',
        description: 'Você é General Grievous, um temido líder militar e caçador de Jedi.',
        img: 'images/Grievous.png',
        side: 'dark', 
        score: 0
    },
    dooku: {
        name: 'Conde Dookan',
        description: 'Você é Conde Dookan, um Jedi que virou Sith por ambição.',
        img: 'images/Dookan.png',
        side: 'dark', 
        score: 0
    }
};


const questions = [
    {
        question: "Qual é o seu passatempo favorito?",
        options: [
            { text: "Treinar com sabre de luz", scores: { luke: 3, vader: 1, obiwan: 3, yoda: 2, anakin: 2, ahsoka: 3, mace: 3, leia: 1, palpatine: 0, maul: 1, grievous: 1, dooku: 2 } },
            { text: "Comandar um exército imperial", scores: { luke: 0, vader: 3, obiwan: 0, yoda: 0, anakin: 2, ahsoka: 0, mace: 0, leia: 0, palpatine: 3, maul: 3, grievous: 3, dooku: 3 } },
            { text: "Meditar e buscar equilíbrio", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 3, anakin: 1, ahsoka: 2, mace: 3, leia: 2, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "Caçar Jedi", scores: { luke: 0, vader: 3, obiwan: 0, yoda: 0, anakin: 1, ahsoka: 0, mace: 0, leia: 0, palpatine: 3, maul: 3, grievous: 3, dooku: 2 } }
        ]
    },
    {
        question: "O que é mais importante para você?",
        options: [
            { text: "Honra e justiça", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 3, anakin: 1, ahsoka: 3, mace: 3, leia: 3, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "Poder e controle", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 3, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 3, grievous: 3, dooku: 4 } },
            { text: "Compaixão e empatia", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 3, anakin: 1, ahsoka: 3, mace: 2, leia: 3, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "Força e medo", scores: { luke: 0, vader: 3, obiwan: 0, yoda: 0, anakin: 2, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 3, grievous: 3, dooku: 3 } }
        ]
    },
    {
        question: "Como você resolve seus problemas?",
        options: [
            { text: "Com empatia e diálogo", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 3, anakin: 1, ahsoka: 3, mace: 3, leia: 3, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "Com força e intimidação", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 3, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 4, grievous: 4, dooku: 3 } },
            { text: "Com estratégia e paciência", scores: { luke: 2, vader: 0, obiwan: 3, yoda: 3, anakin: 1, ahsoka: 2, mace: 3, leia: 2, palpatine: 2, maul: 0, grievous: 1, dooku: 3 } },
            { text: "Destruindo meus inimigos", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 2, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 4, grievous: 4, dooku: 4 } }
        ]
    },
    {
        question: "Qual é a sua relação com a Força?",
        options: [
            { text: "Uso a Força para proteger e curar", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 3, anakin: 1, ahsoka: 3, mace: 3, leia: 2, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "Uso a Força para dominar e destruir", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 2, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 4, grievous: 3, dooku: 4 } },
            { text: "Sigo os ensinamentos Jedi", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 3, anakin: 1, ahsoka: 3, mace: 3, leia: 2, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "Eu confio apenas em mim mesmo", scores: { luke: 0, vader: 2, obiwan: 0, yoda: 0, anakin: 1, ahsoka: 0, mace: 0, leia: 0, palpatine: 3, maul: 3, grievous: 3, dooku: 3 } }
        ]
    },
    {
        question: "Qual destas frases mais se alinha com você?",
        options: [
            { text: "O bem sempre prevalece", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 3, anakin: 2, ahsoka: 3, mace: 3, leia: 3, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "A paz é uma mentira, só há paixão", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 1, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 3, grievous: 3, dooku: 4 } },
            { text: "Confie na Força, sempre.", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 3, anakin: 2, ahsoka: 3, mace: 3, leia: 3, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "O medo leva ao lado sombrio.", scores: { luke: 2, vader: 4, obiwan: 3, yoda: 2, anakin: 2, ahsoka: 2, mace: 2, leia: 2, palpatine: 4, maul: 2, grievous: 3, dooku: 3 } }
        ]
    },
    {
        question: "Qual é a sua abordagem em batalhas?",
        options: [
            { text: "Lutar apenas quando necessário", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 3, anakin: 2, ahsoka: 3, mace: 3, leia: 2, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "Destruir qualquer um que se opuser", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 2, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 4, grievous: 4, dooku: 4 } },
            { text: "Lutar por diversão", scores: { luke: 2, vader: 2, obiwan: 2, yoda: 2, anakin: 3, ahsoka: 2, mace: 2, leia: 1, palpatine: 0, maul: 2, grievous: 0, dooku: 0 } },
            { text: "Dominar tudo", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 1, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 4, grievous: 4, dooku: 4 } }
        ]
    },
    {
        question: "Como você lida com as emoções?",
        options: [
            { text: "As controlo e mantenho a calma", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 3, anakin: 2, ahsoka: 3, mace: 3, leia: 3, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "Deixo que elas me fortaleçam", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 2, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 4, grievous: 3, dooku: 4 } },
            { text: "Sofro por elas", scores: { luke: 2, vader: 1, obiwan: 2, yoda: 2, anakin: 3, ahsoka: 2, mace: 2, leia: 1, palpatine: 0, maul: 1, grievous: 0, dooku: 0 } },
            { text: "Nunca deixo me dominar", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 1, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 3, grievous: 3, dooku: 3 } }
        ]
    },
    {
        question: "Se você tivesse que escolher um mentor, quem seria?",
        options: [
            { text: "Obi-Wan Kenobi", scores: { luke: 2, vader: 0, obiwan: 0, yoda: 1, anakin: 3, ahsoka: 3, mace: 2, leia: 2, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "O Imperador Palpatine", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 2, ahsoka: 0, mace: 0, leia: 0, palpatine: 0, maul: 4, grievous: 4, dooku: 4 } },
            { text: "Yoda", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 0, anakin: 2, ahsoka: 3, mace: 3, leia: 2, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "Anakin Skywalker", scores: { luke: 0, vader: 0, obiwan: 0, yoda: 0, anakin: 0, ahsoka: 3, mace: 0, leia: 1, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } }
        ]
    },
    {
        question: "Como você lida com a traição?",
        options: [
            { text: "Perdoo, mas aprendo com a situação", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 3, anakin: 2, ahsoka: 3, mace: 3, leia: 3, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "Jamais perdoo e busco vingança", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 1, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 4, grievous: 4, dooku: 4 } },
            { text: "Esqueço e sigo em frente", scores: { luke: 0, vader: 0, obiwan: 0, yoda: 3, anakin: 2, ahsoka: 1, mace: 2, leia: 3, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "Manipulo a situação para obter vantagem", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 3, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 4, grievous: 4, dooku: 4 } },
        ]
    },
    {
        question: "Qual caminho você seguiria?",
        options: [
            { text: "Caminho da Luz", scores: { luke: 3, vader: 0, obiwan: 3, yoda: 3, anakin: 2, ahsoka: 3, mace: 3, leia: 3, palpatine: 0, maul: 0, grievous: 0, dooku: 0 } },
            { text: "Caminho do Lado Sombrio", scores: { luke: 0, vader: 4, obiwan: 0, yoda: 0, anakin: 1, ahsoka: 0, mace: 0, leia: 0, palpatine: 4, maul: 4, grievous: 4, dooku: 4 } },
            { text: "Nenhum Caminho", scores: { luke: 2, vader: 0, obiwan: 2, yoda: 2, anakin: 3, ahsoka: 3, mace: 3, leia: 3, palpatine: 0, maul: 2, grievous: 0, dooku: 0 } },
        ]
    }
];



let currentQuestionIndex = 0;
const userAnswers = [];


document.getElementById('start-btn').addEventListener('click', function() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    showQuestion();
});


function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const form = document.getElementById('quiz-form');
    const questionTitle = document.getElementById('question-title');
    questionTitle.textContent = currentQuestion.question;

    
    form.innerHTML = '';

    
    currentQuestion.options.forEach((option, index) => {
        const optionInput = document.createElement('input');
        optionInput.type = 'checkbox'; 
        optionInput.name = 'question';
        optionInput.value = index;
        optionInput.id = `option${index}`;

        const optionLabel = document.createElement('label');
        optionLabel.textContent = option.text;
        optionLabel.setAttribute('for', `option${index}`);

        form.appendChild(optionInput);
        form.appendChild(optionLabel);
        form.appendChild(document.createElement('br'));
    });

    
    document.getElementById('next-btn').disabled = false;
}


document.getElementById('next-btn').addEventListener('click', function() {
   
    const selectedOptions = document.querySelectorAll('input[name="question"]:checked');
    
    if (selectedOptions.length > 0) {
        const selectedIndexes = Array.from(selectedOptions).map(option => Number(option.value));
        userAnswers.push(selectedIndexes);
    } else {
        alert("Selecione pelo menos uma opção!");
        return;
    }

  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        calculateResult();
    }
});


function calculateResult() {
   
    Object.keys(characters).forEach(character => {
        characters[character].score = 0;
    });

    
    userAnswers.forEach((selectedIndexes, index) => {
        selectedIndexes.forEach(answer => {
            const selectedOption = questions[index].options[answer];
            Object.keys(selectedOption.scores).forEach(character => {
                characters[character].score += selectedOption.scores[character];
            });
        });
    });

 
    let maxScore = -1;
    let resultCharacter = null;

    Object.values(characters).forEach(character => {
        if (character.score > maxScore) {
            maxScore = character.score;
            resultCharacter = character;
        }
    });

   
    document.getElementById('quiz-screen').style.display = 'none';
    const resultScreen = document.getElementById('result-screen');
    resultScreen.style.display = 'block';

    if (resultCharacter.side === 'light') {
        resultScreen.className = 'light-side'; 
    } else {
        resultScreen.className = 'dark-side'; 
    }

    
    document.getElementById('result-name').textContent = resultCharacter.name;
    document.getElementById('result-description').textContent = resultCharacter.description;
    document.getElementById('result-img').src = resultCharacter.img;
    document.getElementById('result-score').textContent = `Pontuação: ${resultCharacter.score}`;
}

document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
    currentQuestionIndex = 0;
    userAnswers.length = 0;
    document.getElementById('result-screen').className = ''; 
    document.getElementById('result-img').src = ''; 
    document.getElementById('result-name').textContent = ''; 
    document.getElementById('result-description').textContent = ''; 
    document.getElementById('result-score').textContent = ''; 
});