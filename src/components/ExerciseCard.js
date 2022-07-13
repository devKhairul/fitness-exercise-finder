import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card" style={{ borderBottom: '2px solid #003049', borderLeft: '2px solid #003049', borderRight: '2px solid #003049' }}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

        <Stack direction="row" justifyContent="center" mb="20px">
            
            <Button sx={{ ml: '21px', color: '#003049', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', padding: "8px 20px"  }}>
                {exercise.bodyPart}
            </Button>
            
            <Button sx={{ ml: '21px', color: '#003049', background: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', padding: "8px 20px"   }}>
                {exercise.target}
            </Button>

        </Stack>

        <Typography ml="20px" color="#003049" fontWeight="bold" mt="11px" pb="30px" textTransform="capitalize" textAlign="center" >
            {exercise.name}
        </Typography>


    </Link>

  )
}

export default ExerciseCard