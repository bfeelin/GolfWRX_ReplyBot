import { Page } from 'puppeteer';
import wait from '../utils/wait';

interface Params {
  page: Page;
}

async function getThread({ page }: Params): Promise<Array<string>> {
  // Wait for the necessary content to load (you may need to adjust the waiting time)
  await page.waitForSelector('div[data-role="commentContent"]');
  await wait(2000)

  // Extract the thread responses
  const responses = await page.evaluate(() => {
    const responseElements = document.querySelectorAll('div[data-role="commentContent"]');
    const responses: string[] = [];

    responseElements.forEach((element) => {
      responses.push(element?.textContent?.trim() || '');
    });

    return responses;
  });
  return responses; 
}

export default getThread;
