import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Joke, jokeService } from '../services/jokeService';

type JokesState = {
    items: Joke[];
    loading: boolean;
    error: string | null;
};

const initialState: JokesState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchJokes = createAsyncThunk('jokes/fetchJokes', async () => {
    try {
        return await jokeService.getJokes();
    } catch (error) {
        throw new Error('Failed to fetch jokes');
    }
});

export const addJoke = createAsyncThunk('jokes/addJoke', async (joke: string) => {
    try {
        return await jokeService.addJoke(joke);
    } catch (error) {
        throw new Error('Failed to add joke');
    }
});

export const deleteJoke = createAsyncThunk('jokes/deleteJoke', async (jokeId: number) => {
    return jokeId;
});

export const refreshJoke = createAsyncThunk('jokes/refreshJoke', async (jokeId: number) => {
    try {
        const newJoke = await jokeService.refreshJoke();
        return { jokeId, newJoke };
    } catch (error) {
        throw new Error('Failed to refresh joke');
    }
});

const jokesSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJokes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJokes.fulfilled, (state, action: PayloadAction<Joke[]>) => {
                state.items = [...state.items, ...action.payload];
                state.loading = false;
            })
            .addCase(fetchJokes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch jokes';
            })
            .addCase(addJoke.fulfilled, (state, action: PayloadAction<Joke>) => {
                state.items.push(action.payload);
            })
            .addCase(deleteJoke.fulfilled, (state, action: PayloadAction<number>) => {
                const jokeId = action.payload;
                state.items = state.items.filter((joke) => joke.id !== jokeId);
            })
            .addCase(refreshJoke.fulfilled, (state, action) => {
                const { jokeId, newJoke } = action.payload;
                state.items = state.items.map((joke) => (joke.id === jokeId ? newJoke : joke));
            });
    },
});

export default jokesSlice.reducer;
