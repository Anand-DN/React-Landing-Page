import axios from "axios";

const API_BASE_URL = "https://api.example.com"; // Replace with actual API URL

export const fetchServices = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts`); // Mock services data
      return await response.json();
    } catch (error) {
      console.error("Error fetching services:", error);
      return [];
    }
  };

export const fetchPricing = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pricing`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pricing:", error);
    return [];
  }
};

export const fetchTestimonials = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/testimonials`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};
