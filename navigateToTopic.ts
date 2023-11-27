import { Page } from 'puppeteer';
import config from './config';
import { state } from './index'
import getRandomReply from './utils/getRandomReply';

interface Params {
  page: Page;
}

async function getTopicList({ page }: Params): Promise<Array<string>> {
    // Wait for the topics to load (adjust the selector as needed)
    await page.waitForSelector('.ipsDataItem_title a');

    // Scrape topic links
    const topicLinks = await page.evaluate(() => {
        const links = document.querySelectorAll('.ipsDataItem_title a') as NodeListOf<HTMLAnchorElement>;
        return Array.from(links, (link) => link.href);
    });
    return topicLinks

};

async function writeReply({ page }: Params): Promise<void> {
    console.log('Writing reply...')
    await page.waitForSelector('div[data-role="editorComposer"]');
    await page.click('div[data-role="editorComposer"]');
    await page.waitForSelector('.cke_wysiwyg_div');
    await page.type('.cke_wysiwyg_div', getRandomReply());
    await page.waitForSelector('button.ipsButton_primary');
    await page.click('button.ipsButton_primary');
}

async function navigateToTopic({ page }: Params): Promise<void> {
    let topicList = await getTopicList({ page });
    // Randomly select a topic
    const randomIndex = Math.floor(Math.random() * topicList.length);
    const randomTopic = topicList[randomIndex];

    // Output the selected topic
    console.log('Navigating to randomly selected topic: ' + randomTopic);
    await page.goto(randomTopic, { waitUntil: 'load' });

    // Check if the page contains the username
    const username = config.USERNAME;
    const userHasPosted = await page.evaluate(() => {
        const posts = Array.from(document.querySelectorAll('.post'));
        for (const post of posts) {
            const author = post.querySelector('.ipsUserPhoto')?.getAttribute('data-ipsusername');
            if (author === username) {
                return true;
            }
        }
        return false;
    });
    if (userHasPosted) {
        console.log('User has posted on this topic already. Skipping topic...');
    } else {
        writeReply({ page });
    }
}



export default navigateToTopic;
