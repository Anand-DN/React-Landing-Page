import { CircularProgress, Container, Grid,Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";


const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users?_limit=3")
        .then((response) => response.json())
        .then((data) => {
          setServices(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching services:", error));
    }, []);
  
    return (
      <Container id="services" sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Our Services
        </Typography>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Paper component={motion.div} whileHover={{ scale: 1.05 }} elevation={5} sx={{ p: 3, textAlign: "center", transition: "0.3s" }}>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {service.name}
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    {service.company.catchPhrase}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    );
  };

export default Services;