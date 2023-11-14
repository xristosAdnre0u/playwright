// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PO/LoginPage');
const { MainPage } = require('../PO/MainPage');
const { default: testData } = require('../testData');
const { Sidebar } = require('../PO/Sidebar');

test('Login with user', async({page})=>
{
   await test.step('Login with standar user', async ()=>
   {
      const loginPage = new LoginPage(page);
      const mainpage = new MainPage(page);
      await loginPage.goTo();
      await loginPage.login('standardUser');
      await expect.soft(mainpage.logo).toBeVisible();
   });

   await test.step('Click on the sidebar button', async()=>
   {
      const sidebar = new Sidebar(page);
      await sidebar.burgerMenu.click();
   });

   await test.step('Logout with standard user', async () => {
      const sidebar = new Sidebar(page)
      const loginPage = new LoginPage(page)
      await sidebar.logoutBtn.click();
      await expect(loginPage.loginLogo).toBeVisible();
    });
   
});
    
   