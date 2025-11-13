// import { useEffect, useState } from "react";
// import { getAllTurfs, deleteTurf } from "../services/apiService";

// const AllTurf = () => {
//   const [turfs, setTurfs] = useState([]);

//   useEffect(() => {
//     loadTurfs();
//   }, []);

//   const loadTurfs = async () => {
//     try {
//       const data = await getAllTurfs();
//       setTurfs(data);
//     } catch (error) {
//       console.error("Failed to load turfs:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this turf?")) {
//       await deleteTurf(id);
//       loadTurfs(); // refresh after deletion
//     }
//   };

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-bold mb-4 text-green-600">All Turfs</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {turfs.map((turf) => (
//           <div key={turf.id} className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
//             <img src={turf.turfImage} alt={turf.turfName} className="rounded-lg w-full h-48 object-cover mb-3" />
//             <h3 className="text-xl font-semibold">{turf.turfName}</h3>
//             <p className="text-gray-600">{turf.turfLocation}</p>
//             <p className="text-green-600 font-bold mt-2">₹{turf.pricePerSlot} / slot</p>
//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={() => console.log("Update Turf")}
//                 className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(turf.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllTurf;

// import { useEffect, useState } from "react";
// import { getAllTurfs, deleteTurf } from "../Service/ApiService";

// const AllTurf = () => {
//   const [turfs, setTurfs] = useState([]);

//   useEffect(() => {
//     loadTurfs();
//   }, []);

//   const loadTurfs = async () => {
//     try {
//       const data = await getAllTurfs();
//       setTurfs(data);
//     } catch (error) {
//       console.error("Failed to load turfs:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this turf?")) {
//       await deleteTurf(id);
//       loadTurfs(); // refresh after deletion
//     }
//   };

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-bold mb-4 text-green-600">All Turfs</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {turfs.map((turf) => (
//           <div
//             key={turf.id}
//             className="bg-white rounded-xl shadow-lg p-4 border border-gray-100"
//           >
//             <img
//               src={turf.turfImage}
//               alt={turf.turfName}
//               className="rounded-lg w-full h-48 object-cover mb-3"
//             />
//             <h3 className="text-xl font-semibold">{turf.turfName}</h3>
//             <p className="text-gray-600">{turf.turfLocation}</p>
//             <p className="text-green-600 font-bold mt-2">
//               ₹{turf.pricePerSlot} / slot
//             </p>
//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={() => console.log("Update Turf")}
//                 className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(turf.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllTurf;
//
// src/components/AllTurf.jsx
// import React, { useState, useEffect } from "react";
// import {
//   getAllTurfs,
//   addTurf,
//   updateTurf,
//   deleteTurf,
// } from "../Service/ApiService";

// const AllTurf = () => {
//   const [turfs, setTurfs] = useState([]);
//   const [editingTurf, setEditingTurf] = useState(null);
//   const [formData, setFormData] = useState({
//     turfName: "",
//     turfLocation: "",
//     address: "",
//     description: "",
//     pricePerSlot: "",
//     turfImage: null,
//   });

//   // Fetch all turfs from backend
//   const fetchTurfs = async () => {
//     try {
//       const res = await getAllTurfs();
//       setTurfs(res.data);
//     } catch (err) {
//       console.error("Error fetching turfs:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTurfs();
//   }, []);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingTurf) {
//         // Update turf (JSON)
//         const updatedData = {
//           turfName: formData.turfName,
//           turfLocation: formData.turfLocation,
//           address: formData.address,
//           description: formData.description,
//           pricePerSlot: formData.pricePerSlot,
//         };
//         await updateTurf(editingTurf.id, updatedData);
//         alert("✅ Turf updated successfully!");
//       } else {
//         // Add new turf (multipart/form-data)
//         const newFormData = new FormData();
//         Object.entries(formData).forEach(([key, value]) => {
//           newFormData.append(key, value);
//         });
//         await addTurf(newFormData);
//         alert("✅ Turf added successfully!");
//       }

