import { Page } from 'puppeteer';
import config from './config';

interface Params {
  page: Page;
}

async function checkIfAlreadyPosted({ page }: Params): Promise<boolean> {
    // Check if the page contains the username
    const username = config.USERNAME;
      // Check if the user has already posted a reply
    await page.evaluate((username) => {
        console.log('Checking if user has posted on this topic already...')
        const replies = Array.from(document.querySelectorAll('.cPost'));
        for (const reply of replies) {
            const authorElement = reply.querySelector('.ipsType_break') as HTMLElement;
            if (authorElement && authorElement.innerText?.trim() === username) {
                return true;
            }
        }
        return false;
    }, username);
    return false
}

export default checkIfAlreadyPosted;
