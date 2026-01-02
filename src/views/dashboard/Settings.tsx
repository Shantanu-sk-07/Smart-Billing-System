import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Divider,
  Stack,
  Avatar,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BusinessIcon from "@mui/icons-material/Business";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Settings: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /* ---------------- State ---------------- */
  const [companyName, setCompanyName] = React.useState("ERP Billing Software");
  const [email, setEmail] = React.useState("admin@erpbilling.com");
  const [darkMode, setDarkMode] = React.useState(false);
  const [emailNotify, setEmailNotify] = React.useState(true);
  const [smsNotify, setSmsNotify] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  /* ---------------- Handlers ---------------- */
  const handleSave = () => {
    // 🔥 API call will go here later
    setSuccess(true);
  };

  return (
    <Box>
      {/* ---------- Page Header ---------- */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        mb={3}
      >
        <Avatar sx={{ bgcolor: "primary.main" }}>
          <SettingsIcon />
        </Avatar>
        <Typography variant="h5" fontWeight={600}>
          Settings
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {/* ---------- Company Settings ---------- */}
        <Grid size={{ xs:12,md:6}}>
          <Card elevation={3}>
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <BusinessIcon color="primary" />
                <Typography variant="h6">Company Settings</Typography>
              </Stack>

              <Divider sx={{ mb: 2 }} />

              <TextField
                label="Company Name"
                fullWidth
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                sx={{ mb: 2 }}
              />

              <TextField
                label="Admin Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* ---------- Security Settings ---------- */}
        <Grid size={{ xs:12,md:6}}>
          <Card elevation={3}>
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <LockIcon color="primary" />
                <Typography variant="h6">Security</Typography>
              </Stack>

              <Divider sx={{ mb: 2 }} />

              <TextField
                label="Current Password"
                type="password"
                fullWidth
                sx={{ mb: 2 }}
              />

              <TextField
                label="New Password"
                type="password"
                fullWidth
              />
            </CardContent>
          </Card>
        </Grid>

        {/* ---------- Notification Settings ---------- */}
        <Grid size={{ xs:12,md:6}}>
          <Card elevation={3}>
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <NotificationsIcon color="primary" />
                <Typography variant="h6">Notifications</Typography>
              </Stack>

              <Divider sx={{ mb: 2 }} />

              <FormControlLabel
                control={
                  <Switch
                    checked={emailNotify}
                    onChange={() => setEmailNotify(!emailNotify)}
                  />
                }
                label="Email Notifications"
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={smsNotify}
                    onChange={() => setSmsNotify(!smsNotify)}
                  />
                }
                label="SMS Notifications"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* ---------- App Preferences ---------- */}
        <Grid size={{ xs:12,md:6}}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" mb={2}>
                App Preferences
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <FormControlLabel
                control={
                  <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                }
                label="Enable Dark Mode"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* ---------- Save Button ---------- */}
        <Grid size={{ xs:12}}>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent="flex-end"
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </Stack>
        </Grid>
      </Grid>

      {/* ---------- Success Snackbar ---------- */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" variant="filled">
          Settings saved successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Settings;
