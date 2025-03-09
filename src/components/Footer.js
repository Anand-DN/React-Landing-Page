import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
    return (
      <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} sx={{ backgroundColor: "grey.900", color: "white", textAlign: "center", py: 3 }}>
        <Typography>&copy; 2025 Intelion. All rights reserved.</Typography>
      </Box>
    );
  };

  export default Footer;