import { Page } from 'puppeteer';

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


async function navigateToTopic({ page }: Params): Promise<void> {
    let topicList = await getTopicList({ page });
    // Randomly select a topic
    const randomIndex = Math.floor(Math.random() * topicList.length);
    const randomTopic = topicList[randomIndex];

    // Output the selected topic
    console.log('Navigating to randomly selected topic: ' + randomTopic);
    await page.goto(randomTopic, { waitUntil: 'load' });
}



export default navigateToTopic;
