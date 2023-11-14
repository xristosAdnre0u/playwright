import { expect } from '@playwright/test';
import { default as testData } from '../testData';

export class ProductPage {
    constructor(page){
        this.page = page;
        this.addToCartBtn = page.locator('[id^="add-to-cart"]');
        this.removeCartBtn = page.locator('[id^="remove"]');
    }

    async isHeaderDisplayed(headerText) {
        return this.page.locator(`.inventory_details_name.large_size(${headerText})`).isVisible;
        
      }
    

}