import { Box, CircularProgress, Container, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=3")
        .then((response) => response.json())
        .then((data) => {
          setTestimonials(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching testimonials:", error));
    }, []);
  
    return (
      <Container id="testimonials" sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          What Our Clients Say
        </Typography>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial) => (
              <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
                <Paper component={motion.div} whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }} elevation={5} sx={{ p: 4, textAlign: "center", transition: "0.3s", borderRadius: "12px" }}>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body1" mt={2}>
                    "{testimonial.body.substring(0, 100)}..."
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    );
  };

  export default Testimonials;