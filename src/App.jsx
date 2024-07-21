// import React from 'react';

// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { useState } from 'react';



// const Navbar = () => {
//   return (
//     <nav className="bg-blue-500 shadow-md">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <Link to="/" className="text-white font-bold text-xl">
//             Employee Management
//           </Link>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Link to="/" className="text-white hover:text-gray-200">
//             Home
//           </Link>
//           <Link to="/register" className="text-white hover:text-gray-200">
//             Register
//           </Link>
//           <Link to="/employees" className="text-white hover:text-gray-200">
//             View Employees
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const Home = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {/* Home page content */}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };
// const Register = () => {
//   const [employees, setEmployees] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission and data validation here
//     const newEmployee = {
//       id: e.target.id.value,
//       name: e.target.name.value,
//       department: e.target.department.value,
//       email: e.target.email.value,
//       phone: e.target.phone.value,
//       salary: e.target.salary.value,
//       jobTitle: e.target['job-title'].value,
//       gender: e.target.gender.value,
//       hireDate: e.target['hire-date'].value,
//     };
//     setEmployees([...employees, newEmployee]);
//     console.log('Form submitted');
//     // Clear the form fields
//     e.target.reset();
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="container mx-auto my-10">
//         <h1 className="text-3xl font-bold mb-6">Register New Employee</h1>

//         <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="id">
//           ID 
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="id"
//           type="text"
//           placeholder="Enter employee ID"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
//           Name
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="name"
//           type="text"
//           placeholder="Enter employee name"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="department">
//           Department
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="department"
//           type="text"
//           placeholder="Enter employee department"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//           Email
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="email"
//           type="email"
//           placeholder="Enter employee email"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
//           Phone Number
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="phone"
//           type="tel"
//           placeholder="Enter employee phone number"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="salary">
//           Salary
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="salary"
//           type="number"
//           placeholder="Enter employee salary"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="job-title">
//           Job Title
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="job-title"
//           type="text"
//           placeholder="Enter employee job title"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
//           Gender
//         </label>
//         <select
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="gender"
//           required
//         >
//           <option value="">Select gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="hire-date">
//           Hire Date
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="hire-date"
//           type="date"
//           required
//         />
//       </div>

//       <div className="flex items-center justify-between">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           Submit
//         </button>
    
//       </div>
//         </form>
//         <EmployeeList employees={employees} />

  
//       </div>
//       <Footer />
//     </div>
//   );
// };

// const EmployeeList = () => {

//   return (
//     <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-bold mb-4">Registered Employees</h2>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th className="text-left py-2 px-4 bg-gray-200">ID</th>
//             <th className="text-left py-2 px-4 bg-gray-200">Name</th>
//             <th className="text-left py-2 px-4 bg-gray-200">Department</th>
//             <th className="text-left py-2 px-4 bg-gray-200">Email</th>
//             <th className="text-left py-2 px-4 bg-gray-200">Phone</th>
//             <th className="text-left py-2 px-4 bg-gray-200">Salary</th>
//             <th className="text-left py-2 px-4 bg-gray-200">Job Title</th>
//             <th className="text-left py-2 px-4 bg-gray-200">Gender</th>
//             <th className="text-left py-2 px-4 bg-gray-200">Hire Date</th>
//           </tr>
//         </thead>
      
//       </table>
//     </div>
//   );
// };
// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-4">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//         <p>&copy; 2023 Employee Management. All rights reserved.</p>
//         <div>
//           <a
//             href="#"
//             className="text-gray-300 hover:text-white mr-4"
//           >
//             Privacy Policy
//           </a>
//           <a
//             href="#"
//             className="text-gray-300 hover:text-white"
//           >
//             Terms of Service
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/employees" element={<EmployeeList />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import ViewEmployees from './View Employees';
import EditEmployee from './EditEmployee';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Employee Management</Link>
            <ul className="flex space-x-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/view-employees">View Employees</Link></li>
            </ul>
          </div>
        </nav>

        <div className="flex-grow container mx-auto py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/view-employees" element={<ViewEmployees />} />
            <Route path="/edit-employee/:id" element={<EditEmployee />} />
          </Routes>
        </div>

        <footer className="bg-gray-800 text-white py-4 mt-auto">
          <div className="container mx-auto text-center">
            &copy; 2024 Employee Management System
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;