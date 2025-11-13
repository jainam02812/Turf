// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AddTurf() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     turfName: "",
//     location: "",
//     price: "",
//     imageUrl: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("New Turf Added:", form);
//     navigate("/allTurf");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md animate-fadeIn">
//         <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
//           Add New Turf
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="turfName"
//             placeholder="Turf Name"
//             value={form.turfName}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             value={form.location}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <input
//             type="text"
//             name="price"
//             placeholder="Price (₹/hour)"
//             value={form.price}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <input
//             type="text"
//             name="imageUrl"
//             placeholder="Image URL"
//             value={form.imageUrl}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
//           >
//             Add Turf
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

const AddTurf = () => {
  const [formData, setFormData] = useState({
    turfName: "",
    turfLocation: "",
    address: "",
    description: "",
    pricePerSlot: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    data.append("turfImage", image);

    const res = await fetch("http://localhost:8080/turf/addTurf", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      alert("Turf added successfully!");
      setFormData({
        turfName: "",
        turfLocation: "",
        address: "",
        description: "",
        pricePerSlot: "",
      });
      setImage(null);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Add New Turf
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="turfName"
          value={formData.turfName}
          onChange={handleChange}
          placeholder="Turf Name"
          required
          className="w-full border border-green-300 p-3 rounded-md"
        />
        <input
          type="text"
          name="turfLocation"
          value={formData.turfLocation}
          onChange={handleChange}
          placeholder="Turf Location"
          required
          className="w-full border border-green-300 p-3 rounded-md"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="w-full border border-green-300 p-3 rounded-md"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows="4"
          required
          className="w-full border border-green-300 p-3 rounded-md"
        />
        <input
          type="number"
          name="pricePerSlot"
          value={formData.pricePerSlot}
          onChange={handleChange}
          placeholder="Price per Slot"
          required
          className="w-full border border-green-300 p-3 rounded-md"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
          className="w-full border border-green-300 p-2 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
        >
          Add Turf
        </button>
      </form>
    </div>
  );
};

export default AddTurf;
