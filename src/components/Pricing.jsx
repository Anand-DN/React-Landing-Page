import { CircularProgress, Container, Box, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";


const Pricing = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=3")
        .then((response) => response.json())
        .then((data) => {
          setPlans(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching pricing:", error));
    }, []);
  
    return (
      <Container id="pricing" sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Pricing Plans
        </Typography>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {plans.map((plan) => (
              <Grid item xs={12} sm={6} md={4} key={plan.id}>
                <Paper component={motion.div} whileHover={{ scale: 1.05 }} elevation={5} sx={{ p: 3, textAlign: "center", transition: "0.3s" }}>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {plan.name || "Premium Plan"}
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    {plan.body.substring(0, 100)}...
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    );
  };

  export default Pricing;