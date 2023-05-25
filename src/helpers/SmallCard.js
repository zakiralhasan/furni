import { Box, IconButton, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import product1 from "../../public/assets/images/product-1.png";
import Image from 'next/image';

const SmallCard = ({ img }) => {
    console.log(img)
    return (
        <>
            <Box sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // width: '270px',
                height: '405px',
                '& img': {
                    maxWidth: '189px',
                    maxHeight: '261px'
                },
                '& button': {
                    display: 'none'
                },
                ':hover': {
                    backgroundColor: '#DCE5E4',
                    height: '307px',
                    width: '270px',
                    borderRadius: '20px',
                    '& img': {
                        position: 'absolute',
                        top: '-90px'
                    },
                    '& h5': {
                        marginTop: '245px'
                    },
                    '& button': {
                        display: 'block'
                    }
                }
            }}>
                <Image src={product1} alt='product image'></Image>
                <Typography variant='h5'>Nordic CHAIR</Typography>
                <Typography variant='h6'>$50.00</Typography>
                <IconButton sx={{ color: '#2F2F2F' }}>
                    <AddCircleIcon />
                </IconButton>
            </Box>
        </>
    );
};

export default SmallCard;