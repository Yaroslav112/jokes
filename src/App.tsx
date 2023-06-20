import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import JokeList from './components/JokeList';
import { mainContainer } from "./components/constants";

const App: React.FC = () => {
    return (
        <Box sx={mainContainer}>
            <Container>
                <Typography variant="h1" align="center" gutterBottom>
                    Joke List
                </Typography>
                <JokeList />
            </Container>
        </Box>
    );
};

export default App;
