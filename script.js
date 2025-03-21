// Эффект для видео при наведении
document.querySelectorAll('.episode').forEach(episode => {
    const video = episode.querySelector('.dynamic-content');
    episode.addEventListener('mouseenter', () => video.play());
    episode.addEventListener('mouseleave', () => video.pause());
});

// Пример теста (добавьте свои вопросы)
const quizData = [
    {
        question: "Какой жанр подкастов вам нравится?",
        options: ["Технологии", "Культура", "Спорт"],
        correct: 0
    }
];

function buildQuiz() {
    const container = document.getElementById('quizContainer');
    quizData.forEach((q, index) => {
        const question = document.createElement('div');
        question.innerHTML = `
            <p>${q.question}</p>
            ${q.options.map(opt => `
                <label>
                    <input type="radio" name="q${index}" value="${opt}">
                    ${opt}
                </label>
            `).join('')}
        `;
        container.appendChild(question);
    });
    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Проверить";
    submitBtn.onclick = checkAnswers;
    container.appendChild(submitBtn);
}

function checkAnswers() {
    // Логика проверки ответов
    alert("Тест в разработке!");
}

// Запустите тест при загрузке
buildQuiz();