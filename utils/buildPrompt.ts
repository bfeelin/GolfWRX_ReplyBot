export default function buildPrompt({ thread }: { thread: string[] }): string {
    return `Craft a forum response to the following thread in a maximum of 200 characters: ${thread[0]}`
}

// ${thread?.map((reply, i) => `${i+1} :${reply}`)}`
