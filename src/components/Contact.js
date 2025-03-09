import { Button, Container, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
    return (
      <Container id="contact" sx={{ py: 10, textAlign: "center", backgroundColor: "#f4f4f4", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", p: 5, maxWidth: "sm", mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" mx="auto" mb={3}>
          We'd love to hear from you! Contact us for inquiries, collaborations, or support.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="mailto:contact@intelion.com"
          sx={{
            fontWeight: "bold",
            padding: "12px 24px",
            fontSize: "1.1rem",
            transition: "0.3s",
            '&:hover': { backgroundColor: "#FFD700", color: "black", transform: "scale(1.05)" },
          }}
        >
          Email Us
        </Button>
      </Container>
    );
  };
  

  export default Contact;