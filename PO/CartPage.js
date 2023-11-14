const { expect } = require('@playwright/test');
const { default: testData } = require('../testData');

exports.CartPage = class CartPage{

    constructor(page) {
        
        this.page = page;
        this.cartHeader = page.locator('span:has-text("YOUR CART")');

    }
}