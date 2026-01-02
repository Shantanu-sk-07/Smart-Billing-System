import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

const Privacy = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            backdropFilter: "blur(10px)",
            background:
              "linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.92))",
          }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Privacy Policy
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Last updated: January 2026
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="h6" fontWeight={600} gutterBottom>
            1. Information We Collect
          </Typography>
          <Typography mb={2}>
            We collect personal details such as name, email, mobile number,
            business information, billing data, and usage analytics to deliver
            secure and efficient ERP services.
          </Typography>

          <Typography variant="h6" fontWeight={600} gutterBottom>
            2. How We Use Your Information
          </Typography>
          <Typography mb={2}>
            • Account creation and authentication  
            <br />
            • Billing, invoicing, and compliance  
            <br />
            • System analytics and performance optimization  
            <br />
            • Legal and regulatory requirements
          </Typography>

          <Typography variant="h6" fontWeight={600} gutterBottom>
            3. Data Security
          </Typography>
          <Typography mb={2}>
            We use enterprise-grade encryption, secure cloud infrastructure,
            access control, and continuous monitoring to protect your data.
          </Typography>

          <Typography variant="h6" fontWeight={600} gutterBottom>
            4. Third-Party Services
          </Typography>
          <Typography mb={2}>
            We may integrate trusted third-party tools for payment processing,
            analytics, and notifications. Your data is never sold.
          </Typography>

          <Typography variant="h6" fontWeight={600} gutterBottom>
            5. Your Rights
          </Typography>
          <Typography>
            You can request data access, correction, export, or deletion at any
            time by contacting our support team.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Privacy;
