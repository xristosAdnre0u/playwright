const { expect } = require('@playwright/test');
const { default: testData } = require('../testData');

exports.Sidebar = class Sidebar{

    constructor(page){
        this.page = page;
        this.burgerMenu = page.locator('#react-burger-menu-btn');
        this.logoutBtn = page.locator('#logout_sidebar_link');
    }
}