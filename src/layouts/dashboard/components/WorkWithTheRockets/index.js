// /**
// =========================================================
// * Soft UI Dashboard React - v4.0.1
// =========================================================

// * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // @mui material components
// import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";

// // Soft UI Dashboard React components
// import SoftBox from "components/SoftBox";
// import SoftTypography from "components/SoftTypography";

// // Images
// import ivancik from "assets/images/ivancik.jpg";

// function WorkWithTheRockets() {
//   return (
//     <Card sx={{ height: "100%" }}>
//       <SoftBox position="relative" height="100%" p={2}>
//         <SoftBox
//           display="flex"
//           flexDirection="column"
//           height="100%"
//           py={2}
//           px={2}
//           borderRadius="lg"
//           sx={{
//             backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
//               `${linearGradient(
//                 rgba(gradients.dark.main, 0.8),
//                 rgba(gradients.dark.state, 0.8)
//               )}, url(${ivancik})`,
//             backgroundSize: "cover",
//           }}
//         >
//           <SoftBox mb={3} pt={1}>
//             <SoftTypography variant="h5" color="white" fontWeight="bold">
//               Work with the rockets
//             </SoftTypography>
//           </SoftBox>
//           <SoftBox mb={2}>
//             <SoftTypography variant="body2" color="white">
//               Wealth creation is an evolutionarily recent positive-sum game. It is all about who
//               take the opportunity first.
//             </SoftTypography>
//           </SoftBox>
//           <SoftTypography
//             component="a"
//             href="#"
//             variant="button"
//             color="white"
//             fontWeight="medium"
//             sx={{
//               mt: "auto",
//               mr: "auto",
//               display: "inline-flex",
//               alignItems: "center",
//               cursor: "pointer",

//               "& .material-icons-round": {
//                 fontSize: "1.125rem",
//                 transform: `translate(2px, -0.5px)`,
//                 transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
//               },

//               "&:hover .material-icons-round, &:focus  .material-icons-round": {
//                 transform: `translate(6px, -0.5px)`,
//               },
//             }}
//           >
//             Read More
//             <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
//           </SoftTypography>
//         </SoftBox>
//       </SoftBox>
//     </Card>
//   );
// }

// export default WorkWithTheRockets;

// import React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Typography from '@mui/material/Typography';
// import PropTypes from 'prop-types';
// import { Box } from '@mui/system';

// function StoreList({ stores }) {
//   return (
//     <Box sx={{ width: '100%', marginTop: 2 }}>
//       {Object.entries(stores).map(([category, storeList], index) => (
//         <Accordion key={index}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls={`panel${index}-content`}
//             id={`panel${index}-header`}
//           >
//             <Typography>{category} ({storeList.length})</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//               {storeList.map((store, idx) => (
//                 <Typography key={idx}>
//                   {store.name} - Rating: {store.rating} - {store.distance} miles
//                 </Typography>
//               ))}
//             </Box>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </Box>
//   );
// }

// StoreList.propTypes = {
//   stores: PropTypes.objectOf(
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         rating: PropTypes.number.isRequired,
//         distance: PropTypes.number.isRequired,
//       })
//     )
//   ).isRequired,
// };

// export default StoreList;

// import React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import StarRateIcon from '@mui/icons-material/StarRate';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
// import PropTypes from 'prop-types';

// const DetailBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: theme.spacing(1),
// }));

// const StoreDetail = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: theme.spacing(2),
// }));

// const StoreName = styled(Typography)({
//   fontWeight: 'bold',
// });

// function StoreList({ stores }) {
//   return (
//     <Box sx={{ width: '100%', marginTop: 2 }}>
//       {Object.entries(stores).map(([category, storeList], index) => (
//         <Accordion key={index}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls={`panel${index}-content`}
//             id={`panel${index}-header`}
//           >
//             <Typography variant="h6">{category} ({storeList.length})</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <DetailBox>
//               {storeList.map((store, idx) => (
//                 <StoreDetail key={idx}>
//                   <StoreName variant="body1">{store.name}</StoreName>
//                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <StarRateIcon sx={{ color: '#FFD700', marginRight: '4px' }} />
//                     <Typography variant="body2">{store.rating}</Typography>
//                   </Box>
//                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <LocationOnIcon color="primary" />
//                     <Typography variant="body2">{store.distance} miles</Typography>
//                   </Box>
//                 </StoreDetail>
//               ))}
//             </DetailBox>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </Box>
//   );
// }

// StoreList.propTypes = {
//   stores: PropTypes.objectOf(
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         rating: PropTypes.number.isRequired,
//         distance: PropTypes.number.isRequired,
//       })
//     )
//   ).isRequired,
// };

// export default StoreList;

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


