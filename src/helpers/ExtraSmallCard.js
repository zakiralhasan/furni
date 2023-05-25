import { Box, Icon, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const ExtraSmallCard = () => {
    return (
        <Box sx={{
            maxWidth: '247px',
            '& h5': { marginTop: '12px', marginBottom: '9px' }
        }}>
            <LocalShippingIcon></LocalShippingIcon>
            <Typography variant='h5'>
                Fast  & Free Shipping
            </Typography>
            <Typography>
                Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
            </Typography>
        </Box>
    );
};

export default ExtraSmallCard;