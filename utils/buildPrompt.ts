export default function buildPrompt({ thread }: { thread: string[] }): string {
    return `Craft a forum response to the following thread in 50-100 characters. Keep in mind this is a Golf Forum: ${thread[0]}`
}

// ${thread?.map((reply, i) => `${i+1} :${reply}`)}`
