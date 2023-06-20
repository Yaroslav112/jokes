import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Box, Button, Grid} from '@mui/material';
import { RootState } from '../store';
import { fetchJokes, addJoke, deleteJoke } from '../store/JokeSlice';
import JokeCard from "./JokeCard";
import {listContainer, loadMoreButton} from "./constants";

const JokeList: React.FC = () => {
    const dispatch = useDispatch();
    const jokes = useSelector((state: RootState) => state.jokes.items);

    useEffect(() => {
        dispatch<any>(fetchJokes());
    }, [dispatch]);

    const handleLoadMore = () => {
        dispatch<any>(fetchJokes());
    };

    useEffect(() => {
        const storedJokes = localStorage.getItem('jokes');
        if (storedJokes) {
            dispatch<any>(addJoke(JSON.parse(storedJokes)));
        }
    }, [dispatch]);

    const handleAddJoke = () => {
        const newJoke = { id: Date.now(), joke: 'Some new joke' };

        dispatch<any>(addJoke(newJoke.joke));

        localStorage.setItem('jokes', JSON.stringify([...jokes, newJoke]));
    };

    const handleDeleteJoke = (jokeId: number) => {
        dispatch<any>(deleteJoke(jokeId));

        const updatedJokes = jokes.filter((joke) => joke.id !== jokeId);
        localStorage.setItem('jokes', JSON.stringify(updatedJokes));
    };

    return (
        <div style={listContainer}>
            <Grid container spacing={2}>
                {jokes.map((joke) => (
                    <Grid item xs={12} sm={6} md={3} key={joke.id}>
                        <JokeCard
                            joke={joke}
                            onAddJoke={handleAddJoke}
                            onDelete={handleDeleteJoke}
                        />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{marginTop: '45px', backgroundColor: '#747474'}}>
                <Button sx={loadMoreButton} onClick={handleLoadMore}>
                    Load More
                </Button>
            </Box>
        </div>
    );
};

export default JokeList;
