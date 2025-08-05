import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800 pt-50">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-6">We'd love to hear from you! Reach out through the following platforms:</p>

        <div className="flex justify-center space-x-8 text-3xl">
          <a
            href="https://www.linkedin.com/in/yash-ghavghave-3b0782262/?trk=PROFILE_DROP_DOWN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yashghavghave"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <FaGithub />
          </a>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          You can also connect via GitHub for project collaboration or LinkedIn for professional inquiries.
        </div>
      </div>
    </div>
  );
}

export default Page;
