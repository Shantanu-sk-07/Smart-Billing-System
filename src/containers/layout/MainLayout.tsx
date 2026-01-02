import { AppBar, Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* header */}
      <AppBar enableColorOnDark position="fixed" color="inherit" elevation={0} sx={{ bgcolor: 'background.default' }}>
        <Toolbar sx={{ p: 2 }}>
          {/* <Header /> */}
        </Toolbar>
      </AppBar>

      {/* menu / drawer */}
      {/* <Sidebar /> */}

      {/* main content */}
      {/* <MainContentStyled {...{ borderRadius, open: drawerOpen }}> */}
        <Box sx={{ ...{ px: { xs: 0 } }, minHeight: 'calc(100vh - 128px)', display: 'flex', flexDirection: 'column' }}>
          {/* breadcrumb */}
          {/* <Breadcrumbs /> */}
          <Outlet />
          {/* <Footer /> */}
        </Box>
      {/* </MainContentStyled> */}
    </Box>
  )
}

export default MainLayout