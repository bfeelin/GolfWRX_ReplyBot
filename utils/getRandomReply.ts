import config from '../config';

function getRandomReply(): string {
    const randomIndex = Math.floor(Math.random() * config.REPLIES.length);
    return config.REPLIES[randomIndex];
}

export default getRandomReply;
