async function scrollDown (page) {
  await page.evaluate(() => {
    window.scrollTo(0, window.document.body.scrollHeight);
  });
}

export default scrollDown;
