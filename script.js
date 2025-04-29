// Эффект для видео при наведении
document.querySelectorAll('.episode').forEach(episode => {
    const video = episode.querySelector('.dynamic-content');
    episode.addEventListener('mouseenter', () => video.play());
    episode.addEventListener('mouseleave', () => video.pause());
});

// тест
const quizData = [
	{
			question: "Как бы вы выражали свои эмоции через музыку?",
			options: ["Агрессивно, через драйв гитары", "Меланхолично, через тексты", "С иронией, делая комичные песни"],
			scores: [
				{ a: 1, b: 0, c: 0 },
				{ a: 0, b: 1, c: 0 },
				{ a: 0, b: 0, c: 1 }
			]
	},
	{
			question: "Что важнее в музыке?",
			options: ["Энергия и скорость", "Сложные аранжировки", "Мелодичность и лёгкость"],
			scores: [
				{ a: 1, b: 0, c: 0 },
				{ a: 0, b: 1, c: 0 },
				{ a: 0, b: 0, c: 1 }
			]
	},
	{
		question: "Какой темп музыки вас заводит?",
		options: ["Быстрый и резкий", "Умеренный, с динамикой", "Медленный, но пронзительный"],
		scores: [
			{ a: 1, b: 0, c: 0 },
			{ a: 0, b: 1, c: 0 },
			{ a: 0, b: 0, c: 1 }
		]
	},
	{
		question: "О чём должны быть тексты?",
		options: ["Бунт, свобода", "Любовь, личные переживания", "Философия, размышления о жизни"],
		scores: [
			{ a: 1, b: 0, c: 0 },
			{ a: 0, b: 1, c: 0 },
			{ a: 0, b: 0, c: 1 }
		]
	},
	{
		question: "Какая гитара вас вдохновляет?",
		options: ["Перегруженная, с хриплым звуком", "Чистая, с джазовыми нотками", "Акустическая с хорошей реверберацией"],
		scores: [
			{ a: 1, b: 0, c: 0 },
			{ a: 0, b: 1, c: 0 },
			{ a: 0, b: 0, c: 1 }
		]
	},
	{
		question: "Как вы относитесь к экспериментам со стилями?",
		options: ["Ненавижу — рок должен оставаться роком", "Обожаю — чем необычнее, тем лучше", "Нормально, но в рамках жанра"],
		scores: [
			{ a: 1, b: 0, c: 0 },
			{ a: 0, b: 1, c: 0 },
			{ a: 0, b: 0, c: 1 }
		]
	},
	{
		question: "Какая атмосфера на концертах вас привлекает?",
		options: ["Толпа, слэм, адреналин", "Уютный клуб с камерной атмосферой", "Зал с идеальной акустикой"],
		scores: [
			{ a: 1, b: 0, c: 0 },
			{ a: 0, b: 1, c: 0 },
			{ a: 0, b: 0, c: 1 }
		]
	},
	{
		question: "Какой образ жизни вам ближе?",
		options: ["Драйв, дорога, вечное движение", "Творческий хаос и самопознание", "Спокойная рефлексия"],
		scores: [
			{ a: 1, b: 0, c: 0 },
			{ a: 0, b: 1, c: 0 },
			{ a: 0, b: 0, c: 1 }
		]
	},
	{
		question: "Какой элемент стиля ассоциируется у вас с роком?",
		options: ["Кожаная куртка, шипы, татуировки", "Блестящие костюмы, яркий макияж", "Рваные джинсы, минимализм, патчи"],
		scores: [
			{ a: 1, b: 0, c: 0 },
			{ a: 0, b: 1, c: 0 },
			{ a: 0, b: 0, c: 1 }
		]
	},
	{
		question: "Что для вас рок?",
		options: ["Бунт против правил и стереотипов", "Способ выразить то, что не скажешь словами", "Голос поколения и призыв к переменам"],
		scores: [
			{ a: 1, b: 0, c: 0 },
			{ a: 0, b: 1, c: 0 },
			{ a: 0, b: 0, c: 1 }
		]
	},
	{
		question: "Как вы выбираете музыку?",
		options: ["Слушаю то, что громче и злее", "Ищу глубину в текстах", "Экспериментирую с жанрами"],
		scores: [
			{ a: 1, b: 0, c: 0 },
			{ a: 0, b: 1, c: 0 },
			{ a: 0, b: 0, c: 1 }
		]
	},
	{
		question: "Какой инструмент вас завораживает?",
		options: ["Барабаны, ритм-секция", "Соло-гитара", "Вокал как отдельный инструмент"],
		scores: [
			{ a: 1, b: 0, c: 0 },
			{ a: 0, b: 1, c: 0 },
			{ a: 0, b: 0, c: 1 }
		]
	}
];

