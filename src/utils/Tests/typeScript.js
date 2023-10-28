const typeScript = [
  [
    {
      id: 1,
      type: "oneChoice",
      question:
        "Вы можете отключить неявное присвоение типа переменной, включив опцию компилятора",
      answers: [
        "noAutoType",
        "noImplicitAny",
        "autoTypeAssignment = FALSE",
        "implicit = FALSE",
      ],
    },
    {
      id: 2,
      type: "oneChoice",
      question:
        "Вы можете включить учет типов 'undefined' и 'null', включив свойство компилятора",
      answers: [
        "strictChecksRequired",
        "strictNullChecks",
        "noAutoType",
        "noFalseInits",
      ],
    },
    {
      id: 3,
      type: "oneChoice",
      question:
        "______ аналогично ''любому'', но является более безопасной альтернативой, если вы не уверены в типе",
      answers: ["similar", "never", "unknown"],
    },
  ],
  [
    {
      id: 1,
      type: "oneChoice",
      question:
        "Что делает модификатор доступа 'readonly' для присвоения переменной массива, " +
        "например: `const codeNames: readonly string[] = ['Coding', 'God']`?",
      answers: [
        "Заставляет вас читать его для более чистого кода",
        "Делает его приватным и может быть использован только в созданном им файле",
        "Позволяет только добавлять, но не удалять элементы в массиве",
        "Не допускает никаких изменений",
      ],
    },
    {
      id: 2,
      type: "oneChoice",
      question: "_____ - это возвращаемый тип, когда ничего не возвращается",
      answers: ["any[]", "void", "any", "unknown"],
    },
  ],
];

const typeScriptAnswers = [
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

export { typeScript, typeScriptAnswers };