//       // Reset form & refresh
//       setFormData({
//         turfName: "",
//         turfLocation: "",
//         address: "",
//         description: "",
//         pricePerSlot: "",
//         turfImage: null,
//       });
//       setEditingTurf(null);
//       fetchTurfs();
//     } catch (err) {
//       console.error("Error saving turf:", err);
//       alert("❌ Something went wrong!");
//     }
//   };

//   // Handle edit
//   const handleEdit = (turf) => {
//     setEditingTurf(turf);
//     setFormData({
//       turfName: turf.turfName,
//       turfLocation: turf.turfLocation,
//       address: turf.address,
//       description: turf.description,
//       pricePerSlot: turf.pricePerSlot,
//       turfImage: null,
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Handle delete
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this turf?")) {
//       try {
//         await deleteTurf(id);
//         alert("🗑️ Turf deleted successfully!");
//         fetchTurfs();
//       } catch (err) {
//         console.error("Delete failed:", err);
//       }
//     }
//   };

//   return (
//     <div style={{ padding: "30px", fontFamily: "Arial" }}>
//       <h2 style={{ textAlign: "center", color: "#333" }}>
//         {editingTurf ? "✏️ Edit Turf" : "➕ Add Turf"}
//       </h2>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           maxWidth: "500px",
//           margin: "0 auto",
//           gap: "10px",
//           background: "#f8f8f8",
//           padding: "20px",
//           borderRadius: "10px",
//         }}
//       >
//         <input
//           type="text"
//           name="turfName"
//           placeholder="Turf Name"
//           value={formData.turfName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="turfLocation"
//           placeholder="Turf Location"
//           value={formData.turfLocation}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="pricePerSlot"
//           placeholder="Price per Slot"
//           value={formData.pricePerSlot}
//           onChange={handleChange}
//           required
//         />

//         {!editingTurf && (
//           <input
//             type="file"
//             name="turfImage"
//             accept="image/*"
//             onChange={handleChange}
//             required
//           />
//         )}

//         <button
//           type="submit"
//           style={{
//             backgroundColor: editingTurf ? "#2196F3" : "#4CAF50",
//             color: "white",
//             padding: "10px",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           {editingTurf ? "Update Turf" : "Add Turf"}
//         </button>
//       </form>

//       {/* All Turfs */}
//       <h2 style={{ textAlign: "center", marginTop: "40px" }}>All Turfs</h2>

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: "20px",
//         }}
//       >
//         {turfs.length > 0 ? (
//           turfs.map((turf) => (
//             <div
//               key={turf.id}
//               style={{
//                 width: "280px",
//                 border: "1px solid #ddd",
//                 borderRadius: "10px",
//                 boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
//                 padding: "15px",
//                 background: "white",
//               }}
//             >
//               <img
//                 src={turf.turfImage}
//                 alt={turf.turfName}
//                 style={{
//                   width: "100%",
//                   height: "160px",
//                   borderRadius: "10px",
//                   objectFit: "cover",
//                 }}
//               />
//               <h3 style={{ marginTop: "10px" }}>{turf.turfName}</h3>
//               <p>{turf.turfLocation}</p>
//               <p>{turf.address}</p>
//               <p>{turf.description}</p>
//               <p>
//                 <strong>₹{turf.pricePerSlot}</strong> / slot
//               </p>
//               <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
//                 <button
//                   onClick={() => handleEdit(turf)}
//                   style={{
//                     flex: 1,
//                     background: "#2196F3",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "5px",
//                     padding: "8px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(turf.id)}
//                   style={{
//                     flex: 1,
//                     background: "#f44336",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "5px",
//                     padding: "8px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No turfs found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllTurf;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AllTurf = () => {
//   const [turfs, setTurfs] = useState([]);
//   const [editingTurf, setEditingTurf] = useState(null);
//   const [formData, setFormData] = useState({
//     turfName: "",
//     turfLocation: "",
//     address: "",
//     description: "",
//     pricePerSlot: "",
//   });

