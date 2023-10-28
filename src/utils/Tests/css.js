const css = [
  [
    {
      id: 1,
      type: "severalChoice",
      question:
        "Каким образом можно задать отступы у блока 20px сверху и 10px снизу?",
      answers: [
        "padding-top: 20px; padding-bottom: 10px;",
        "padding: 20px 10px 0;",
        "padding: 20px 0 10px 0;",
        "padding: 20px 0 10px;",
      ],
    },
    {
      id: 2,
      type: "oneChoice",
      question:
        "С помощью какого псевдокласса задают эффект при наведении мышкой?",
      answers: ["a:visited", "a:link", "a:hover", "a:active"],
    },
    {
      id: 3,
      type: "oneChoice",
      question:
        "С помощью какого селектора можно получить прямого потомка элемента с классом .main_menu?",
      answers: [
        ".main_menu a",
        ".main_menu > a",
        ".main_menu + a",
        ".main_menu - a",
      ],
    },
  ],
  [
    {
      id: 1,
      type: "oneChoice",
      question: "С помощью свойства line-height задают:",
      answers: [
        "Высоту строки",
        "Медстрочный интервал",
        "Высоту абзаца",
        "Высоту блока",
      ],
    },
    {
      id: 2,
      type: "severalChoice",
      question:
        "Выберите корректные варианты связывания label и input при вёрстке форм",
      answers: [
        "Назначаем <input> и <lable> одинаковые id",
        "У <label> указываем атрибут for, который равен атрибуту id у тэга <input>",
        "<input> следует стрго за <label>",
        "Помещаем <input> внутрь <label>",
      ],
    },
    {
      id: 3,
      type: "oneChoice",
      question: "Современный CSS(укажите верный вариант)",
      answers: [
        "Позволяет использовать переменные",
        "Не позволяет использовать переменные",
        "Переменные можно использовать в sass и scss",
        "Позволяет использовать только определённые переменные",
      ],
    },
  ],
];

const cssAnswers = [
  [
    [
      {
        id: 23,
        type: "severalChoice",
        question:
          "Каким образом можно задать отступы у блока 20px сверху и 10px снизу?",
        rightAnswer: [
          "padding-top: 20px; padding-bottom: 10px;",
          "padding: 20px 10px 0;",
        ],
      },
      {
        id: 24,
        type: "oneChoice",
        question:
          "С помощью какого псевдокласса задают эффект при наведении мышкой?",
        rightAnswer: "a:visited",
      },
      {
        id: 25,
        type: "oneChoice",
        question:
          "С помощью какого селектора можно получить прямого потомка элемента с классом .main_menu?",
        rightAnswer: ".main_menu a",
      },
    ],
    [
      {
        id: 26,
        type: "oneChoice",
        question: "С помощью свойства line-height задают:",
        rightAnswer: "Высоту строки",
      },
      {
        id: 27,
        type: "severalChoice",
        question:
          "Выберите корректные варианты связывания label и input при вёрстке форм",
        rightAnswer: [
          "Назначаем <input> и <lable> одинаковые id",
          "У <label> указываем атрибут for, который равен атрибуту id у тэга <input>",
        ],
      },
      {
        id: 28,
        type: "oneChoice",
        question: "Современный CSS(укажите верный вариант)",
        rightAnswer: "Позволяет использовать переменные",
      },
    ],
  ],
];

export { css, cssAnswers };
