import { Page } from 'puppeteer';
import { state } from '../index'
import wait from '../utils/wait';
import scrollDown from '../utils/scrollDown'

interface Params {
  page: Page;
  reply: string
}

async function writeReply({ page, reply }: Params): Promise<void> {
    console.log('Writing reply...');
    await wait(5000);
    await scrollDown(page);
    await page.waitForSelector('div[data-role="editorComposer"]');
    await page.click('div[data-role="editorComposer"]');
    await wait(5000)
    await page.waitForSelector('.cke_wysiwyg_div');
    await wait(5000)
    await page.type('.cke_wysiwyg_div', reply);
    await page.waitForSelector('button.ipsButton_primary');
    await wait(5000)
    await page.click('button.ipsButton_primary');
    state.incrementPostCount()
}

export default writeReply;
