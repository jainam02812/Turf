// import axios from "axios";

// // Set your backend base URL here
// const API_BASE_URL = "http://localhost:8080/api/turfs"; // adjust path if needed

// // =================== TURF APIs ===================

// // ✅ Get all turfs
// export const getAllTurfs = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/all`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching turfs:", error);
//     throw error;
//   }
// };

// // ✅ Add a new turf (multipart form)
// export const addTurf = async (formData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/addTurf`, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error adding turf:", error);
//     throw error;
//   }
// };

// // ✅ Update an existing turf
// export const updateTurf = async (id, formData) => {
//   try {
//     const response = await axios.put(`${API_BASE_URL}/update/${id}`, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error updating turf:", error);
//     throw error;
//   }
// };

// // ✅ Delete a turf
// export const deleteTurf = async (id) => {
//   try {
//     const response = await axios.delete(`${API_BASE_URL}/delete/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting turf:", error);
//     throw error;
//   }
// };

// // =================== BOOKING APIs ===================

// const BOOKING_URL = "http://localhost:8080/api/bookings";

// // ✅ Get all bookings
// export const getAllBookings = async () => {
//   try {
//     const response = await axios.get(`${BOOKING_URL}/all`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching bookings:", error);
//     throw error;
//   }
// };

// // ✅ Delete booking
// export const deleteBooking = async (id) => {
//   try {
//     const response = await axios.delete(`${BOOKING_URL}/delete/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting booking:", error);
//     throw error;
//   }
// };

// import axios from "axios";

// // Backend base URL
// const API_BASE_URL = "http://localhost:8080/turf";

// // ✅ Configure axios instance
// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // ✅ 1️⃣ Add a new Turf (with image upload)
// export const addTurf = async (formData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/addTurf`, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error adding turf:", error);
//     throw error;
//   }
// };

// // ✅ 2️⃣ Get all Turfs
// export const getAllTurfs = async () => {
//   try {
//     const response = await api.get("/getAllTurfs");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching all turfs:", error);
//     throw error;
//   }
// };

// // ✅ 3️⃣ Get single Turf by ID
// export const getTurfById = async (id) => {
//   try {
//     const response = await api.get(`/getATurf/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching turf:", error);
//     throw error;
//   }
// };

// // ✅ 4️⃣ Update Turf
// export const updateTurf = async (id, updatedData) => {
//   try {
//     const response = await api.put(`/updateTurf/${id}`, updatedData);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating turf:", error);
//     throw error;
//   }
// };

// // ✅ 5️⃣ Delete Turf
// export const deleteTurf = async (id) => {
//   try {
//     const response = await api.delete(`/deleteTurf/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting turf:", error);
//     throw error;
//   }
// };
// src/services/ApiService.jsx
// src/services/ApiService.jsx
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/turf";

export const getAllTurfs = () => axios.get(`${API_BASE_URL}/getAllTurfs`);

export const addTurf = (formData) =>
  axios.post(`${API_BASE_URL}/addTurf`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateTurf = (id, turfData) =>
  axios.put(`${API_BASE_URL}/updateTurf/${id}`, turfData, {
    headers: { "Content-Type": "application/json" },
  });

export const deleteTurf = (turfid) =>
  axios.delete(`${API_BASE_URL}/deleteTurf/${turfid}`);
