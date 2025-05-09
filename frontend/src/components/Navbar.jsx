import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

const NavBar = ({ isDarkMode, toggleMode }) => {
  return (
    <Box
      display="flex"
      height={64}
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ xs: "column", sm: "row" }}
      sx={{ px: 2 }}
    >
      <Box display="flex" alignItems="center">
        <Typography
          variant="h4"
          component="div"
          sx={{
            background: "linear-gradient(to right,rgb(64, 104, 203),rgb(100, 225, 177))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
          }}
        >
          PRODUCT STORE
        </Typography>
        <ShoppingCartOutlinedIcon sx={{ color: "#1561b3", fontSize: 30 }} />
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <IconButton color="primary" href="/create">
          <AddBoxOutlinedIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton color="primary" onClick={toggleMode}>
          {isDarkMode ? (
            <LightModeIcon sx={{ fontSize: 30 }} />
          ) : (
            <NightlightRoundIcon sx={{ fontSize: 30 }} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavBar;