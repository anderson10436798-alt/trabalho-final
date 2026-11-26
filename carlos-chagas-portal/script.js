// Menu Mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dados do Quiz
const quizData = [
    {
        question: "Qual era o antigo nome do povoado antes de se chamar Carlos Chagas?",
        options: ["Vila do Mucuri", "Urucu", "Serra Verde", "Porto do Boi"],
        answer: 1,
        explanation: "Antes da emancipação em 1938, a localidade era conhecida como Urucu."
    },
    {
        question: "Por que Carlos Chagas ficou conhecida como a 'Cidade do Boi'?",
        options: [
            "Por causa de uma lenda indígena",
            "Pela força da pecuária bovina, extensas pastagens e feiras agropecuárias",
            "Porque foi fundada por vaqueiros baianos",
            "Devido a uma estátua gigante na praça"
        ],
        answer: 1,
        explanation: "O município possui um dos maiores rebanhos de Minas Gerais, impulsionado por terras férteis e tradição rural."
    },
    {
        question: "Qual rio importante banha o município de Carlos Chagas?",
        options: ["Rio Doce", "Rio São Francisco", "Rio Mucuri", "Rio Jequitinhonha"],
        answer: 2,
        explanation: "Carlos Chagas está localizada no coração do Vale do Mucuri, banhada pelo Rio Mucuri."
    },
    {
        question: "Qual ferrovia foi fundamental para o desenvolvimento histórico da cidade?",
        options: [
            "Estrada de Ferro Vitória a Minas",
            "Estrada de Ferro Bahia e Minas",
            "Estrada de Ferro Central do Brasil",
            "Ferrovia Norte-Sul"
        ],
        answer: 1,
        explanation: "A Estrada de Ferro Bahia e Minas impulsionou o comércio e o escoamento da produção local no século XX."
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
    feedbackText.textContent = "";
    nextBtn.style.display = "none";
    optionsContainer.innerHTML = "";

    const current = quizData[currentQuestion];
    questionText.textContent = `${currentQuestion + 1}. ${current.question}`;

    current.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, selectedBtn) {
    const current = quizData[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === current.answer) {
        score++;
        selectedBtn.style.background = "#d8f3dc";
        selectedBtn.style.borderColor = "#1b4332";
        feedbackText.style.color = "#1b4332";
        feedbackText.textContent = `✅ Correto! ${current.explanation}`;
    } else {
        selectedBtn.style.background = "#ffe5ec";
        selectedBtn.style.borderColor = "#d90429";
        feedbackText.style.color = "#d90429";
        feedbackText.textContent = `❌ Ops! ${current.explanation}`;
    }

    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    questionText.textContent = `Fim do Quiz! Você acertou ${score} de ${quizData.length} perguntas.`;
    optionsContainer.innerHTML = "";
    feedbackText.textContent = score === quizData.length 
        ? "🏆 Parabéns! Você conhece tudo sobre a Cidade do Boi!" 
        : "👏 Muito bem! Continue explorando a história de Carlos Chagas.";
    nextBtn.textContent = "Jogar Novamente";
    nextBtn.style.display = "inline-block";
    nextBtn.onclick = () => {
        currentQuestion = 0;
        score = 0;
        nextBtn.textContent = "Próxima Pergunta";
        loadQuestion();
    };
}

loadQuestion();
