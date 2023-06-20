export interface Joke {
    id: number;
    type: string;
    punchline: string;
    setup: string;
}

export const jokeService = {
    getJokes: async (): Promise<Joke[]> => {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/ten');
        return await response.json();
    },
    addJoke: async (joke: string): Promise<Joke> => {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const data = await response.json();
        const newJoke: { id: number; text: string } = { id: Date.now(), text: joke };
        return { ...data, ...newJoke };
    },
    refreshJoke: async () => {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();

            const joke: { punchline: string; setup: string; id: number; type: string } = {
                id: data.id,
                type: data.type,
                setup: data.setup,
                punchline: data.punchline,
            };

            return joke;
        } catch (error) {
            throw new Error('Failed to fetch joke');
        }
    },
};



