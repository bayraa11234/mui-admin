import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  //   const handleOpenNavMenu = (event) => {
  //     setAnchorElNav(event.currentTarget);
  //   };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  //   const handleCloseNavMenu = () => {
  //     setAnchorElNav(null);
  //   };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box
      sx={{
        background: "#536dfe",
        padding: "15px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Box>
          <button
            style={{
              backgroundColor: "inherit",
              border: "none",
              color: "#fff",
            }}
            type="button"
          >
            <MenuIcon />
          </button>
        </Box>
        <Box sx={{ fontWeight: "700", fontSize: "20px" }}>
          React Material Admin Full
        </Box>
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{ p: 0, marginRight: "15px" }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
        Hi, <strong>Admin</strong>
      </Box>
    </Box>
  );
}
