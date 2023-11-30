import { Page } from 'puppeteer';
import wait from '../utils/wait';

interface Params {
  page: Page;
}

async function getThread({ page }: Params): Promise<Array<string>> {
  // Wait for the necessary content to load (you may need to adjust the waiting time)
  try{
    await wait(5000)
    await page.waitForSelector('div[data-role="commentContent"]');
    await wait(5000)
  
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
  catch(err){
    console.log('Error in function getThread: ' + err)
    return ['Error']
  }
  
}

export default getThread;