const results = [
	{
			condition: (counts) => counts.a > counts.b && counts.a > counts.c,
			text: "Панк-рок или Хардкор",
			description: "Ярость, скорость, протест. Вы — бунтарь, который ценит честность и простоту."
	},
	{
		condition: (counts) => counts.b > counts.a && counts.b > counts.c,
		text: "Прогрессивный или Арт-рок",
		description: "Сложные аранжировки, философия, эксперименты. Ваша музыка — это пазл для ума."
},
{
	condition: (counts) => counts.c > counts.a && counts.c > counts.b,
	text: "Инди-рок или Поп-рок",
	description: "Мелодичность, искренность, независимость. Вы любите музыку, которая звучит как разговор с другом."
},
{
	condition: (counts) => counts.a === counts.b && counts.a > counts.c,
	text: "Хеви-метал",
	description: "Мощь, тема борьбы, техническая виртуозность. Вы слушаете музыку на грани возможностей."
},
{
	condition: (counts) => counts.a === counts.c && counts.a > counts.b,
	text: "Гранж или Альтернатива",
	description: "Мрачность, борьба с системой, бунт против стереотипов. Вы любите, когда музыка находит отклик протесту внутри вас."
},
{
	condition: (counts) => counts.b === counts.c && counts.b > counts.a,
	text: "Пост-рок или Готик-рок",
	description: "Атмосфера, мрачная эстетика, глубина. Ваш рок — это путешествие в подсознание."
},
{
	condition: (counts) => counts.a === counts.b && counts.b === counts.c,
	text: "Экспериментальный рок",
	description: "Вы ищете нестандартные решения, смешивая меланхолию, ярость и андеграунд."
}
];

let currentQuestion = 0;
let scoreCounts = { a: 0, b: 0, c: 0 };

function showQuestion() {
	const container = document.querySelector('#quizContainer');
	container.innerHTML = `
			<div class="quiz-question">${quizData[currentQuestion].question}</div>
			<div class="quiz-options">
					${quizData[currentQuestion].options.map((opt, i) => `
							<label onclick="selectAnswer(${i})"> <!-- Передаем индекс -->
									<input type="radio" name="q${currentQuestion}">
									${opt}
							</label>
					`).join('')}
			</div>
			<button class="quiz-button next-button hidden">Далее</button>
	`;
}

function selectAnswer(answerIndex) {
	const selectedScore = quizData[currentQuestion].scores[answerIndex];
	scoreCounts.a += selectedScore.a || 0;
	scoreCounts.b += selectedScore.b || 0;
	scoreCounts.c += selectedScore.c || 0;
	document.querySelector('.next-button').classList.remove('hidden');
}

function showResult() {
	console.log("Текущие счетчики:", scoreCounts); // Отладка
	const result = results.find(r => {
			const conditionResult = r.condition(scoreCounts);
			console.log(`Проверка условия для ${r.text}:`, conditionResult); // Отладка
			return conditionResult;
	});
	
	// Если результат не найден (например, из-за ошибки в условиях)
	if (!result) {
			document.querySelector('#quizContainer').innerHTML = `
					<div class="result fade-in">
							<div class="result-text">Ошибка определения результата</div>
							<p>Попробуйте пройти тест снова.</p>
							<button class="quiz-button restart-button">Пройти повторно</button>
					</div>
			`;
			document.querySelector('.restart-button').addEventListener('click', resetQuiz);
			return;
	}
	
	document.querySelector('#quizContainer').innerHTML = `
			<div class="result fade-in">
					<div class="result-text">${result.text}</div>
					<p>${result.description}</p>
					<button class="quiz-button restart-button">Пройти повторно</button>
			</div>
	`;
	document.querySelector('.restart-button').addEventListener('click', resetQuiz);
}

function resetQuiz() {
	currentQuestion = 0;
	scoreCounts = { a: 0, b: 0, c: 0 };
	showQuestion();
}

document.addEventListener('click', (e) => {
	if(e.target.classList.contains('next-button')) {
			currentQuestion++;
			if(currentQuestion < quizData.length) {
					showQuestion();
			} else {
					showResult();
			}
	}
});

// Инициализация теста
showQuestion();

// Открытие списка платформ
document.querySelectorAll('.play-button').forEach(button => {
	button.addEventListener('click', (e) => {
			e.preventDefault();
			const platforms = button.closest('.play-wrapper').querySelector('.platforms');
			platforms.style.display = platforms.style.display === 'block' ? 'none' : 'block';
	});
});

// Закрытие при клике вне области
document.addEventListener('click', (e) => {
	if (!e.target.closest('.play-wrapper')) {
			document.querySelectorAll('.platforms').forEach(el => el.style.display = 'none');
	}
});

document.addEventListener('DOMContentLoaded', () => {
	const gradient = document.querySelector('.global-gradient');
	
	const points = [
			{ x: 50, y: -10 },   // Начало
			{ x: -10, y: 20 },   // Вправо-центр
			{ x: 20, y: 50 },   // Вправо-центр
			{ x: 80, y: 50 },   // Влево-вниз
			{ x: 80, y: 50 },   // Влево-вниз
			{ x: 50, y: 30 },   // Влево-вниз
			{ x: 50, y: -20 }    // Финал
	];

	const opacityPoints = [1, 0.5, 0.5, 0.5, 0.5, 0.5, 1]; // Значения для каждой секции

	window.addEventListener('scroll', () => {
			const scrollY = window.scrollY;
			const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
			const progress = Math.min(scrollY / maxScroll, 1);
			
			const segment = Math.floor(progress * (points.length - 1));
			const segmentProgress = (progress * (points.length - 1)) % 1;
			
			const startX = points[segment].x;
			const startY = points[segment].y;
			const endX = points[segment + 1]?.x || startX;
			const endY = points[segment + 1]?.y || startY;
			
			const x = startX + (endX - startX) * segmentProgress;
			const y = startY + (endY - startY) * segmentProgress;

			// В scroll обработчике
			const opacity = opacityPoints[segment] + 
										 (opacityPoints[segment + 1] - opacityPoints[segment]) * segmentProgress;
			
			gradient.style.backgroundPosition = `${x}% ${y}%`;
			gradient.style.opacity = opacity;
	});
});