# Автотесты на Cypress: авторизация

![Cypress](https://img.shields.io/badge/Cypress-16-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-npm-339933?logo=nodedotjs&logoColor=white)

Учебный проект, в котором я автоматизирую проверку формы входа на стенде [realworld.qa.guru](https://realworld.qa.guru). Тесты открывают страницу логина, вводят данные и сверяют, что показал сайт: ленту статей или текст ошибки.

## Что проверяется

| Сценарий | Логин | Пароль | Ожидаемый результат |
|---|---|---|---|
| Верный логин и пароль | существующий | правильный | вход выполнен, видна лента с текстом `Articles not available.` |
| Верный логин, неверный пароль | существующий | неправильный | ошибка `Wrong email/password combination` |
| Неверный логин, верный пароль | несуществующий | правильный | ошибка `Email not found sign in first` |

Все три теста лежат в `Cypress/e2e/firsttests.cy.js`. Перед каждым тестом Cypress заново открывает `/#/login`, поэтому тесты не зависят друг от друга.

## Как устроен проект

Селекторы и тестовые данные вынесены из тестов в отдельные JSON-файлы. Если на сайте поменяется вёрстка, правка нужна в одном месте, а не в каждом тесте.

```
Cypress/
├── e2e/
│   ├── firsttests.cy.js     # тесты авторизации
│   └── myfirstspec.cy.js    # стартовый пример Cypress
├── helpers/
│   └── default_data.json    # логин и пароль тестового пользователя
├── locators/
│   └── main_page.json       # селекторы полей, кнопки и сообщения об ошибке
└── support/                 # стандартные файлы Cypress
cypress.config.js            # baseUrl: https://realworld.qa.guru
```

## Запуск

Нужен [Node.js](https://nodejs.org) (вместе с ним ставится npm).

```bash
git clone https://github.com/b1ar0/cypress_autotests.git
cd cypress_autotests
npm install
```

Открыть Cypress с окном, где видно, как тесты кликают по сайту:

```bash
npx cypress open
```

Прогнать тесты авторизации без окна, результат появится в терминале:

```bash
npx cypress run --spec "Cypress/e2e/firsttests.cy.js"
```

## Стек

Cypress 16, JavaScript, Node.js и npm.

## Автор

Артур Билинский, QA-инженер. Сайт: [b1arr0.bilinskiy.ru](https://b1arr0.bilinskiy.ru/)
