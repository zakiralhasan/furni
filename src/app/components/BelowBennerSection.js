"use client"

import SmallCard from "@/helpers/SmallCard";
import { Box, Button, Grid, Typography } from "@mui/material";
import product1 from "../../../public/assets/images/product-1.png"
import product2 from "../../../public/assets/images/product-2.png"
import product3 from "../../../public/assets/images/product-3.png"



const BelowBennerSection = () => {
    const products = [product1, product2, product3];
    return (
        <Box sx={{
            display: 'flex',
            gap: '20px',
            flexDirection: { lg: 'row', md: 'column', sm: 'column', xs: 'column' },
            padding: '5px',
            marginBottom: '140px'
        }}>
            <Box sx={{
                display: 'flex',
                gap: '20px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: { lg: '265px', md: '90%' },
                margin: 'auto'
            }}>
                <Typography variant="h3">
                    Crafted with excellent material.
                </Typography>
                <Typography>
                    Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        color: '#2F2F2F',
                        border: '1px solid #2F2F2F',
                        borderRadius: '20px',
                        ':hover': {
                            backgroundColor: '#2F2F2F',
                            color: 'white',
                            border: '1px solid #2F2F2F',
                        }
                    }}
                >
                    Explore
                </Button>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container spacing={{ xs: 2, md: 2 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    sx={{ justifyContent: 'space-between', }}
                >
                    {
                        products.map((product, i) => {
                            return <Grid item key={i} sx={{ margin: 'auto' }}>
                                <SmallCard></SmallCard>
                            </Grid>
                        })
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default BelowBennerSection;