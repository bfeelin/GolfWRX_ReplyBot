import { Page } from 'puppeteer';
import config from "../config";
import wait from '../utils/wait';

interface Params {
  page: Page;
  username: string;
  password: string;
}

async function login({ page, username, password }: Params): Promise<void> {
    await page.goto(config.LOGIN_URL, { waitUntil: 'load' });
    console.log("Logging into user: " + username)
    // Enter login credentials and submit the form
    await page.type('input[name="auth"]', username);
    await wait(2000)
    await page.type('input[name="password"]', password);
    await wait(5000)

    await page.click('button[name="_processLogin"]');

    // Wait for the login to complete
    // await page.waitForNavigation({ waitUntil: 'load' });

    console.log('Logged in to GolfWrx');
    return
}

export default login;
