import { expect } from '@playwright/test';
import { default as testData } from '../testData';

exports.CartPage = class CartPage{

    constructor(page) {
        
        this.page = page;
        this.cartHeader = page.locator('span:has-text("YOUR CART")');

    }
}