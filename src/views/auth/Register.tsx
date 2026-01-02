import * as React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
  CircularProgress,
  Alert,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  PersonAddAlt,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  /* ---------------- State ---------------- */
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  /* ---------------- Handlers ---------------- */
  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleRegister = () => {
    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    // 🔥 Simulated API
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1500);
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        px: 2,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: isMobile ? "100%" : 450,
          p: 4,
          borderRadius: 4,
          backdropFilter: "blur(14px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.9))",
        }}
      >
        {/* ---------- Header ---------- */}
        <Box textAlign="center" mb={3}>
          <Box
            mx="auto"
            mb={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={56}
            height={56}
            borderRadius="50%"
            bgcolor="primary.main"
            color="white"
          >
            <PersonAddAlt />
          </Box>

          <Typography variant="h5" fontWeight={700}>
            Create Account
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Start using ERP Billing Software
          </Typography>
        </Box>

        {/* ---------- Error ---------- */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {/* ---------- Full Name ---------- */}
        <TextField
          label="Full Name"
          fullWidth
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* ---------- Email ---------- */}
        <TextField
          label="Email Address"
          fullWidth
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* ---------- Password ---------- */}
        <TextField
          label="Password"
          fullWidth
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />

        {/* ---------- Confirm Password ---------- */}
        <TextField
          label="Confirm Password"
          fullWidth
          type={showConfirm ? "text" : "password"}
          value={form.confirmPassword}
          onChange={(e) =>
            handleChange("confirmPassword", e.target.value)
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />

        {/* ---------- Register Button ---------- */}
        <Button
          fullWidth
          size="large"
          variant="contained"
          onClick={handleRegister}
          disabled={loading}
          sx={{
            py: 1.4,
            borderRadius: 2,
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Create Account"
          )}
        </Button>

        {/* ---------- Login Link ---------- */}
        <Typography
          textAlign="center"
          variant="body2"
          mt={3}
          color="text.secondary"
        >
          Already have an account?{" "}
          <Typography
            component="span"
            color="primary"
            fontWeight={600}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </Typography>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
