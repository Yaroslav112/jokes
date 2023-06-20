import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Button } from '@mui/material';
import { Joke } from "../services/jokeService";
import {
    buttonContainer,
    cardContainer,
    cardHeaderText,
    colorWhite,
    infoText,
    sxButton,
    textContainer
} from "./constants";
import { useDispatch } from "react-redux";
import { refreshJoke } from  "../store/JokeSlice"

type JokeCardProps = {
    joke: Joke;
    onAddJoke: () => void;
    onDelete: (arg0: number) => void;
};

const JokeCard: React.FC<JokeCardProps> = ({
    joke,
    onAddJoke,
    onDelete,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch()

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleRefresh = () => {
        dispatch<any>(refreshJoke(joke.id));
    };

    return (
        <Card
            sx={cardContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={colorWhite} fontSize='14px'>
                            Type:
                        </Typography>
                        <Typography sx={cardHeaderText}>
                            {joke.type}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={cardHeaderText}>
                            ID #{joke.id}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={textContainer}>
                    <Typography sx={colorWhite} variant="body2">
                        Setup:
                    </Typography>
                    <Typography sx={infoText} variant="body2">
                        {joke.setup}
                    </Typography>
                    <Typography sx={colorWhite} variant="body2">
                        Punchline:
                    </Typography>
                    <Typography sx={infoText} variant="body2">
                        {joke.punchline}
                    </Typography>
                </Box>
                {isHovered && (
                    <Box sx={buttonContainer}>
                        <Button sx={sxButton} onClick={onAddJoke}>
                            Add Joke
                        </Button>
                        <Button sx={sxButton} onClick={() => onDelete(joke.id)}>
                            Delete
                        </Button>
                        <Button sx={sxButton} onClick={handleRefresh}>
                            Refresh
                        </Button>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default JokeCard;
