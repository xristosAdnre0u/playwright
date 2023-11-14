import { test, expect } from '@playwright/test';
import { LoginPage } from '../PO/LoginPage';
import { MainPage } from '../PO/MainPage';
import { CartPage } from '../PO/CartPage';
import { ProductPage } from '../PO/ProductPage';
import { default as testData } from '../testData';


let loginPage = new LoginPage();
let mainPage = new MainPage();
let productPage = new ProductPage();


test('Add a product', async({page})=> 
{
    
    await test.step('Login with standard user', async() =>
    {
        await loginPage.goTo();
        expect.soft(mainPage.logo).toBeVisible(); 
    });
    
    await test.step('Open Sauce Labs Bike Light product', async () => {
    
        await mainPage.openProductByName('Sauce Labs Bike Light');
        expect.soft(productPage.isHeaderDisplayed('Sauce Labs Bike Light')).toBeTruthy();

    });


})