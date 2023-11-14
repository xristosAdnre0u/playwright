const { expect } = require('@playwright/test');
const { default: testData } = require('../testData');

exports.MainPage = class MainPage{
    constructor(page) 
    {
        this.page = page;
        this.logo = page.locator('.app_logo');
        this.cartIcon = page.locator('.shopping_cart_link');
    }
}