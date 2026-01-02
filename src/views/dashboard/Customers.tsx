import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface Customer {
  id: number;
  name: string;
  mobile: string;
  email: string;
}

const customers: Customer[] = [
  { id: 1, name: "Rahul Traders", mobile: "9876543210", email: "rahul@gmail.com" },
  { id: 2, name: "Sharma Stores", mobile: "9123456780", email: "sharma@gmail.com" },
];

const Customers = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Customers
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Mobile</b></TableCell>
              <TableCell><b>Email</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c) => (
              <TableRow key={c.id} hover>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.mobile}</TableCell>
                <TableCell>{c.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Customers;
