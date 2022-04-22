import { Box, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Box
      sx={{
        ly: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
        height="70"
      />
      <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
        Pokepios
      </Typography>
    </Box>
  );
}
export default Header;
