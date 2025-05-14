import React, { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

export const useToast = () => {
  const [toast, setToast] = useState({
    open: false,
    message: '',
    severity: 'success', 
  });

  const showToast = (message, severity = 'success') => {
    setToast({ open: true, message, severity });
  };

  const ToastComponent = () => (
    <Snackbar
      open={toast.open}
      autoHideDuration={4000}
      onClose={() => setToast({ ...toast, open: false })}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={() => setToast({ ...toast, open: false })}
        severity={toast.severity}
        sx={{ width: '100%' }}
      >
        {toast.message}
      </Alert>
    </Snackbar>
  );

  return { showToast, ToastComponent };
};