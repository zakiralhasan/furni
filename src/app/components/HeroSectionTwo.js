import { Box, Button, Grid, Typography } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Image from 'next/image';
import dotImage from "../../../public/assets/images/dots.png";
import img1 from "../../../public/assets/images/mask group-1.png";
import img2 from "../../../public/assets/images/mask group-2.png";
import img3 from "../../../public/assets/images/mask group-3.png";
import CustomButton from '@/helpers/CustomButton';

const HeroSectionTwo = () => {
    return (
        <div>
            <Box sx={{ maxWidth: '1140px', margin: 'auto', marginBottom: '90px' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', sm: 'column', xs: 'column' },
                    margin: '5px',
                    gap: '270px',
                }}>
                    <Box sx={{
                        position: 'relative',
                        display: { md: 'block', sm: 'none', xs: 'none' },
                        '& .hero-section-side-img-1': {
                            position: 'relative', zIndex: 1
                        },
                        '& .hero-section-side-img-2': {
                            position: 'absolute',
                            zIndex: 2,
                            bottom: '-33px',
                            right: '-230px'
                        },
                        '& .hero-section-side-img-3': {
                            position: 'absolute',
                            zIndex: 1,
                            top: '0',
                            right: '-230px'
                        },
                        '& .hero-section-dot-img': {
                            position: 'absolute',
                            top: '-55px',
                            left: '-112px'
                        },
                    }}>
                        <Image src={img1} alt='decoreted room picture' className='hero-section-side-img-1'></Image>
                        <Image src={img2} alt='decoreted room picture' className='hero-section-side-img-2'></Image>
                        <Image src={img3} alt='decoreted room picture' className='hero-section-side-img-3'></Image>
                        <Image src={dotImage} alt='decoreted room picture' className='hero-section-dot-img'></Image>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='h4' sx={{ marginTop: '55px', marginBottom: '30px' }}>
                            We help  you make Modern Interior Design
                        </Typography>
                        <Typography>
                            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long  post for the text.`This small text has to be place here, since this is a place holder. You can also chane it.
                        </Typography>
                        <Box sx={{
                            flexGrow: 1,
                            Padding: '5px',
                            marginTop: '35px',
                        }}>
                            <Grid container spacing={2} sx={{
                                '& h5': { marginTop: '12px' },
                                marginBottom: '40px'
                            }}>
                                <Grid item xs={6} sx={{ display: 'flex', gap: '12px' }}>
                                    <PanoramaFishEyeIcon sx={{ fontSize: '12px', marginTop: '5px' }}></PanoramaFishEyeIcon>
                                    <Typography>
                                        Donec mattis porta eros,let aliquet finibus ri
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', gap: '12px' }}>
                                    <PanoramaFishEyeIcon sx={{ fontSize: '12px', marginTop: '5px' }}></PanoramaFishEyeIcon>
                                    <Typography>
                                        Donec mattis porta eros,let aliquet finibus ri
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', gap: '12px' }}>
                                    <PanoramaFishEyeIcon sx={{ fontSize: '12px', marginTop: '5px' }}></PanoramaFishEyeIcon>
                                    <Typography>
                                        Donec mattis porta eros,let aliquet finibus ri
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', gap: '12px' }}>
                                    <PanoramaFishEyeIcon sx={{ fontSize: '12px', marginTop: '5px' }}></PanoramaFishEyeIcon>
                                    <Typography>
                                        Donec mattis porta eros,let aliquet finibus ri
                                    </Typography>
                                </Grid>
                            </Grid>
                            <CustomButton ></CustomButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default HeroSectionTwo;