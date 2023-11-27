import puppeteer, { Page } from "puppeteer";
import config from "./config";
import login from "./login";
import navigateToTopic from "./navigateToTopic";

interface AppState {
    paused: boolean;
    post_count: number;
  }
  
  const createAppState = (): {
    getState: () => AppState;
    setPaused: (value: boolean) => void;
    incrementPostCount: () => void;
  } => {
    let paused = false;
    let post_count = 0;
  
    const getState = (): AppState => ({
      paused,
      post_count,
    });
  
    const setPaused = (value: boolean): void => {
      paused = value;
    };
  
    const incrementPostCount = (): void => {
      post_count++;
    };
  
    return {
      getState,
      setPaused,
      incrementPostCount,
    };
  };
  
export const state = createAppState();

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,
        args: ["--disable-setuid-sandbox", "--no-sandbox",]
    });
    const context = await browser.createIncognitoBrowserContext();
    const listingPage = await context.newPage();

    const pages = await browser.pages();

    await pages[0].close();

    await login({
        page: listingPage,
        username: config.USERNAME || "",
        password: config.PASSWORD || ""
    });

    //await listingPage.goto(config.SUBFORUM_URL, { waitUntil: 'load' });

  //while(state.getState().post_count < config.MAX_POSTS){

    // await navigateToTopic({
    //     page: listingPage
    // })
  //}


  // await browser.close();
})();
