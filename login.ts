import { Page } from 'puppeteer';
import config from "./config";

interface Params {
  page: Page;
  username: string;
  password: string;
}

async function login({ page, username, password }: Params): Promise<void> {
  // Navigate to LinkedIn
  await page.goto(config.LOGIN_URL, { waitUntil: 'load' });

    // Enter login credentials and submit the form
    await page.type('input[name="auth"]', username);
    await page.type('input[name="password"]', password);

    await page.click('button[name="_processLogin"]');

    // Wait for the login to complete
    await page.waitForNavigation({ waitUntil: 'load' });

    console.log('Logged in to GolfWrx');
  


}

export default login;
