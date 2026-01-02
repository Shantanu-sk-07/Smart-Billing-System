import * as React from "react";
import { styled, Theme, CSSObject, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft,
  Dashboard,
  Receipt,
  ShoppingCart,
  People,
  Inventory,
  Assessment,
  Settings,
} from "@mui/icons-material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RoutePaths } from "@/constants/RoutePaths";

/* ---------------- CONSTANTS ---------------- */
const DRAWER_WIDTH = 260;

/* ---------------- STYLES ---------------- */
const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "linear-gradient(180deg,#1e3a8a,#3b82f6)",
  color: "#fff",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: "linear-gradient(180deg,#1e3a8a,#3b82f6)",
  color: "#fff",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: "#1f2937",
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

/* ---------------- MENU CONFIG ---------------- */
interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const MENU_ITEMS: MenuItem[] = [
  { label: "Dashboard", icon: <Dashboard />, path: RoutePaths.Dashboard },
  { label: "Invoices", icon: <Receipt />, path: RoutePaths.Invoices },
  { label: "Sales / Billing", icon: <ShoppingCart />, path: RoutePaths.Sales },
  { label: "Customers", icon: <People />, path: RoutePaths.Customers },
  { label: "Inventory", icon: <Inventory />, path: RoutePaths.Inventory },
  { label: "Reports", icon: <Assessment />, path: RoutePaths.Reports },
  { label: "Settings", icon: <Settings />, path: RoutePaths.Settings },
];

/* ---------------- REUSABLE STYLES ---------------- */
const getButtonStyles = (
  open: boolean,
  isActive: boolean
): CSSObject => ({
  minHeight: 48,
  justifyContent: open ? "initial" : "center",
  px: 2.5,
  borderRadius: 2,
  mx: 1,
  my: 0.5,
  color: "#fff",
  backgroundColor: isActive ? "#facc15" : "transparent",
  "&.Mui-selected": {
    backgroundColor: "#facc15",
    color: "#000",
    "& .MuiListItemIcon-root": { color: "#000" },
  },
  "&:hover": {
    backgroundColor: isActive ? "#facc15" : "rgba(255,255,255,0.1)",
  },
  transition: "all 0.3s",
  display: "flex",
  alignItems: "center",
});

/* ---------------- COMPONENT ---------------- */
const DashboardLayout: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(!isMobile);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const handleDrawerToggle = () => {
    if (isMobile) setMobileOpen(!mobileOpen);
    else setOpen(!open);
  };

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: open || isMobile ? "space-between" : "center",
            px: 2,
            color: "#fff",
          }}
        >
          {(open || isMobile) && (
            <Typography variant="subtitle1" fontWeight={600}>
              ERP Billing
            </Typography>
          )}
          <IconButton
            onClick={() => (isMobile ? setMobileOpen(false) : setOpen(false))}
            sx={{ color: "#fff" }}
          >
            <ChevronLeft />
          </IconButton>
        </Toolbar>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
        <List sx={{ flexGrow: 1 }}>
          {MENU_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
                <Tooltip
                  title={!open && !isMobile ? item.label : ""}
                  placement="right"
                  arrow
                >
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path);
                      if (isMobile) setMobileOpen(false);
                    }}
                    selected={isActive}
                    sx={getButtonStyles(open, isActive)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open || isMobile ? 3 : "auto",
                        justifyContent: "center",
                        color: "#fff",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={{ opacity: open || isMobile ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* ----------------- ADD NEW INVOICE BUTTON ----------------- */}
      <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
        <Tooltip title="Add New Invoice" placement="top" arrow>
          <ListItemButton
            onClick={() => navigate(RoutePaths.Invoices)}
            sx={getButtonStyles(open, location.pathname === RoutePaths.Invoices)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open || isMobile ? 3 : "auto",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <Receipt />
            </ListItemIcon>
            <ListItemText
              primary={open || isMobile ? "Add New Invoice" : ""}
              sx={{ opacity: open || isMobile ? 1 : 0 }}
            />
          </ListItemButton>
        </Tooltip>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open && !isMobile}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" fontWeight={600} noWrap>
            ERP Billing System
          </Typography>
        </Toolbar>
      </AppBar>

      {isMobile ? (
        <MuiDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              background: "linear-gradient(180deg,#1e3a8a,#3b82f6)",
              color: "#fff",
            },
          }}
        >
          {drawerContent}
        </MuiDrawer>
      ) : (
        <Drawer variant="permanent" open={open}>
          {drawerContent}
        </Drawer>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          backgroundColor: "#f3f4f6",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
