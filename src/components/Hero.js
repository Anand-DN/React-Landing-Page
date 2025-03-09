import { Box, Button, Container, Typography , Grid, Paper} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
    return (
      <Box component={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundImage: "url('https://source.unsplash.com/1600x900/?technology')", backgroundSize: "cover", backgroundPosition: "center", color: "white", p: 3 }}>
        <Container>
          <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
            Welcome to Intelion
          </Typography>
          <Typography variant="h5" mb={3}>
            Empowering businesses with cutting-edge technology solutions.
          </Typography>
          <Button component={motion.a} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variant="contained" color="secondary" href="#features" size="large" sx={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" }}>
            Explore Features
          </Button>
        </Container>
      </Box>
    );
  };
  export default Hero;