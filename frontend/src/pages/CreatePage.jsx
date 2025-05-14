import React, { useState } from "react";
import { Button, Container, TextField, Typography, Box } from "@mui/material";
import { useProductStore } from '../store/product';
import { useToast } from '../hooks/useToast'; 

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    image: ""
  });

  const { showToast, ToastComponent } = useToast(); 
  const { createProduct } = useProductStore();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const { success, message } = await createProduct(newProduct);

    if (!success) {
      showToast(message, 'error'); 
    } else {
      showToast(message, 'success'); 
      setNewProduct({ name: '', price: '', image: '' });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Create New Product
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <TextField
          label="Product Name"
          variant="outlined"
          name="name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          fullWidth
        />
        <TextField
          label="Product Price"
          variant="outlined"
          name="price"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          fullWidth
        />
        <TextField
          label="Product Image URL"
          variant="outlined"
          name="image"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          fullWidth
        />
         <Button
              variant="contained"
              fullWidth
              onClick={handleAddProduct}
              sx={{
                backgroundColor: '#40cbc9',
                '&:hover': {
                  backgroundColor: '#35b3a9',
                },
              }}
            >
              Add Product
            </Button>
      </Box>

      <ToastComponent />
    </Container>
  );
};

export default CreatePage;