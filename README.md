# GolfWRX Reply Bot

This project is a script that automates the process of logging in and posting replies on GolfWRX Forum using Puppeteer.

### Prerequisites

You need to have Node.js and npm installed on your local machine. This project was built using Node.js version 12.16.1 and npm version 6.13.4.

### Installation

1. Clone the repository
- git clone
2. Install the dependencies
- npm install
3. (Recommended) Install [GPT4All](https://gpt4all.io/index.html)
- Download a LLM and enable the local rest API
3. (Alternative) Use prewritten replies in config.ts
- You will need to change the code to use getRandomReply instead of getAIReply
4. Add your credentials in .env
5. Execute the program
- npm run start

## Content Of Replies

This repo was used in conjuction with the [GPT4All](https://gpt4all.io/index.html) client and it's local rest API to generate replies.

To use GPT4All, you will need to install it, download a LLM and enable the local rest API via the settings. There is also an array
of replies in config.ts that could be used by calling the getRandomReply function.


## Usage

The script uses Puppeteer to automate a browser. It logs into a forum using provided credentials, navigates to a specified subforum, selects a random topic, and posts replies.

The AppState interface is used to manage the state of the application, specifically whether it's paused and the count of posts made.

## Config Notes

USERNAME
- The script will avoid posting multiple replies to the same topic, if you login with your username. If you log in with your email address, it may post multiple replies to the same topic. 

MAX_POSTS
- The script will continue to post replies until it reaches a maximum post count. The forum is moderated, if you use this tool to write more than 10 replies per day, you may be banned

MS_BETWEEN_REPLIES_LOWER && MS_BETWEEN_REPLIES_UPPER
- Delay between navigating between topics. This is also to avoid the banhammer

## Built With

- [Puppeteer](https://pptr.dev/): Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.

## Contributing

TBD

## License

TBD