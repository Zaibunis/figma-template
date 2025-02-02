'use client';

import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-black text-gray-200">
      {/* Authentication Check */}
      <SignedOut>
        <div className="w-full h-screen flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
            <SignInButton>
              <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700">Sign In</button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>
      
      <SignedIn>
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 p-6">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          <nav>
            <ul>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-400">Dashboard</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-400">Users</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-400">Settings</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-gray-400">Reports</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <header className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Dashboard Overview</h2>
            <UserButton />
          </header>

          {/* Cards Section */}
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded shadow">
              <h3 className="text-xl font-medium mb-2">Card 1</h3>
              <p className="text-gray-400">Overview information for card 1.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded shadow">
              <h3 className="text-xl font-medium mb-2">Card 2</h3>
              <p className="text-gray-400">Overview information for card 2.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded shadow">
              <h3 className="text-xl font-medium mb-2">Card 3</h3>
              <p className="text-gray-400">Overview information for card 3.</p>
            </div>
          </main>
        </div>
      </SignedIn>
    </div>
  );
}
