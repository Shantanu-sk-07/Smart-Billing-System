import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const stats = [
  {
    title: "Total Sales",
    value: "₹ 2,45,000",
    icon: <AttachMoneyIcon fontSize="large" />,
    color: "#4caf50",
  },
  {
    title: "Invoices",
    value: "124",
    icon: <ReceiptIcon fontSize="large" />,
    color: "#2196f3",
  },
  {
    title: "Customers",
    value: "58",
    icon: <PeopleIcon fontSize="large" />,
    color: "#ff9800",
  },
  {
    title: "Products",
    value: "312",
    icon: <InventoryIcon fontSize="large" />,
    color: "#9c27b0",
  },
];

const DashboardHome = () => {

  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h5" fontWeight={600} mb={3}>
        Dashboard Overview
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3}>
        {stats.map((item, index) => (
          <Grid size={{ xs:12,sm:6,md:3}} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 3,
              }}
            >
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  {item.value}
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: item.color,
                  color: "#fff",
                  p: 1.5,
                  borderRadius: "50%",
                }}
              >
                {item.icon}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity Section */}
      <Grid container spacing={3} mt={1}>
        <Grid size={{ xs:12,md:8}}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" mb={2}>
              Recent Sales
            </Typography>

            <Typography color="text.secondary">
              Sales chart / table will be displayed here.
              <br />
              (API ready section)
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs:12,md:4}}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" mb={2}>
              Quick Summary
            </Typography>

            <Typography variant="body2" color="text.secondary">
              • Pending Invoices: 12  
              <br />
              • Low Stock Items: 6  
              <br />
              • Today Sales: ₹18,500  
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
