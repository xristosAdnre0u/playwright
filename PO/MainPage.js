import { expect } from '@playwright/test';
import { default as testData } from '../testData';

export class MainPage{
    constructor(page) 
    {
        
        this.page = page;
        this.logo = page.locator('.app_logo');
        this.cartIcon = page.locator('.shopping_cart_link');
        
    }

    async openProductByName(productName) {
        await this.page.locator(`div.inventory_item_name:has-text("${productName}")`)
        .click();
        
    }
}