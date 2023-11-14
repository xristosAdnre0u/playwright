import { test, expect } from '@playwright/test';
import { LoginPage } from '../PO/LoginPage';
import { MainPage } from '../PO/MainPage';
import { CartPage } from '../PO/CartPage';
import { ProductPage } from '../PO/ProductPage';

test('Add a product', async({page})=> 
{
    
    await test.step('Login with standard user', async() =>
    {
        const loginPage = new LoginPage(page);
        const mainPage = new MainPage(page);
        await loginPage.goTo();
        await loginPage.login('standardUser');
        expect.soft(mainPage.logo).toBeVisible(); 
    }); 
    
    

    await test.step('Open Sauce Labs Bike Light product', async () => {

        const mainPage = new MainPage(page);
        const productPage = new ProductPage(page);
        await mainPage.openProductByName('Sauce Labs Bike Light');
        expect.soft(productPage.isHeaderDisplayed('Sauce Labs Bike Light')).toBeTruthy();

    });

    await test.step('Add product to cart', async () => {
        const productPage = new ProductPage(page)
        await productPage.addToCartBtn.click();
        await expect.soft(productPage.removeCartBtn).toBeVisible();
       
      });
      
      await test.step('Go to cart', async () => {
        const mainPage = new MainPage(page)
        const cartPage = new CartPage(page);
        await mainPage.cartIcon.click();
        await expect.soft(cartPage.cartHeader).toBeVisible();
        
      });


})