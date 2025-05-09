import React, { useState } from 'react';
import {
  Button,
  Container,
  Input,
  Stack,
  Typography,
  Paper,
} from '@mui/material';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleAddProduct = () => {
    console.log('Product added:', newProduct);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Stack spacing={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Create New Product
        </Typography>

        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <Stack spacing={3}>
            <Input
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              fullWidth
            />
            <Input
              placeholder="Product Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              fullWidth
            />
            <Input
              placeholder="Product Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              fullWidth
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleAddProduct}
              sx={{
                backgroundColor: "#40cbc9", 
                "&:hover": {
                  backgroundColor: "#35b3a9", 
                },
              }}
            >
              Add Product
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default CreatePage;
