
import { Padding } from '@mui/icons-material';
// import Grid from '@mui/material/Grid';
import { Box, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Image from 'next/image';
import img1 from "../../../public/assets/images/why-choose-us-img.png";
import dotImage from "../../../public/assets/images/Dot.png";

const HeroSectionOne = () => {
    const arr = [1, 2, 3, 4]
    return (
        <Box sx={{ maxWidth: '1140px', margin: 'auto', marginBottom: '106px' }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { md: 'row', sm: 'column', xs: 'column' },
                margin: '5px',
                gap: '108px',
            }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant='h4' sx={{ marginBottom: '30px' }}>Why Choose Us</Typography>
                    <Typography>
                        Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.
                    </Typography>
                    <Box sx={{
                        flexGrow: 1,
                        Padding: '5px',
                        marginTop: '90px'
                    }}>
                        <Grid container spacing={2} sx={{
                            '& h5': { marginTop: '12px', marginBottom: '9px' },

                        }}>
                            <Grid item xs={6}>
                                <LocalShippingIcon></LocalShippingIcon>
                                <Typography variant='h5'>
                                    Fast  & Free Shipping
                                </Typography>
                                <Typography>
                                    Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                                </Typography>
                            </Grid>
                            <Grid item xs={6} >
                                <LocalShippingIcon></LocalShippingIcon>
                                <Typography variant='h5'>
                                    Fast  & Free Shipping
                                </Typography>
                                <Typography>
                                    Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                                </Typography>
                            </Grid>
                            <Grid item xs={6} >
                                <LocalShippingIcon></LocalShippingIcon>
                                <Typography variant='h5'>
                                    Fast  & Free Shipping
                                </Typography>
                                <Typography>
                                    Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                                </Typography>
                            </Grid>
                            <Grid item xs={6} >
                                <LocalShippingIcon></LocalShippingIcon>
                                <Typography variant='h5'>
                                    Fast  & Free Shipping
                                </Typography>
                                <Typography>
                                    Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box sx={{
                    position: 'relative',
                    display: { md: 'block', sm: 'none', xs: 'none' },
                    '& .hero-section-side-img': { position: 'relative', zIndex: 1 },
                    '& .hero-section-dot-img': {
                        position: 'absolute',
                        top: '-55px',
                        left: '-80px'
                    },
                }}>
                    <Image src={img1} alt='decoreted room picture' className='hero-section-side-img'></Image>
                    <Image src={dotImage} alt='decoreted room picture' className='hero-section-dot-img'></Image>
                </Box>

            </Box>
        </Box>
    );
};

export default HeroSectionOne;