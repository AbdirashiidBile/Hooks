import React from 'react';

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to the Employee Management System</h1>
      <p className="mb-4">
        This system allows you to manage your employees, including registering new employees, viewing employee details, and editing employee information.
      </p>
      <div className="flex justify-center">
        <a href="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register Employee
        </a>
      </div>
    </div>
  );
}

export default Home;