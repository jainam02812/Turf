// import React from "react";

// export default function AllBooking() {
//   const bookings = [
//     {
//       id: 1,
//       turfName: "Green Arena",
//       user: "John Doe",
//       date: "2025-11-10",
//       time: "5:00 PM - 6:00 PM",
//       price: "₹800",
//     },
//     {
//       id: 2,
//       turfName: "Sky Turf",
//       user: "Jane Smith",
//       date: "2025-11-11",
//       time: "7:00 PM - 8:00 PM",
//       price: "₹900",
//     },
//     {
//       id: 3,
//       turfName: "City Sports Hub",
//       user: "Mark Taylor",
//       date: "2025-11-12",
//       time: "6:00 AM - 7:00 AM",
//       price: "₹700",
//     },
//   ];

//   return (
//     <div className="p-8 min-h-screen bg-green-50">
//       <h1 className="text-3xl font-bold text-green-700 mb-6">All Bookings</h1>
//       <div className="overflow-x-auto shadow-lg rounded-xl border border-green-300 bg-white">
//         <table className="w-full text-left border-collapse">
//           <thead className="bg-green-600 text-white">
//             <tr>
//               <th className="p-3">Sr No</th>
//               <th className="p-3">Turf Name</th>
//               <th className="p-3">User</th>
//               <th className="p-3">Date</th>
//               <th className="p-3">Time</th>
//               <th className="p-3">Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((b, index) => (
//               <tr key={b.id} className="border-t hover:bg-green-100 transition">
//                 <td className="p-3 font-medium">{index + 1}</td>
//                 <td className="p-3">{b.turfName}</td>
//                 <td className="p-3">{b.user}</td>
//                 <td className="p-3">{b.date}</td>
//                 <td className="p-3">{b.time}</td>
//                 <td className="p-3 font-semibold text-green-700">{b.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/booking/getAllBookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h2 className="text-3xl font-bold text-green-700 mb-6">All Bookings</h2>

      <table className="w-full bg-white shadow-md rounded-lg border border-green-200">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-3 text-left">Booking ID</th>
            <th className="p-3 text-left">Turf Name</th>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Time</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-b hover:bg-green-50">
              <td className="p-3">{b.id}</td>
              <td className="p-3">{b.turfName}</td>
              <td className="p-3">{b.userName}</td>
              <td className="p-3">{b.date}</td>
              <td className="p-3">{b.timeSlot}</td>
              <td className="p-3">{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
