// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../PO/LoginPage';
import { MainPage } from '../PO/MainPage';
import { Sidebar } from '../PO/Sidebar';

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
    
   