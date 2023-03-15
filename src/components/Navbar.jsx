const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export const Navbar = ({ open, handleDrawerClose, handleDrawerOpen }) => {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          {!open ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginLeft: 0,
                marginRight: 5,
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton
              sx={{
                marginRight: 5,
              }}
              color="inherit"
              onClick={handleDrawerClose}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}

          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
