// import "./App.css";
// import AllTurf from "./components/AllTurf";
// // import SignIn from "./pages/signin/SignIn";
// // import SignUp from "./pages/signup/SignUp";

// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       {/* <SignIn/> */}
//       {/* <SignUp/> */}
//       <AllTurf />
//     </>
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path="/" element={<AllTurf />} />
//     //     <Route path="/add-turf" element={<AddTurf />} />
//     //   </Routes>
//     // </BrowserRouter>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import AllTurf from "./components/AllTurf";
// import AddTurf from "./components/AddTurf";
// import EditTurf from "./components/EditTurf";
// import AllBookings from "./components/AllBookings";

// export default function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-green-50">
//         {/* Navbar */}
//         <nav className="bg-green-700 text-white p-4 flex justify-between shadow-md">
//           <h1 className="text-xl font-bold">🏏 Turf Nation Admin</h1>
//           <div className="space-x-6">
//             <Link to="/" className="hover:underline">
//               All Turfs
//             </Link>
//             <Link to="/add" className="hover:underline">
//               Add Turf
//             </Link>
//             <Link to="/bookings" className="hover:underline">
//               View Bookings
//             </Link>
//           </div>
//         </nav>

//         {/* Main Routes */}
//         <div className="p-6">
//           <Routes>
//             <Route path="/" element={<AllTurf />} />
//             <Route path="/add" element={<AddTurf />} />
//             <Route path="/edit/:id" element={<EditTurf />} />
//             <Route path="/bookings" element={<AllBookings />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import AllTurf from "./components/AllTurf";
// import AddTurf from "./components/AddTurf";
// import EditTurf from "./components/EditTurf";
// import AllBooking from "./components/AllBookings";

// function App() {
//   return (
//     <Router>
//       <div className="bg-green-50 min-h-screen">
//         {/* Simple Header Nav (temporary) */}
//         <header className="bg-green-600 text-white py-4 shadow-md mb-6">
//           <nav className="flex justify-center space-x-6 text-lg font-semibold">
//             <Link to="/" className="hover:underline">
//               All Turfs
//             </Link>
//             <Link to="/addTurf" className="hover:underline">
//               Add Turf
//             </Link>
//             <Link to="/allBooking" className="hover:underline">
//               All Bookings
//             </Link>
//           </nav>
//         </header>

//         <Routes>
//           <Route path="/" element={<AllTurf />} />
//           <Route path="/addTurf" element={<AddTurf />} />
//           <Route path="/editTurf" element={<EditTurf />} />
//           <Route path="/allBooking" element={<AllBooking />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import AddTurf from "./components/AddTurf";
import ManageTurfs from "./components/AllTurf";
import Bookings from "./components/AllBookings";

function App() {
  return (
    <Router>
      <div className="flex bg-green-50 min-h-screen">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <div className="flex-1 ml-20 md:ml-80 transition-all duration-300 p-6">
          <Routes>
            <Route path="/admin/add-turf" element={<AddTurf />} />
            <Route path="/admin/manage-turfs" element={<ManageTurfs />} />
            <Route path="/admin/bookings" element={<Bookings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
