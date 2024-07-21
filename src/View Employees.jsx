import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ViewEmployees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      const fetchEmployees = async () => {
        try {
          const response = await axios.get('/api/employees');
          setEmployees(response.data);
        } catch (error) {
          console.error('Error fetching employees:', error);
        }
      };
      fetchEmployees();
    }, []);
  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">View Employees</h2>
      {employees.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Position</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b">
                <td className="py-2 px-4">{employee.name}</td>
                <td className="py-2 px-4">{employee.email}</td>
                <td className="py-2 px-4">{employee.position}</td>
                <td className="py-2 px-4">
                  <Link to={`/edit-employee/${employee.id}`} className="text-blue-500 hover:text-blue-700 mr-4">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
}

export default ViewEmployees;