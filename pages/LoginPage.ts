import {Page, Locator} from "@playwright/test";
import {DashboardPage} from "./DashboardPage";

export class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginbutton = page.getByRole('button', { name: 'Login' });
    }

    async goToApplication(): Promise<void>{
        await this.page.goto('/');
    }

    async doLoginToApplication(username: string, password: string): Promise<DashboardPage>{
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
        return new DashboardPage(this.page);
    }
}