//   // ✅ Fetch all turfs
//   const fetchTurfs = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8080/turf/getAllTurfs"
//       );
//       setTurfs(response.data);
//     } catch (error) {
//       console.error("Failed to load turfs:", error);
//       toast.error("Failed to load turfs");
//     }
//   };

//   useEffect(() => {
//     fetchTurfs();
//   }, []);

//   // ✅ Delete Turf
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this turf?")) return;

//     try {
//       await axios.delete(`http://localhost:8080/turf/deleteTurf/${id}`);
//       toast.success("Turf deleted successfully");
//       fetchTurfs();
//     } catch (error) {
//       console.error("Error deleting turf:", error);
//       toast.error("Failed to delete turf");
//     }
//   };

//   // ✅ Edit Turf (open modal)
//   const handleEdit = (turf) => {
//     setEditingTurf(turf);
//     setFormData({
//       turfName: turf.turfName,
//       turfLocation: turf.turfLocation,
//       address: turf.address,
//       description: turf.description,
//       pricePerSlot: turf.pricePerSlot,
//     });
//   };

//   // ✅ Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ✅ Update Turf
//   const handleUpdate = async () => {
//     if (!editingTurf) return;

//     try {
//       const payload = {
//         turfName: formData.turfName,
//         turfLocation: formData.turfLocation,
//         address: formData.address,
//         description: formData.description,
//         pricePerSlot: parseInt(formData.pricePerSlot),
//       };

//       console.log("Sending payload:", payload);

//       const res = await axios.put(
//         `http://localhost:8080/turf/updateTurf/${editingTurf.id}`,
//         payload,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       toast.success("Turf updated successfully");
//       console.log("Update response:", res.data);

//       setEditingTurf(null);
//       fetchTurfs();
//     } catch (error) {
//       console.error("Error saving turf:", error);
//       toast.error("Failed to update turf");
//     }
//   };

//   // ✅ Close modal
//   const handleCancel = () => {
//     setEditingTurf(null);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-semibold text-center mb-6 text-green-700">
//         🏟️ All Turfs
//       </h1>

//       {/* Turf List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {turfs.map((turf) => (
//           <div
//             key={turf.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
//           >
//             <img
//               src={turf.turfImage}
//               alt={turf.turfName}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-bold text-gray-800">
//                 {turf.turfName}
//               </h2>
//               <p className="text-gray-600 text-sm">{turf.turfLocation}</p>
//               <p className="text-gray-500 text-sm mt-1">{turf.address}</p>
//               <p className="text-gray-700 mt-2">{turf.description}</p>
//               <p className="text-green-600 font-semibold mt-2">
//                 ₹{turf.pricePerSlot} / slot
//               </p>

//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={() => handleEdit(turf)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(turf.id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Edit Modal */}
//       {editingTurf && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-xl shadow-lg w-96">
//             <h2 className="text-2xl font-semibold mb-4 text-green-700 text-center">
//               Edit Turf
//             </h2>

//             <input
//               type="text"
//               name="turfName"
//               value={formData.turfName}
//               onChange={handleChange}
//               placeholder="Turf Name"
//               className="w-full border p-2 rounded mb-3"
//             />
//             <input
//               type="text"
//               name="turfLocation"
//               value={formData.turfLocation}
//               onChange={handleChange}
//               placeholder="Location"
//               className="w-full border p-2 rounded mb-3"
//             />
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               placeholder="Address"
//               className="w-full border p-2 rounded mb-3"
//             />
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Description"
//               className="w-full border p-2 rounded mb-3"
//             />
//             <input
//               type="number"
//               name="pricePerSlot"
//               value={formData.pricePerSlot}
//               onChange={handleChange}
//               placeholder="Price per slot"
//               className="w-full border p-2 rounded mb-3"
//             />

//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={handleUpdate}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={handleCancel}
//                 className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllTurf;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AllTurf = () => {
//   const [turfs, setTurfs] = useState([]);
//   const [editingTurfId, setEditingTurfId] = useState(null);
//   const [formData, setFormData] = useState({
//     turfName: "",
//     turfLocation: "",
//     address: "",
//     description: "",
//     pricePerSlot: "",
//   });

//   // ✅ Fetch all turfs
//   const fetchTurfs = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8080/turf/getAllTurfs"
//       );
//       setTurfs(response.data);
//     } catch (error) {
//       console.error("Failed to load turfs:", error);
//       toast.error("Failed to load turfs");
//     }
//   };

//   useEffect(() => {
//     fetchTurfs();
//   }, []);

//   // ✅ Delete Turf
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this turf?")) return;

//     try {
//       await axios.delete(`http://localhost:8080/turf/deleteTurf/${id}`);
//       toast.success("Turf deleted successfully");
//       fetchTurfs();
//     } catch (error) {
//       console.error("Error deleting turf:", error);
//       toast.error("Failed to delete turf");
//     }
//   };

//   // ✅ Edit Turf
//   const handleEdit = (turf) => {
//     setEditingTurfId(turf.id);
//     setFormData({
//       turfName: turf.turfName || "",
//       turfLocation: turf.turfLocation || "",
//       address: turf.address || "",
//       description: turf.description || "",
//       pricePerSlot: turf.pricePerSlot || "",
//     });
//   };

//   // ✅ Handle Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ✅ Update Turf
//   const handleUpdate = async () => {
//     if (!editingTurfId) {
//       toast.error("No turf selected for update!");
//       return;
//     }

//     try {
//       const payload = {
//         turfName: formData.turfName,
//         turfLocation: formData.turfLocation,
//         address: formData.address,
//         description: formData.description,
//         pricePerSlot: parseInt(formData.pricePerSlot),
//       };

//       console.log("Sending payload:", payload);

//       const res = await axios.put(
//         `http://localhost:8080/turf/updateTurf/${editingTurfId}`,
//         payload,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       toast.success("Turf updated successfully");
//       console.log("Update response:", res.data);

//       setEditingTurfId(null);
//       fetchTurfs();
//     } catch (error) {
//       console.error("Error saving turf:", error);
//       toast.error("Failed to update turf");
//     }
//   };

//   // ✅ Cancel Edit
//   const handleCancel = () => {
//     setEditingTurfId(null);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-semibold text-center mb-6 text-green-700">
//         🏟️ All Turfs
//       </h1>

//       {/* Turf List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {turfs.map((turf) => (
//           <div
//             key={turf.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
//           >
//             <img
//               src={turf.turfImage}
//               alt={turf.turfName}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-bold text-gray-800">
//                 {turf.turfName}
//               </h2>
//               <p className="text-gray-600 text-sm">{turf.turfLocation}</p>
//               <p className="text-gray-500 text-sm mt-1">{turf.address}</p>
//               <p className="text-gray-700 mt-2">{turf.description}</p>
//               <p className="text-green-600 font-semibold mt-2">
//                 ₹{turf.pricePerSlot} / slot
//               </p>

//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={() => handleEdit(turf)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(turf.id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Edit Modal */}
//       {editingTurfId && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-xl shadow-lg w-96">
//             <h2 className="text-2xl font-semibold mb-4 text-green-700 text-center">
//               Edit Turf
//             </h2>

//             <input
//               type="text"
//               name="turfName"
//               value={formData.turfName}
//               onChange={handleChange}
//               placeholder="Turf Name"
//               className="w-full border p-2 rounded mb-3"
//             />
//             <input
//               type="text"
//               name="turfLocation"
//               value={formData.turfLocation}
//               onChange={handleChange}
//               placeholder="Location"
//               className="w-full border p-2 rounded mb-3"
//             />
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               placeholder="Address"
//               className="w-full border p-2 rounded mb-3"
//             />
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Description"
//               className="w-full border p-2 rounded mb-3"
//             />
//             <input
//               type="number"
//               name="pricePerSlot"
//               value={formData.pricePerSlot}
//               onChange={handleChange}
//               placeholder="Price per slot"
//               className="w-full border p-2 rounded mb-3"
//             />

