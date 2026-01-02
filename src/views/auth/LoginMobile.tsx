import * as React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Alert,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  /* ---------------- State ---------------- */
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [remember, setRemember] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  /* ---------------- Login Handler ---------------- */
  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);

    // 🔥 Simulate API call
    setTimeout(() => {
      setLoading(false);

      // ✅ Temporary success logic
      if (email === "Sk@gmail.com" && password === "admin123") {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    }, 1500);
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        px: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: isMobile ? "100%" : 420,
          p: 4,
          borderRadius: 4,
          backdropFilter: "blur(12px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))",
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
            <LockOutlined />
          </Box>

          <Typography variant="h5" fontWeight={700}>
            Welcome Back
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Login to continue to ERP Billing
          </Typography>
        </Box>

        {/* ---------- Error ---------- */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {/* ---------- Email ---------- */}
        <TextField
          label="Email Address"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* ---------- Password ---------- */}
        <TextField
          label="Password"
          fullWidth
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 1 }}
        />

        {/* ---------- Remember + Forgot ---------- */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
            }
            label="Remember me"
          />

          <Typography
            variant="body2"
            color="primary"
            sx={{ cursor: "pointer", fontWeight: 500 }}
            onClick={() => navigate("/forgotpassword")}
          >
            Forgot password?
          </Typography>
        </Box>

        {/* ---------- Login Button ---------- */}
        <Button
          fullWidth
          size="large"
          variant="contained"
          onClick={handleLogin}
          disabled={loading}
          sx={{
            py: 1.4,
            borderRadius: 2,
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>

        {/* ---------- Footer ---------- */}
        <Typography
          textAlign="center"
          variant="body2"
          mt={3}
          color="text.secondary"
        >
          Don’t have an account?{" "}
          <Typography
            component="span"
            color="primary"
            fontWeight={600}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Sign up
          </Typography>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
