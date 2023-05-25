"use client"

import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import couch from '../../../public/assets/images/couch.png';
import dot from '../../../public/assets/images/Dot.png';
import { styled } from '@mui/system';
const Banner = () => {

    const StyledBanner = styled('div')({
        maxWidth: '1140px',
        margin: 'auto',
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px',
        // flexDirection: { md: 'row', xs: 'column' }
    });

    return (
        <>
            <Box sx={{ maxWidth: '1500px', backgroundColor: '#3B5D50', marginBottom: '140px' }}>
                <StyledBanner >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px',
                        marginTop: '50px',
                        marginBottom: '50px',
                        flexGrow: 1,
                    }}>
                        <Typography
                            variant='h3'
                            color={'white'}
                        >
                            Modern Interior <br /> Design Studio
                        </Typography>
                        <Box sx={{
                            '&  button': {
                                borderRadius: '20px',
                                margin: '5px',
                                color: 'white',
                                border: '1px solid white',
                                ':hover': {
                                    backgroundColor: '#F9BF29',
                                    color: 'inherit'
                                }
                            },
                        }}>
                            <Button variant="outlined">Shop Now</Button>
                            <Button variant="outlined">Explore</Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { md: 'block', xs: 'none' },
                            position: 'relative',
                            maxWidth: '50%',
                            '& >.couch-img': { position: 'relative', maxWidth: '100%', height: 'auto', objectFit: 'cover', margin: 'auto', zIndex: 1 },
                            '& >.dot-img': { position: 'absolute', top: '50px', right: '0px', maxWidth: '100%', height: 'auto', }
                        }}>
                        <Image src={couch} alt='banner image' className='couch-img'></Image>
                        <Image src={dot} alt='banner image' className='dot-img'></Image>
                    </Box>
                </StyledBanner>
            </Box>
        </>
    );
};

export default Banner;