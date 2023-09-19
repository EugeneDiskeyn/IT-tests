const javaScript = [
  [
    {
      id: 1,
      type: "oneChoice",
      question: "Какие какие виды преобразований типов есть в javaScript",
      answers: [
        "Численные",
        "Логические",
        "Строковые",
        "Все вышеперечисленные",
      ],
    },
    {
      id: 2,
      type: "oneChoice",
      question:
        "Если функция не имеет директивы return или она пустая, то возвращаемое значение будет",
      answers: ["Null", "SyntaxError", "Undefined", "Void"],
    },
    {
      id: 3,
      type: "oneChoice",
      question:
        "Какие атрибуты изображения являюся обязательными с точки зрения валидации",
      answers: ["all", "title", "class", "id"],
    },
  ],
  [
    {
      id: 4,
      type: "severalChoice",
      question:
        "Для получения/установки свойства [[Prototype]] мы можем использовать",
      answers: [
        "__proto__",
        "Object.getPrototypeOf/Object.setPrototypeOf",
        "prototype",
        "Все вышеперечисленные",
      ],
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
    {
      id: 6,
      type: "severalChoice",
      question: "ыберите верные утверждения о DOM",
      answers: [
        "Каждый HTML-тег является объектом",
        "Комментарии внутри HTML являются узлами DOM",
        "DOM доступен из каждого HTML кода(Browser, NodeJS)",
        "Объект document предоставляет доступ до DOM",
      ],
    },
  ],
];
export default javaScript;
