import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";

const About = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#141e30,#243b55)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          color="white"
          mb={2}
        >
          About ERP Billing Software
        </Typography>

        <Typography
          textAlign="center"
          color="rgba(255,255,255,0.8)"
          mb={6}
        >
          Modern. Secure. Scalable. Built for the future of business.
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              icon: <BusinessIcon fontSize="large" />,
              title: "Who We Are",
              desc: "A next-generation ERP billing platform built for startups, SMEs, and enterprises.",
            },
            {
              icon: <SpeedIcon fontSize="large" />,
              title: "Our Mission",
              desc: "To simplify billing, accounting, and operations using automation and smart insights.",
            },
            {
              icon: <SecurityIcon fontSize="large" />,
              title: "Our Technology",
              desc: "Cloud-native, highly secure, fast, and scalable infrastructure designed for 2026+.",
            },
          ].map((item, i) => (
            <Grid size={{ xs:12,md:4}} key={i}>
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  height: "100%",
                  background:
                    "linear-gradient(180deg,rgba(255,255,255,0.97),rgba(255,255,255,0.9))",
                }}
              >
                <Box color="primary.main" mb={2}>
                  {item.icon}
                </Box>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
