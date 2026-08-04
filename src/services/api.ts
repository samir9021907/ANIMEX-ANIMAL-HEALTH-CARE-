// Centralized API configuration supporting both Localhost & Production Render Backend
export const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000/api';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('Backend API offline or unreachable, using local fallback seed data.', error);
    return null;
  }
};
