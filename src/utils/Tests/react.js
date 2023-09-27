const react = [
  [
    {
      id: 1,
      type: "oneChoice",
      question: "Rect - это",
      answers: [
        "Фреймворк для создания UI",
        "Библиотека для создания UI",
        "Платформа для создания UI",
        "Утилита для создания UI",
      ],
    },
    {
      id: 2,
      type: "oneChoice",
      question: "Базовыми концепциями React являются:",
      answers: [
        "Компонентный подход, виртуальный DOM (дерево react-элементов), модульные стили, методы жизненного цикла",
        "Компонентный подход, однонаправленный поток данных, JSX, global state приложения(redux/mobX)",
        "Однонаправленный поток данных, виртуальный DOM (дерево react-элементов), использование webpack и react-scripts, JSX",
        "Однонаправленный поток данных, виртуальный DOM (дерево react-элементов), методы жизненного цикла ,react-hooks",
      ],
    },
    {
      id: 3,
      type: "severalChoice",
      question: "Выберите верные утверждения для props:",
      answers: [
        "props - это объект, свойства которого можно изменять внутри компонента",
        "props - это объект, свойства которого доступны тоько для чтения внутри компонента",
        "изменения props вызывают перерисовку компонента и его потомков",
        "объект props имеет ограничение на размер и не может содержать больше 10 свойств",
      ],
    },
  ],
  [
    {
      id: 1,
      type: "oneChoice",
      question:
        "Какой метод жизненного цикла компонента лучше всего подходит для выполнения сайд-эффектов?",
      answers: [
        "componentWillMount",
        "shouldComponentUpdate",
        "componentDidUnmount",
        "componentDidMount",
      ],
    },
    {
      id: 2,
      type: "severalChoice",
      question: "Выберите верные утверждения:",
      answers: [
        "хуки можно вызвать внутри условий и циклов",
        "хуки не могут быть использованы в классовом компоненте ",
        "один хук можно вызвать несколько раз внутри одного компонента",
        'все хуки являются "чистыми фунцкциями"',
      ],
    },
    {
      id: 3,
      type: "severalChoice",
      question: "Выберите верные утверждения о Redux",
      answers: [
        "selectors - это функции, возвращающие информацию из store",
        'action - это объект, содержащее как минимум одно обязательное свойство "type"',
        "dispatch - чистая функция, отвечающая за обновление store",
        "reducer - метод, вызывающий dispatch и передающий в него action",
      ],
    },
  ],
];

export default react;