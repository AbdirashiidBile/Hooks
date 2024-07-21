import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/employees', { name, email, position });
      // Reset form fields and set success state
      setName('');
      setEmail('');
      setPosition('');
      setSuccess(true);
      setError('');
    } catch (error) {
      // Set error message
      setError('Error registering employee. Please try again.');
      console.error('Error registering employee:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Register Employee</h2>
      {success ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Employee registered successfully!
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;