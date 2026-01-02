// src/layouts/WebsiteLayout.tsx
import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { RoutePaths } from "@/constants/RoutePaths";

const WebsiteLayout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const NavButton = ({ label, to }: { label: string; to: string }) => (
    <Button
      component={Link}
      to={to}
      sx={{
        color: location.pathname === to ? "#ffca28" : "#fff",
        fontWeight: 500,
        textTransform: "none",
        fontSize: 15,
        position: "relative",
        transition: "all 0.3s ease",
        "&:hover": {
          color: "#ffca28",
          transform: "translateY(-2px)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: location.pathname === to ? "100%" : "0%",
          height: 2,
          bottom: -4,
          left: 0,
          backgroundColor: "#ffca28",
          transition: "0.3s",
        },
      }}
    >
      {label}
    </Button>
  );

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* ================= HEADER ================= */}
      <AppBar
        position="sticky"
        elevation={3}
        sx={{
          backdropFilter: "blur(12px)",
          background: "rgba(15, 23, 42, 0.85)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          transition: "0.3s",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            {/* LOGO */}
            <Typography
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                fontSize: 24,
                fontWeight: 800,
                background: "linear-gradient(90deg,#ffca28,#fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transition: "0.3s",
                "&:hover": { opacity: 0.8 },
              }}
            >
              ⚡ Smart Billing Pro
            </Typography>

            {/* DESKTOP MENU */}
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <NavButton label="Home" to={RoutePaths.Landing} />
              <NavButton label="Features" to={RoutePaths.Features} />
              <NavButton label="Pricing" to={RoutePaths.Pricing} />
              <NavButton label="About" to={RoutePaths.About} />
            </Stack>

            {/* ACTION BUTTONS */}
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Button
                component={Link}
                to={RoutePaths.Login}
                variant="outlined"
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 500,
                  px: 2,
                  "&:hover": {
                    borderColor: "#ffca28",
                    color: "#ffca28",
                    transform: "translateY(-2px)",
                  },
                  transition: "0.3s",
                }}
              >
                Login
              </Button>

              <Button
                component={Link}
                to={RoutePaths.Register}
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg,#ffca28,#ffc107)",
                  color: "#000",
                  fontWeight: 600,
                  textTransform: "none",
                  px: 3,
                  "&:hover": { opacity: 0.9, transform: "translateY(-2px)" },
                  transition: "0.3s",
                }}
              >
                Get Started
              </Button>
            </Stack>

            {/* MOBILE MENU ICON */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box width={260} role="presentation">
          <Typography
            p={3}
            fontWeight={700}
            fontSize={20}
            sx={{
              background: "linear-gradient(90deg,#ffca28,#fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Smart Billing Pro
          </Typography>
          <Divider />
          <List>
            {[
              ["Home", RoutePaths.Landing],
              ["Features", RoutePaths.Features],
              ["Pricing", RoutePaths.Pricing],
              ["About", RoutePaths.About],
              ["Login", RoutePaths.Login],
              ["Register", RoutePaths.Register],
            ].map(([text, path]) => (
              <ListItem
                // button
                component={Link}
                to={path}
                key={text}
                onClick={() => setOpen(false)}
                sx={{
                  "&:hover": { backgroundColor: "#ffca28", color: "#000" },
                  transition: "0.3s",
                  borderRadius: 1,
                  mx: 1,
                  my: 0.5,
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* ================= MAIN CONTENT ================= */}
      <Box flex={1} bgcolor="#f8fafc">
        <Outlet />
      </Box>

      {/* ================= FOOTER ================= */}
      <Box
        bgcolor="rgba(15,23,42,0.95)"
        color="#cbd5e1"
        py={8}
        sx={{ transition: "0.3s" }}
      >
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            justifyContent="space-between"
          >
            {/* BRAND */}
            <Box maxWidth={300} mb={{ xs: 4, md: 0 }}>
              <Typography
                fontWeight={800}
                fontSize={22}
                mb={1}
                sx={{
                  background: "linear-gradient(90deg,#ffca28,#fff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Smart Billing Pro
              </Typography>
              <Typography variant="body2" lineHeight={1.8}>
                Next-gen ERP Billing software for modern businesses. Fast,
                secure & scalable.
              </Typography>
            </Box>

            {/* FOOTER LINKS */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 4, sm: 8 }}
            >
              <Box>
                <Typography fontWeight={600} mb={1}>
                  Product
                </Typography>
                <FooterLink to={RoutePaths.Features}>Features</FooterLink>
                <FooterLink to={RoutePaths.Pricing}>Pricing</FooterLink>
              </Box>
              <Box>
                <Typography fontWeight={600} mb={1}>
                  Company
                </Typography>
                <FooterLink to={RoutePaths.About}>About</FooterLink>
              </Box>
              <Box>
                <Typography fontWeight={600} mb={1}>
                  Legal
                </Typography>
                <FooterLink to={RoutePaths.Privacy}>Privacy</FooterLink>
                <FooterLink to={RoutePaths.Termspage}>Terms</FooterLink>
              </Box>
            </Stack>
          </Stack>

          <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />
          <Typography textAlign="center" variant="body2">
            © 2026 Smart Billing Pro. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default WebsiteLayout;

/* ===== Footer Link Component ===== */
const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Typography
    component={Link}
    to={to}
    sx={{
      display: "block",
      textDecoration: "none",
      color: "#94a3b8",
      fontSize: 14,
      mt: 0.5,
      transition: "0.3s",
      "&:hover": { color: "#ffca28", transform: "translateX(2px)" },
    }}
  >
    {children}
  </Typography>
);
