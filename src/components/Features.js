import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Paper, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => response.json())
      .then((data) => {
        setFeatures(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching features:", error));
  }, []);

  return (
    <Container id="features" sx={{ py: 10 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Key Features
      </Typography>
      {loading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={feature.id}>
              <Paper component={motion.div} whileHover={{ scale: 1.05 }} elevation={5} sx={{ p: 3, textAlign: "center", transition: "0.3s" }}>
                <Typography variant="h6" color="primary" fontWeight="bold">
                  {feature.title}
                </Typography>
                <Typography variant="body1" mt={1}>
                  {feature.body.substring(0, 100)}...
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Features;
