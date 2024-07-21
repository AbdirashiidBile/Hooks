import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`/api/employees/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setPosition(response.data.position);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/employees/${id}`, { name, email, position });
      navigate('/view-employees');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="position" className="block font-bold mb-2">Position:</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;