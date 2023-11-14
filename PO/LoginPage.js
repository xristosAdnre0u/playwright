const { expect } = require('@playwright/test');
const { default: testData } = require('../testData');

exports.LoginPage = class LoginPage{

    constructor(page) {
        this.page = page;
    this.header = page.locator('.login_logo');
    this.userName = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
    this.loginLogo = page.locator('.login_logo');
    }

    async goTo() {
        await this.page.goto(testData.homePageUrl);
    }

    async login(userDescription) 
    {
        let nameOfUser = testData.users[userDescription].name;
        let passwordOfUser = testData.users[userDescription].password;
        await this.userName.type(nameOfUser);
        await this.password.type(passwordOfUser);
        await this.loginBtn.click();
    }
}
