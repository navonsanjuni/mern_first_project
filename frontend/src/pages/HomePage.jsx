import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const HomePage = () => {
  const { fetchProducts, products, deleteProduct, updateProduct } = useProductStore();
  const [editProduct, setEditProduct] = useState(null);
  const [formData, setFormData] = useState({ name: "", image: "", price: "" });
  const theme = useTheme();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDelete = async (id) => {
    await deleteProduct(id);
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setFormData({
      name: product.name,
      image: product.image,
      price: product.price,
    });
  };

  const handleCloseDialog = () => {
    setEditProduct(null);
  };

  const handleUpdate = async () => {
    await updateProduct(editProduct._id, formData);
    setEditProduct(null);
  };

  const isDarkMode = theme.palette.mode === "dark";
  const formFieldBackgroundColor = isDarkMode ? "#333" : "#f5f5f5";
  const formFieldTextColor = isDarkMode ? "#fff" : "#000";

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box display="flex" flexDirection="column"  gap={4}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            background: "linear-gradient(to right, rgb(64, 104, 203), rgb(100, 225, 177))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
          }}
        >
          Current Products
        </Typography>

        <Grid container spacing={4} alignItems="flex-start" marginLeft={17}>
          {products.length > 0 ? (
            products.map((product) => (
              <Grid key={product._id} item xs={12} sm={6} md={4}>
                <ProductCard
                  product={product}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </Grid>
            ))
          ) : (
            <Typography variant="body1" align="center" sx={{ width: "100%" }}>
              No products available.{" "}
              <Link
                to="/create"
                style={{
                  color: "blue",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Create a new product
              </Link>
            </Typography>
          )}
        </Grid>
      </Box>

      <Dialog
        open={Boolean(editProduct)}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            p: 4,
            borderRadius: 3,
            boxShadow: 3,
          },
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor: "rgb(64, 104, 203)",
            color: "white",
            textAlign: "center",
            padding: "16px",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: 2,
          }}
        >
          Edit Product Details
        </DialogTitle>

        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: "16px",
          }}
        >
          <TextField
            margin="normal"
            label="Product Name"
            variant="outlined"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            fullWidth
            sx={{
              backgroundColor: formFieldBackgroundColor,
              color: formFieldTextColor,
              borderRadius: 2,
            }}
          />
          <TextField
            label="Image URL"
            variant="outlined"
            value={formData.image}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, image: e.target.value }))
            }
            fullWidth
            sx={{
              backgroundColor: formFieldBackgroundColor,
              color: formFieldTextColor,
              borderRadius: 2,
            }}
          />
          <TextField
            label="Price"
            type="number"
            variant="outlined"
            value={formData.price}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, price: e.target.value }))
            }
            fullWidth
            sx={{
              backgroundColor: formFieldBackgroundColor,
              color: formFieldTextColor,
              borderRadius: 2,
            }}
          />
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", gap: 2, pb: 3 }}>
          <Button
            onClick={handleCloseDialog}
            variant="outlined"
            sx={{
              color: "rgb(64, 104, 203)",
              borderColor: "#3f51b5",
              "&:hover": {
                backgroundColor: "#e8eaf6",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdate}
            variant="contained"
            color="#ffffff"
            sx={{
              backgroundColor: "rgb(64, 104, 203)",
              "&:hover": {
                backgroundColor: "rgb(29, 72, 182)",
              },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default HomePage;
