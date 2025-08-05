import React from 'react';

function Contri() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-40 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">About Student Nest</h1>

        <p className="text-lg mb-4">
          <strong>Student Nest</strong> is a platform created by students, for students. Our mission is to provide a
          space where learners can connect, share ideas, manage projects, and grow together. Whether it's collaborating
          on assignments, sharing resources, or simply staying organized, Student Nest is your academic home base.
        </p>

        <p className="text-lg mb-4">
          We believe in the power of community and collective learning. Our goal is to foster collaboration, curiosity,
          and innovation among students from all backgrounds.
        </p>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Yash Ghavghave</strong> – Founder & Developer</li>
          <li><strong>Contributors</strong> – Amazing people who supported and inspired this project.</li>
          {/* You can add more team members here */}
        </ul>

        <div className="mt-8 text-center text-sm text-gray-500">
          Built with ❤️ using React, Express, MongoDB, and more.
        </div>
      </div>
    </div>
  );
}

export default Contri;
