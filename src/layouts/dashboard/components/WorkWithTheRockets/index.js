import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarRateIcon from '@mui/icons-material/StarRate';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

const DetailBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const StoreDetail = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const StoreName = styled(Link)({
  fontWeight: 'bold',
});

function StoreList({ stores }) {
  return (
    <Box sx={{ width: '100%', marginTop: 2 }}>
      {Object.entries(stores).map(([category, storeList], index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar 
    src={`${process.env.PUBLIC_URL}/icons/${category}.png`} 
    alt={category} 
    sx={{ width: 24, height: 24 }} 
  />
              <Typography variant="h6">{category} ({storeList.length - 1})</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <DetailBox>
              {storeList.slice(1).map((store, idx) => (
                <StoreDetail key={idx}>
                  <StoreName href={store.officialPageUrl} target="_blank" variant="body1">
                    {store.name || category}
                  </StoreName>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarRateIcon sx={{ color: '#FFD700', marginRight: '4px' }} />
                    <Link href={store.googleBusinessPageUrl} target="_blank" color="inherit" underline="hover">
                      <Typography variant="body2" component="span">{store.rating}</Typography>
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon color="primary" />
                    <Typography variant="body2">{parseFloat(store.distance.toFixed(1))} miles</Typography>
                  </Box>
                </StoreDetail>
              ))}
            </DetailBox>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

StoreList.propTypes = {
  stores: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        distance: PropTypes.number.isRequired,
        officialPageUrl: PropTypes.string.isRequired,
        googleBusinessPageUrl: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
};

export default StoreList;


