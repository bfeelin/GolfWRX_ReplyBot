import { Page } from 'puppeteer';
import { state } from '../index'
import wait from '../utils/wait';

interface Params {
  page: Page;
  reply: string
}

async function writeReply({ page, reply }: Params): Promise<void> {
    console.log('Writing reply...')
    await page.waitForSelector('div[data-role="editorComposer"]');
    await page.click('div[data-role="editorComposer"]');
    await wait(2000)
    await page.waitForSelector('.cke_wysiwyg_div');
    await page.type('.cke_wysiwyg_div', reply);
    await page.waitForSelector('button.ipsButton_primary');
    await page.click('button.ipsButton_primary');
    state.incrementPostCount()
}

export default writeReply;
