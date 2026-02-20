

import {test, expect} from 'playwright/test'
import { LoginPage } from '../Pages/LoginPage'
// import loginData from '../Data/login.json';




test('test', async ({page}) => {


  const Login =new LoginPage(page);
  await Login.gotoLoginPage();
 await Login.login('admin@shophub.com','admin123');


  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('admin@shophub.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Sign In' }).click();

 }
)
