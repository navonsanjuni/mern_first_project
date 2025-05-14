import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSquareIcon from "@mui/icons-material/EditSquare";

const ProductCard = ({ product, onEdit, onDelete }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); 
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false); 

  const handleDeleteClick = () => {
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    setIsDialogOpen(false);
    await onDelete(product._id); 
    setIsSnackbarOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return; 
    }
    setIsSnackbarOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          height: 450,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: 3,
          marginX: 2,
          width: 350,
          borderRadius: 2,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          height="60%"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
            ${product.price}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <IconButton color="primary" onClick={() => onEdit(product)}>
              <EditSquareIcon />
            </IconButton>
            <IconButton color="error" onClick={handleDeleteClick}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>

      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        aria-labelledby="confirm-delete-dialog"
      >
        <DialogTitle id="confirm-delete-dialog">
          Are you sure you want to delete this product?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

     
    </>
  );
};

export default ProductCard;