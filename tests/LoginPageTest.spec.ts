import { test, expect } from '@playwright/test';
import {LoginData} from "../data/LoginData";
import {LoginPage} from "../pages/LoginPage";

test('Verify login with valid credentials', async ({page}) => {
    const login_data = LoginData();
    const loginPage = new LoginPage(page);
    await loginPage.goToApplication();
    const dashboardPage = await loginPage.doLoginToApplication(login_data.USER_NAME, login_data.PASSWORD);
    await expect(dashboardPage.dashboardText).toBeVisible();
});