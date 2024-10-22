import { Box, Container, Grid2 } from "@mui/material"; // Change Grid22 to Grid2
import { useLocation } from "react-router-dom";

function ListingPage() {
  const location = useLocation(); // Get the current location object
  console.log(location.pathname); // Optional: Log the current path

  return (
    <Box>
      <Container>
        <Grid2 container>
          <Grid2 item xs={6}>Left Column</Grid2> 
          <Grid2 item xs={6}>Right Column</Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default ListingPage;
