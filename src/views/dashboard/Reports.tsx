import { Box, Grid, Paper, Typography } from "@mui/material";

const Reports = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Reports Overview
      </Typography>

      <Grid container spacing={3}>
        {[
          { title: "Total Sales", value: "₹ 1,25,000" },
          { title: "Total Invoices", value: "54" },
          { title: "Pending Payments", value: "₹ 18,000" },
          { title: "Low Stock Items", value: "3" },
        ].map((r, i) => (
          <Grid size={{ xs:12,sm:6,md:3}} key={i}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="body2" color="text.secondary">
                {r.title}
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                {r.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reports;
