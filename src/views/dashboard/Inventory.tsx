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

interface Product {
  id: number;
  name: string;
  stock: number;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", stock: 12, price: 45000 },
  { id: 2, name: "Printer", stock: 3, price: 12000 },
];

const Inventory = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Inventory
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Product</b></TableCell>
              <TableCell><b>Stock</b></TableCell>
              <TableCell><b>Price</b></TableCell>
              <TableCell><b>Status</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.stock}</TableCell>
                <TableCell>₹ {p.price}</TableCell>
                <TableCell>
                  <Chip
                    label={p.stock > 5 ? "In Stock" : "Low Stock"}
                    color={p.stock > 5 ? "success" : "warning"}
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

export default Inventory;
