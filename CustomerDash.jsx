import React from 'react';
import Layout from '../Components/Layout';

const CustomerDashboard = () => {
  return (
    <Layout role="customer">
      <h1 className="text-2xl font-bold mb-6">Customer Dashboard</h1>

      {/* Upcoming Events Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-2">Event Title</h3>
            <p className="text-gray-600">Event Date: June 15, 2024</p>
            <p className="text-gray-600">Location: City Hall</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
          </div>
        </div>
      </section>

      {/* Booking History Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Booking History</h2>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Event</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">Event Title</td>
              <td className="p-3">June 10, 2024</td>
              <td className="p-3">City Hall</td>
              <td className="p-3 text-green-500">Confirmed</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Profile Management Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Profile Management</h2>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-600">Name: John Doe</p>
          <p className="text-gray-600">Email: john.doe@example.com</p>
          <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">Edit Profile</button>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Notifications</h2>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-600">You have no new notifications.</p>
        </div>
      </section>
    </Layout>
  );
};

export default CustomerDashboard;
