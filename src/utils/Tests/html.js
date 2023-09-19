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
      id: 6,
      type: "oneChoice",
      question:
        "Какие атрибуты изображения являются обязательными с точки зрения валидации",
      answers: ["alt", "title", "type", "id"],
    },
    {
      id: 7,
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
      id: 8,
      type: "oneChoice",
      question:
        "Какие атрибуты изображения являюся обязательными с точки зрения валидации",
      answers: ["all", "title", "class", "id"],
    },
    {
      id: 9,
      type: "write",
      question: "Какие глобальные изменения перетерпел html за всё время?",
    },
    {
      id: 10,
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

export default html;
