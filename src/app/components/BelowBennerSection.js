"use client"

import SmallCard from "@/helpers/SmallCard";
import { Box, Button, Grid, Typography } from "@mui/material";
import product1 from "../../../public/assets/images/product-1.png"
import product2 from "../../../public/assets/images/product-2.png"
import product3 from "../../../public/assets/images/product-3.png"
import CustomButton from "@/helpers/CustomButton";



const BelowBennerSection = () => {
    const products = [product1, product2, product3];
    return (
        <Box sx={{ maxWidth: '1140px', margin: 'auto', }}>
            <Box sx={{
                display: 'flex',
                gap: '20px',
                flexDirection: { md: 'row', sm: 'column', xs: 'column' },
                padding: '5px',
                marginBottom: '140px'
            }}>
                <Box sx={{
                    display: 'flex',
                    gap: '20px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: { md: '265px', sm: '90%' },
                    margin: 'auto',
                    marginBottom: { xs: '75px' }
                }}>
                    <Typography variant="h3">
                        Crafted with excellent material.
                    </Typography>
                    <Typography>
                        Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.
                    </Typography>
                    <CustomButton></CustomButton>
                </Box>

                <Box sx={{ flexGrow: 1, }}>
                    <Grid
                        container spacing={2}
                        columns={{ lg: '4' }}
                        sx={{ justifyContent: 'space-around' }}
                    >
                        {
                            products.map((product, i) => {
                                return <Grid item key={i} sx={{}}>
                                    <SmallCard></SmallCard>
                                </Grid>
                            })
                        }
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default BelowBennerSection;