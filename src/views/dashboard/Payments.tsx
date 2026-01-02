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

interface Payment {
  id: number;
  invoiceId: string;
  method: string;
  amount: number;
  status: "Success" | "Pending";
}

const payments: Payment[] = [
  { id: 1, invoiceId: "INV-001", method: "UPI", amount: 12500, status: "Success" },
  { id: 2, invoiceId: "INV-002", method: "Cash", amount: 8200, status: "Pending" },
];

const Payments = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Payments
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Invoice</b></TableCell>
              <TableCell><b>Method</b></TableCell>
              <TableCell><b>Amount</b></TableCell>
              <TableCell><b>Status</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.invoiceId}</TableCell>
                <TableCell>{p.method}</TableCell>
                <TableCell>₹ {p.amount}</TableCell>
                <TableCell>
                  <Chip
                    label={p.status}
                    color={p.status === "Success" ? "success" : "warning"}
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

export default Payments;
