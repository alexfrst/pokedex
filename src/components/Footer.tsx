import { Box, Grid, Typography } from "@mui/material";
import React from "react";
function Footer() {
  return (
    <Box
      sx={{
        position: "bottom",
        width: "100%",
        height: "100%",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          mt: 4,
          pb: 2,
          bgcolor: "text.primary",
          alignItems: "center",
          color: "#FFFFFF",
        }}
      >
        <Grid item xs={6}>
          <Typography variant="h2">Pokepios</Typography>
        </Grid>
        <Grid item xs={3}>
          <Box>The online Pokedex</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Footer;
