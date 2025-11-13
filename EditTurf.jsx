// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function EditTurf() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Access passed turf data
//   const turfData = location.state;

//   const [form, setForm] = useState({
//     turfName: "",
//     location: "",
//     price: "",
//     imageUrl: "",
//   });

//   useEffect(() => {
//     if (turfData) {
//       setForm({
//         turfName: turfData.turfName || "",
//         location: turfData.location || "",
//         price: turfData.price || "",
//         imageUrl: turfData.imageUrl || "",
//       });
//     }
//   }, [turfData]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Turf updated successfully!");
//     console.log("Updated Turf:", form);
//     navigate("/"); // Go back to all turfs
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-50">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
//           Edit Turf
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="turfName"
//             value={form.turfName}
//             onChange={handleChange}
//             placeholder="Turf Name"
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
//           />
//           <input
//             type="text"
//             name="location"
//             value={form.location}
//             onChange={handleChange}
//             placeholder="Location"
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
//           />
//           <input
//             type="text"
//             name="price"
//             value={form.price}
//             onChange={handleChange}
//             placeholder="Price (₹/hour)"
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
//           />
//           <input
//             type="text"
//             name="imageUrl"
//             value={form.imageUrl}
//             onChange={handleChange}
//             placeholder="Image URL"
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
//           >
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

const TurfCard = ({ turf, onEdit, onDelete }) => {
  return (
    <div className="bg-white border border-green-200 rounded-xl shadow-md overflow-hidden">
      <img
        src={turf.turfImage}
        alt={turf.turfName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-green-800">
          {turf.turfName}
        </h3>
        <p className="text-sm text-gray-600">{turf.turfLocation}</p>
        <p className="text-sm text-gray-500 mt-1">{turf.address}</p>
        <p className="text-green-700 font-semibold mt-2">
          ₹{turf.pricePerSlot} / slot
        </p>

        <div className="flex justify-between mt-4">
          <button
            onClick={() => onEdit(turf)}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(turf.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TurfCard;
