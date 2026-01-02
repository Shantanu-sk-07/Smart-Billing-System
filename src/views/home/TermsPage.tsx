import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

const Terms = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#232526,#414345)",
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background:
              "linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.92))",
          }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Terms & Conditions
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Effective from January 2026
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="h6" fontWeight={600} gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography mb={2}>
            By accessing or using ERP Billing Software, you agree to comply with
            these terms and all applicable laws.
          </Typography>

          <Typography variant="h6" fontWeight={600} gutterBottom>
            2. Account Responsibility
          </Typography>
          <Typography mb={2}>
            You are responsible for maintaining account confidentiality and all
            activities under your account.
          </Typography>

          <Typography variant="h6" fontWeight={600} gutterBottom>
            3. Usage Restrictions
          </Typography>
          <Typography mb={2}>
            You must not misuse the platform, attempt unauthorized access, or
            violate any regulations.
          </Typography>

          <Typography variant="h6" fontWeight={600} gutterBottom>
            4. Service Availability
          </Typography>
          <Typography mb={2}>
            We aim for 99.9% uptime but do not guarantee uninterrupted service
            due to maintenance or external factors.
          </Typography>

          <Typography variant="h6" fontWeight={600} gutterBottom>
            5. Termination
          </Typography>
          <Typography>
            We reserve the right to suspend or terminate accounts violating our
            policies without prior notice.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Terms;
