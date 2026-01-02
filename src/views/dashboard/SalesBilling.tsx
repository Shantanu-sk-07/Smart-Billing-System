import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

interface BillItem {
  id: number;
  productName: string;
  quantity: number;
  price: number;
}

const SalesBilling = () => {
  const [items, setItems] = useState<BillItem[]>([
    { id: 1, productName: "", quantity: 1, price: 0 },
  ]);

  const handleChange = (
    id: number,
    field: keyof BillItem,
    value: string | number
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        productName: "",
        quantity: 1,
        price: 0,
      },
    ]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Sales / Billing
      </Typography>

      {items.map((item) => (
        <Card key={item.id} sx={{ mb: 2, borderRadius: 3 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid size={{ xs:12,md:4}}>
                <TextField
                  label="Product Name"
                  fullWidth
                  value={item.productName}
                  onChange={(e) =>
                    handleChange(item.id, "productName", e.target.value)
                  }
                />
              </Grid>

              <Grid size={{ xs:6,md:2}}>
                <TextField
                  label="Qty"
                  type="number"
                  fullWidth
                  value={item.quantity}
                  onChange={(e) =>
                    handleChange(item.id, "quantity", Number(e.target.value))
                  }
                />
              </Grid>

              <Grid size={{ xs:6,md:2}}>
                <TextField
                  label="Price"
                  type="number"
                  fullWidth
                  value={item.price}
                  onChange={(e) =>
                    handleChange(item.id, "price", Number(e.target.value))
                  }
                />
              </Grid>

              <Grid size={{ xs:8,md:2}}>
                <TextField
                  label="Total"
                  fullWidth
                  disabled
                  value={`₹ ${item.quantity * item.price}`}
                />
              </Grid>

              <Grid size={{ xs:4,md:1}}>
                {items.length > 1 && (
                  <IconButton onClick={() => removeItem(item.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}

      <Button variant="outlined" onClick={addItem}>
        + Add Product
      </Button>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Typography variant="h6">Grand Total</Typography>
        <Typography variant="h6" fontWeight={700}>
          ₹ {totalAmount}
        </Typography>
      </Box>

      <Box mt={3}>
        <Button variant="contained" size="large">
          Generate Invoice
        </Button>
      </Box>
    </Box>
  );
};

export default SalesBilling;
