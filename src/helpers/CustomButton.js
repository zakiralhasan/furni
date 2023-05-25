import { Button } from '@mui/material';
import React from 'react';

const CustomButton = () => {
    return (
        <>
            <Button
                variant="outlined"
                sx={{
                    color: '#2F2F2F',
                    border: '1px solid #2F2F2F',
                    borderRadius: '20px',
                    ':hover': {
                        backgroundColor: '#2F2F2F',
                        color: 'white',
                    }
                }}
            >
                Explore
            </Button>
        </>
    );
};

export default CustomButton;