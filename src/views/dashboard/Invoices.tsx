import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

type InvoiceStatus = "Paid" | "Pending" | "Overdue";

interface Invoice {
  id: string;
  customer: string;
  amount: number;
  date: string;
  status: InvoiceStatus;
}

// Dummy data (replace later with API)
const invoices: Invoice[] = [
  {
    id: "INV-001",
    customer: "Rahul Traders",
    amount: 12500,
    date: "2026-01-02",
    status: "Paid",
  },
  {
    id: "INV-002",
    customer: "Sharma Stores",
    amount: 8200,
    date: "2026-01-01",
    status: "Pending",
  },
  {
    id: "INV-003",
    customer: "Patil Enterprises",
    amount: 15400,
    date: "2025-12-29",
    status: "Overdue",
  },
];

const statusColor = (status: InvoiceStatus) => {
  switch (status) {
    case "Paid":
      return "success";
    case "Pending":
      return "warning";
    case "Overdue":
      return "error";
    default:
      return "default";
  }
};

const Invoices = () => {
  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h5" fontWeight={600} mb={3}>
        Invoices
      </Typography>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Invoice ID</strong></TableCell>
              <TableCell><strong>Customer</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Amount</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id} hover>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>₹ {invoice.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <Chip
                    label={invoice.status}
                    color={statusColor(invoice.status)}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Invoices;
