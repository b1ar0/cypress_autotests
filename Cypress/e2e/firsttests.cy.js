import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"

describe('Проверка авторизации', function () {
beforeEach('Начало теста', function () {
cy.visit('/#/login'); // Зашел на сайт во вкладку авторизации
}); 

it('Верный пароль и верный логин', function () {
    cy.get(main_page.login_input).type(data.login); // Ввел правильную почту
    cy.get(main_page.password_input).type(data.password); // Ввел правильный пароль
    cy.get(main_page.log_in).click(); // Нажал кнопку войти
    
    cy.get('.article-preview').contains('Articles not available.'); 
    }); // Результат

it('Верный логин, но не верный пароль', function () {
    cy.get(main_page.login_input).type(data.login); // Ввел правильную почту
    cy.get(main_page.password_input).type('zxc123'); // Ввел неправильный пароль
    cy.get(main_page.log_in).click(); // Нажал кнопку войти
    
    cy.get('.error-messages > li').contains('Wrong email/password combination'); 
    }); //Результат

it('Неверный логин, но верный пароль', function () {
    cy.get(main_page.login_input).type ('biarr@mail.ru'); // Ввел не существующую почту
    cy.get(main_page.password_input).type(data.password); // Ввел правильный пароль
    cy.get(main_page.log_in).click(); // Нажал кнопку войти

    cy.get(main_page.error_m).contains('Email not found sign in first'); //Результат
    });
});