/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, {useState} from 'react'
// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";

function Dashboard() {
  // Assuming typography and reportsBarChartData are defined elsewhere correctly
  const { size } = typography; // Ensure 'typography' is defined or imported
  const { chart, items } = reportsBarChartData; // Ensure 'reportsBarChartData' is defined or imported

  const [stores, setStores] = useState({
    "Coffee Shops": [
      { name: "Starbucks", rating: 4.5, distance: 1.2 },
      { name: "Cafe Nero", rating: 4.0, distance: 0.8 },
    ],
    "Retail Stores": [
      { name: "Nike", rating: 4.3, distance: 2.1 },
      { name: "Adidas", rating: 4.1, distance: 2.5 },
    ],
    // Add more categories as needed
  });

  const handlePlaceChange = (p) => {
    const res = {}
    if (p && Object.keys(p).length) {
      Object.keys(p).map(element => {
        res[element] = [{
          category: element.toLowerCase(),
        }] 
        res[element].push(...p[element].map((ele) => {
          return {
          name: ele.name,
          rating: ele.rating,
          distance: ele.distance,
          reviewURL: `https://search.google.com/local/writereview?placeid=${ele.place_id}` }
        })     
      );
      })
      setStores(res); 
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers handlePlaceChange={handlePlaceChange}/>
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets stores={stores}/>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Dashboard;
