const html = [
  [
    {
      id: 1,
      type: "oneChoice",
      question: "Где наиболее корректно прописывать файлы для html-страницы",
      answers: [
        "В тэге<style>",
        "В отдельном css-файле",
        "В атрибуте style в отдельных тэгах",
      ],
    },
    {
      id: 2,
      type: "severalChoices",
      question:
        "Укажите, какие именования классов не противоречат классическим правилам формирования имён в методологии БЭМ",
      answers: [
        ".header-wrapper",
        ".mainmenu__item__link",
        ".buttonRed",
        ".product__img",
      ],
    },
    {
      id: 3,
      type: "write",
      question: "Напишите правильное вложение тэгов body, table, tr",
    },
    {
      id: 4,
      type: "oneChoice",
      question:
        "Выберите корректную последовательность вложенности тэгов при вёрстке меню",
      answers: [
        "<header>-<body>-<footer>",
        "<ul>-<nav>-<a>-<li>",
        "<nav>-<ul>-<li>-<a>",
        "<p>-<ul>-<li>-<a>",
      ],
    },
    {
      id: 5,
      type: "oneChoice",
      question: "Какой HTML-код предназначен для создания текстовой области?",
      answers: [
        '<input type="textarea">',
        "<textarea>",
        '<input type="textbox">',
      ],
    },
  ],
  [
    {
      id: 1,
      type: "oneChoice",
      question:
        "Какие атрибуты изображения являются обязательными с точки зрения валидации",
      answers: ["alt", "title", "type", "id"],
    },
    {
      id: 2,
      type: "oneChoice",
      question: "Какой блок размечается тэгом <aside>",
      answers: [
        "Шапка страницы",
        "Блклвая панель",
        "Основное описание страницы",
        "Навигация",
      ],
    },
    {
      id: 3,
      type: "oneChoice",
      question:
        "Какие атрибуты изображения являюся обязательными с точки зрения валидации",
      answers: ["all", "title", "class", "id"],
    },
    {
      id: 4,
      type: "write",
      question: "Какие глобальные изменения перетерпел html за всё время?",
    },
    {
      id: 5,
      type: "severalChoice",
      question: "Что характерно для строчных элементов",
      answers: [
        "Начинаются с новой строки",
        "К ним не применяются свойства width и height",
        "Ширина элемента равна содержимому",
        "Используется только внутри параграфа <p>",
      ],
    },
  ],
];

const htmlAnswers = [
  [
    [
      {
        id: 13,
        type: "oneChoice",
        question: "Где наиболее корректно прописывать файлы для html-страницы",
        rightAnswer: "В тэге<style>",
      },
      {
        id: 14,
        type: "severalChoices",
        question:
          "Укажите, какие именования классов не противоречат классическим правилам формирования имён в методологии БЭМ",
        rightAnswer: [".header-wrapper", ".mainmenu__item__link"],
      },
      {
        id: 15,
        type: "write",
        question: "Напишите правильное вложение тэгов body, table, tr",
        rightAnswer: "Сравни этот ответ со своим",
      },
      {
        id: 16,
        type: "oneChoice",
        question:
          "Выберите корректную последовательность вложенности тэгов при вёрстке меню",
        rightAnswer: "<header>-<body>-<footer>",
      },
      {
        id: 17,
        type: "oneChoice",
        question: "Какой HTML-код предназначен для создания текстовой области?",
        rightAnswer: '<input type="textarea">',
      },
    ],
    [
      {
        id: 18,
        type: "oneChoice",
        question:
          "Какие атрибуты изображения являются обязательными с точки зрения валидации",
        rightAnswer: "alt",
      },
      {
        id: 19,
        type: "oneChoice",
        question: "Какой блок размечается тэгом <aside>",
        rightAnswer: "Шапка страницы",
      },
      {
        id: 20,
        type: "oneChoice",
        question:
          "Какие атрибуты изображения являюся обязательными с точки зрения валидации",
        rightAnswer: "all",
      },
      {
        id: 21,
        type: "write",
        question: "Какие глобальные изменения перетерпел html за всё время?",
        rightAnswer: "Сравни этот ответ со своим",
      },
      {
        id: 22,
        type: "severalChoice",
        question: "Что характерно для строчных элементов",
        rightAnswer: [
          "Начинаются с новой строки",
          "К ним не применяются свойства width и height",
        ],
      },
    ],
  ],
];

export { html, htmlAnswers };
