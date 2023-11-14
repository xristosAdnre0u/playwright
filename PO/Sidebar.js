import { expect } from '@playwright/test';
import { default as testData } from '../testData';

export class Sidebar{

    constructor(page){
        this.page = page;
        this.burgerMenu = page.locator('#react-burger-menu-btn');
        this.logoutBtn = page.locator('#logout_sidebar_link');
    }
}