import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
    return (
      <Container id="about" sx={{ py: 10, textAlign: "center" }} component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" maxWidth="md" mx="auto">
          Intelion specializes in AI, blockchain, and cloud computing to deliver transformative technology solutions.
        </Typography>
      </Container>
    );
  };
  
  export default About;