import { Page } from 'puppeteer';

interface Params {
  page: Page;
  email: string | undefined;
  password: string | undefined;
}

async function login({ page, email, password }: Params): Promise<void> {
  // Navigate to LinkedIn
  await page.goto('https://forums.golfwrx.com/login/', { waitUntil: 'load' });

  if(typeof email == 'string' && typeof password == 'string'){
    // Enter login credentials and submit the form
    await page.type('input[name="auth"]', email);
    await page.type('input[name="password"]', password);

    await page.click('button[name="_processLogin"]');

    // Wait for the login to complete
    await page.waitForNavigation({ waitUntil: 'load' });

    console.log('Logged in to GolfWrx');
  }


}

export default login;
