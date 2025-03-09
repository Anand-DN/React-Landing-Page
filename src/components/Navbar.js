import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
const Navbar = () => {
    return (
      <AppBar position="fixed" color="primary" component={motion.div} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}>
            Intelion
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {['Features', 'Services', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
              <Button
                key={item}
                color="inherit"
                href={`#${item.toLowerCase()}`}
                sx={{
                  fontWeight: "bold",
                  transition: "0.3s",
                  '&:hover': { color: "#FFD700", transform: "scale(1.1)" },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    );
  };


export default Navbar;