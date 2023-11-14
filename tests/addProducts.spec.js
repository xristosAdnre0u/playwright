const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PO/LoginPage');
const { MainPage } = require('../PO/MainPage');
const { default: testData } = require('../testData');


test('Add a product', async()=> 
{
    await test.step('Login with standard user', async() =>
    {
        const loginPage = new LoginPage();
        await loginPage.goTo();
    })
})