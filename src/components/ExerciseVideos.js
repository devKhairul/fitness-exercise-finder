import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const ExerciseVideos = ({ exerciseVideos, name }) => {
    return (
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
            <Typography variant="h3" mb="33px">
                Watch <span style={{ color: '#ff2625', fontWeight: 'bold' }}>{name}</span> exercise videos
            </Typography>

            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{ flexDirection: { lg: 'row' }, gap: {lg: '20px', xs: '0' }}}
            >
                {exerciseVideos?.slice(0,6).map((item, index) => {
                    return (
                        <a key={index}
                            className="exercise-video"
                            href={`https://youtube.com/watch?v=${item.video.videoId}`}
                            target="_blank"
                        >
                            <img src={item.video.thumbnails[0].url} alt={name} />
                        </a>
                    )
                })}
            </Stack>

        </Box>
    )
}

export default ExerciseVideos