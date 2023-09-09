const answers = [
  [
    [
      {
        id: 1,
        type: "oneChoice",
        question: "Rect - это",
        rightAnswer: "Фреймворк для создания UI",
      },
      {
        id: 2,
        type: "oneChoice",
        question: "Базовыми концепциями React являются:",
        rightAnswer:
          "Компонентный подход, виртуальный DOM (дерево react-элементов), модульные стили, методы жизненного цикла",
      },
      {
        id: 3,
        type: "severalChoice",
        question: "Выберите верные утверждения для props:",
        rightAnswer: [
          "props - это объект, свойства которого можно изменять внутри компонента",
          "props - это объект, свойства которого доступны тоько для чтения внутри компонента",
        ],
      },
    ],
    [
      {
        id: 4,
        type: "oneChoice",
        question:
          "Какой метод жизненного цикла компонента лучше всего подходит для выполнения сайд-эффектов?",
        rightAnswer: "componentWillMount",
      },
      {
        id: 5,
        type: "severalChoice",
        question: "Выберите верные утверждения:",
        rightAnswer: [
          "хуки можно вызвать внутри условий и циклов",
          "хуки не могут быть использованы в классовом компоненте ",
        ],
      },
      {
        id: 6,
        type: "severalChoice",
        question: "Выберите верные утверждения о Redux",
        rightAnswer: [
          "selectors - это функции, возвращающие информацию из store",
          'action - это объект, содержащее как минимум одно обязательное свойство "type"',
        ],
      },
    ],
  ],
  [
    [
      {
        id: 7,
        type: "oneChoice",
        question: "Какие какие виды преобразований типов есть в javaScript",
        rightAnswer: "Численные",
      },
      {
        id: 8,
        type: "oneChoice",
        question:
          "Если функция не имеет директивы return или она пустая, то возвращаемое значение будет",
        rightAnswer: "Null",
      },
      {
        id: 9,
        type: "oneChoice",
        question:
          "Какие атрибуты изображения являюся обязательными с точки зрения валидации",
        rightAnswer: "all",
      },
    ],
    [
      {
        id: 10,
        type: "severalChoice",
        question:
          "Для получения/установки свойства [[Prototype]] мы можем использовать",
        rightAnswer: [
          "__proto__",
          "Object.getPrototypeOf/Object.setPrototypeOf",
        ],
      },
      {
        id: 11,
        type: "severalChoice",
        question: "Что характерно для строчных элементов",
        rightAnswer: [
          "Начинаются с новой строки",
          "К ним не применяются свойства width и height",
        ],
      },
      {
        id: 12,
        type: "severalChoice",
        question: "ыберите верные утверждения о DOM",
        rightAnswer: [
          "Каждый HTML-тег является объектом",
          "Комментарии внутри HTML являются узлами DOM",
        ],
      },
    ],
  ],
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
  [
    [
      {
        id: 29,
        type: "oneChoice",
        question: "Что такое GitHub?",
        rightAnswer: "Программа для работы с Git",
      },
      {
        id: 30,
        type: "oneChoice",
        question: "Что такое репозиторий Git?",
        rightAnswer: "Любая директория/папка в моей ОС",
      },
      {
        id: 31,
        type: "oneChoice",
        question: "Что делает команда git status?",
        rightAnswer:
          "Показывает имя и email нашего пользователя, а также является ли он авторизованным в системе GitHub или нет",
      },
    ],
    [
      {
        id: 32,
        type: "oneChoice",
        question: "Что делает команда git add?",
        rightAnswer:
          "Создает файл с указанным именем и сразу добавляет его в Git",
      },
      {
        id: 33,
        type: "oneChoice",
        question:
          "Что означает статус файла untracked в выводе команды git status?",
        rightAnswer: "Что система Git не отслеживает этот файл",
      },
      {
        id: 34,
        type: "oneChoice",
        question: "Что означает статус файла new в выводе команды git status?",
        rightAnswer:
          "Что файл только что был создан и еще не отслеживается системой Git",
      },
    ],
  ],
  [
    [
      {
        id: 35,
        type: "oneChoice",
        question:
          "Вы можете отключить неявное присвоение типа переменной, включив опцию компилятора",
        rightAnswer: "noAutoType",
      },
      {
        id: 36,
        type: "oneChoice",
        question:
          "Вы можете включить учет типов 'undefined' и 'null', включив свойство компилятора",
        rightAnswer: "strictChecksRequired",
      },
      {
        id: 37,
        type: "oneChoice",
        question:
          "______ аналогично ''любому'', но является более безопасной альтернативой, если вы не уверены в типе",
        rightAnswer: "similar",
      },
    ],
    [
      {
        id: 38,
        type: "oneChoice",
        question:
          "Что делает модификатор доступа 'readonly' для присвоения переменной массива, " +
          "например: `const codeNames: readonly string[] = ['Coding', 'God']`?",
        rightAnswer: "Заставляет вас читать его для более чистого кода",
      },
      {
        id: 39,
        type: "oneChoice",
        question: "_____ - это возвращаемый тип, когда ничего не возвращается",
        rightAnswer: "any[]",
      },
    ],
  ],
];

export default answers;