//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={handleUpdate}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={handleCancel}
//                 className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllTurf;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllTurf = () => {
  const [turfs, setTurfs] = useState([]);
  const [editingTurfId, setEditingTurfId] = useState(null);
  const [formData, setFormData] = useState({
    turfName: "",
    turfLocation: "",
    address: "",
    description: "",
    pricePerSlot: "",
  });

  // ✅ Fetch all turfs
  const fetchTurfs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/turf/getAllTurfs"
      );
      setTurfs(response.data);
    } catch (error) {
      console.error("Failed to load turfs:", error);
      toast.error("Failed to load turfs");
    }
  };

  useEffect(() => {
    fetchTurfs();
  }, []);

  // ✅ Delete Turf
  const handleDelete = async (turfid) => {
    if (!window.confirm("Are you sure you want to delete this turf?")) return;

    try {
      await axios.delete(`http://localhost:8080/turf/deleteTurf/${turfid}`);
      toast.success("Turf deleted successfully");
      fetchTurfs();
    } catch (error) {
      console.error("Error deleting turf:", error);
      toast.error("Failed to delete turf");
    }
  };

  // ✅ Edit Turf
  const handleEdit = (turf) => {
    console.log("Editing turf:", turf);
    setEditingTurfId(turf.turfid);
    setFormData({
      turfName: turf.turfName || "",
      turfLocation: turf.turfLocation || "",
      address: turf.address || "",
      description: turf.description || "",
      pricePerSlot: turf.pricePerSlot || "",
    });
  };

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Update Turf
  const handleUpdate = async () => {
    if (!editingTurfId) {
      toast.error("No turf selected for update!");
      return;
    }

    try {
      const payload = {
        turfName: formData.turfName,
        turfLocation: formData.turfLocation,
        address: formData.address,
        description: formData.description,
        pricePerSlot: parseInt(formData.pricePerSlot),
      };

      console.log("Sending update for Turf ID:", editingTurfId);
      console.log("Payload:", payload);

      await axios.put(
        `http://localhost:8080/turf/updateTurf/${editingTurfId}`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Turf updated successfully");
      setEditingTurfId(null);
      fetchTurfs();
    } catch (error) {
      console.error("Error updating turf:", error);
      toast.error("Failed to update turf");
    }
  };

  // ✅ Cancel Edit
  const handleCancel = () => {
    setEditingTurfId(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6 text-green-700">
        🏟️ All Turfs
      </h1>

      {/* Turf List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {turfs.map((turf) => (
          <div
            key={turf.turfid}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={turf.turfImage}
              alt={turf.turfName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">
                {turf.turfName}
              </h2>
              <p className="text-gray-600 text-sm">{turf.turfLocation}</p>
              <p className="text-gray-500 text-sm mt-1">{turf.address}</p>
              <p className="text-gray-700 mt-2">{turf.description}</p>
              <p className="text-green-600 font-semibold mt-2">
                ₹{turf.pricePerSlot} / slot
              </p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(turf)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(turf.turfid)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Edit Modal */}
      {editingTurfId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 text-center">
              Edit Turf
            </h2>

            <input
              type="text"
              name="turfName"
              value={formData.turfName}
              onChange={handleChange}
              placeholder="Turf Name"
              className="w-full border p-2 rounded mb-3"
            />
            <input
              type="text"
              name="turfLocation"
              value={formData.turfLocation}
              onChange={handleChange}
              placeholder="Location"
              className="w-full border p-2 rounded mb-3"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border p-2 rounded mb-3"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full border p-2 rounded mb-3"
            />
            <input
              type="number"
              name="pricePerSlot"
              value={formData.pricePerSlot}
              onChange={handleChange}
              placeholder="Price per slot"
              className="w-full border p-2 rounded mb-3"
            />

            <div className="flex justify-between mt-4">
              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Update
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTurf;
