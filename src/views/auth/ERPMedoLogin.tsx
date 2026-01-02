import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Card,
} from "@mui/material";
import { FormProvider, useForm, Controller } from "react-hook-form";
import TextField from "@/components/controlled/TextInputField";
import PasswordField from "@/components/controlled/PasswordField";
import { useNavigate } from "react-router-dom";

type LoginFormValues = {
  username: string;
  password: string;
  rememberMe: boolean;
};

const MedicalERPLogin: React.FC = () => {
  const methods = useForm<LoginFormValues>({
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    mode: "onChange",
  });

  const { handleSubmit, reset } = methods;
  const navigate = useNavigate();

  const handleLogin = (data: LoginFormValues) => {
    console.log("Medical ERP Login:", data);
    reset();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #E0F7FA, #80DEEA, #26C6DA)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* === Soft Background Shapes === */}
      <Box
        component="svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          width: "120%",
          height: "120%",
          top: "-10%",
          left: "-10%",
          zIndex: 0,
        }}
      >
        <path
          d="M0,400 C400,200 800,600 1440,300 L1440,900 L0,900 Z"
          fill="#B2EBF2"
          opacity="0.3"
        />
        <path
          d="M0,600 C500,400 900,800 1440,500 L1440,900 L0,900 Z"
          fill="#4DD0E1"
          opacity="0.25"
        />
      </Box>

      {/* === LOGIN CARD === */}
      <Card
        elevation={12}
        sx={{
          zIndex: 1,
          width: "100%",
          maxWidth: 450,
          p: 5,
          borderRadius: 4,
          backdropFilter: "blur(6px)",
          background: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          animation: "fadeUp 0.8s ease",
          "@keyframes fadeUp": {
            from: { opacity: 0, transform: "translateY(30px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        {/* === TITLE === */}
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          sx={{ color: "#00796B", mb: 1 }}
        >
          ERP Medical Billing
        </Typography>

        <Typography
          textAlign="center"
          sx={{ color: "#555", mb: 4, fontSize: 14 }}
        >
          Secure Healthcare Financial Management
        </Typography>

        {/* === FORM === */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleLogin)} noValidate>
            <TextField
              fullWidth
              label="Username"
              name="username"
              inputType="textarea"
              rows={1}
              required
              sx={{
                mb: 2,
                "& .MuiInputBase-root": {
                  backgroundColor: "#E0F7FA",
                  borderRadius: 2,
                },
              }}
            />

            <PasswordField
              fullWidth
              label="Password"
              name="password"
              required
              sx={{
                mb: 2,
                "& .MuiInputBase-root": {
                  backgroundColor: "#E0F7FA",
                  borderRadius: 2,
                },
              }}
            />

            <Controller
              name="rememberMe"
              control={methods.control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} sx={{ color: "#00796B" }} />}
                  label="Remember me"
                  sx={{ mb: 3 }}
                />
              )}
            />

            <Button
              fullWidth
              type="submit"
              sx={{
                py: 1.8,
                borderRadius: 3,
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                background: "linear-gradient(90deg, #00BFA5, #00796B)",
                color: "#fff",
                boxShadow: "0 4px 15px rgba(0,191,165,0.4)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(90deg, #00796B, #00BFA5)",
                  boxShadow: "0 6px 20px rgba(0,191,165,0.6)",
                },
              }}
            >
              Login
            </Button>

            <Typography textAlign="center" mt={3} fontSize={14} color="#555">
              Don’t have an account?{" "}
              <Button
                onClick={() => navigate("/pages/SignUp")}
                sx={{
                  color: "#00796B",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Sign Up
              </Button>
            </Typography>
          </form>
        </FormProvider>
      </Card>
    </Box>
  );
};

export default MedicalERPLogin;
