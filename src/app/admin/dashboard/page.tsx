'use client';

import React, { useState, useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import {
  ChartPieIcon,
  ClipboardListIcon,
  ShoppingBagIcon,
  BarChart,
  Grid2X2,
  UserIcon,
  LucidePieChart
} from 'lucide-react';
import Image from 'next/image';

const pieData = {
  labels: ['Revenue', 'Expenses', 'Profit'],
  datasets: [
    {
      data: [4000, 2400, 1000],
      backgroundColor: ['#8884d8', '#82ca9d', '#ffc658'],
      hoverBackgroundColor: ['#6a4fba', '#6b8e23', '#ffb347']
    }
  ]
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

const products = [
  {
    id: 1,
    img: "/Frame 33 (7).png",
    title: "Gradient Graphic T-shirt",
    rating: 3.5,
    price: "$145",
    description: "Stylish gradient t-shirt for casual wear."
  },
  {
    id: 2,
    img: "/Frame 34 (2).png",
    title: "Polo with Tipping Details",
    rating: 4.5,
    price: "$180",
    description: "Premium polo shirt with elegant tipping details."
  },
  {
    id: 3,
    img: "/Frame 38 (2).png",
    title: "Black Striped T-shirt",
    rating: 5.0,
    price: "$120",
    originalPrice: "$150",
    discount: "-30%",
    description: "Comfortable black striped t-shirt."
  },
  {
    id: 4,
    img: "/Frame 33 (5).png",
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: "$240",
    originalPrice: "$260",
    discount: "-20%",
    description: "Stylish and durable skinny-fit denim."
  },
  {
    id: 5,
    img: "/Frame 34.png",
    title: "Checkered Shirt",
    rating: 4.4,
    price: "$180",
    description: "Classic checkered shirt perfect for casual wear."
  },
  {
    id: 6,
    img: "/Frame 38.png",
    title: "Sleeve Striped T-shirt",
    rating: 3.5,
    price: "$130",
    originalPrice: "$160",
    discount: "-30%",
    description: "Comfortable striped t-shirt with sleek design."
  },
  {
    id: 7,
    img: "/Frame 32 (2).png",
    title: "Vertical Striped Shirt",
    rating: 5.0,
    price: "$212",
    originalPrice: "$232",
    discount: "-20%",
    description: "Vertical striped shirt for a bold look."
  },
  {
    id: 8,
    img: "/Frame 33 (6).png",
    title: "Courage Graphic T-shirt",
    rating: 4.0,
    price: "$145",
    description: "Trendy graphic t-shirt for everyday wear."
  },
  {
    id: 9,
    img: "/Frame 34 (1).png",
    title: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    price: "$80",
    description: "Casual bermuda shorts with a loose fit."
  }
];

const orders = [
  {
    id: 1,
    name: "John Doe",
    items: "1 x Gradient Graphic T-shirt",
    address: "123 Street, City, Country",
    date: "2025-02-01",
    time: "10:00 AM",
    totalAmount: 145,
    status: "Completed"
  },
  {
    id: 2,
    name: "Jane Smith",
    items: "2 x Polo with Tipping Details, 1 x Black Striped T-shirt",
    address: "456 Avenue, City, Country",
    date: "2025-02-02",
    time: "12:30 PM",
    totalAmount: 480,
    status: "Pending"
  },
  {
    id: 3,
    name: "Michael Johnson",
    items: "3 x Skinny Fit Jeans, 1 x Courage Graphic T-shirt",
    address: "789 Road, City, Country",
    date: "2025-02-03",
    time: "2:15 PM",
    totalAmount: 520,
    status: "Shipped"
  },
  {
    id: 4,
    name: "Sarah Brown",
    items: "1 x Vertical Striped Shirt, 2 x Loose Fit Bermuda Shorts",
    address: "101 Boulevard, City, Country",
    date: "2025-02-04",
    time: "9:00 AM",
    totalAmount: 370,
    status: "Completed"
  },
  {
    id: 5,
    name: "Chris Davis",
    items: "1 x Sleeve Striped T-shirt, 1 x Checkered Shirt",
    address: "202 Lane, City, Country",
    date: "2025-02-05",
    time: "5:00 PM",
    totalAmount: 310,
    status: "Pending"
  },
  {
    id: 6,
    name: "Jessica Wilson",
    items: "2 x Black Striped T-shirt, 1 x Gradient Graphic T-shirt",
    address: "303 Place, City, Country",
    date: "2025-02-06",
    time: "11:45 AM",
    totalAmount: 395,
    status: "Completed"
  },
  {
    id: 7,
    name: "David Lee",
    items: "1 x Courage Graphic T-shirt, 1 x Polo with Tipping Details",
    address: "404 Road, City, Country",
    date: "2025-02-07",
    time: "8:30 AM",
    totalAmount: 325,
    status: "Shipped"
  },
  {
    id: 8,
    name: "Emily Clark",
    items: "1 x Skinny Fit Jeans, 1 x Vertical Striped Shirt",
    address: "505 Street, City, Country",
    date: "2025-02-08",
    time: "3:30 PM",
    totalAmount: 452,
    status: "Pending"
  },
  {
    id: 9,
    name: "Daniel Martinez",
    items: "1 x Checkered Shirt, 2 x Loose Fit Bermuda Shorts",
    address: "606 Avenue, City, Country",
    date: "2025-02-09",
    time: "4:00 PM",
    totalAmount: 310,
    status: "Completed"
  }
];

export default function AdminDashboard() {
  // Set the default tab to 'dashboard'
  const [activeTab, setActiveTab] = useState('dashboard');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
 
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue (USD)',
        data: [6500, 5900, 8000, 8100, 5600, 5500],
        borderColor: 'white',
        tension: 0.4
      }
    ]
  };

  
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-white mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-white mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 text-lg font-semibold"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="md:w-64 w-full md:min-h-screen bg-gray-800 p-6 border-r border-gray-700">
        <h1 className="text-2xl font-bold mb-8 text-center md:text-left">Admin Dashboard</h1>
        <nav>
          <ul className="space-y-2">
            {[
              { name: 'dashboard', icon: <Grid2X2 className="w-5 h-5 inline mr-2" /> },
              { name: 'products', icon: <ShoppingBagIcon className="w-5 h-5 inline mr-2" /> },
              { name: 'orders', icon: <ClipboardListIcon className="w-5 h-5 inline mr-2" /> },
              { name: 'revenue', icon: <BarChart className="w-5 h-5 inline mr-2" /> },
              { name: 'profile', icon: <UserIcon className="w-5 h-5 inline mr-2" /> }
            ].map(({ name, icon }) => (
              <li key={name}>
                <button
                  onClick={() => setActiveTab(name)}
                  className={`w-full text-left p-3 rounded-lg capitalize ${
                    activeTab === name ? 'bg-gray-700' : 'hover:bg-gray-700'
                  }`}
                >
                  {icon} {name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <header className="mb-6 flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4">
          <h2 className="text-2xl font-bold capitalize mb-4 md:mb-0">{activeTab}</h2>
          <div className="flex items-center gap-4">
           
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-600"
            >
              Logout
            </button>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Dashboard Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Total Products',
                  value: products.length,
                  icon: <ShoppingBagIcon className="w-6 h-6 inline mr-2" />
                },
                {
                  title: 'Total Orders',
                  value: orders.length,
                  icon: <ClipboardListIcon className="w-6 h-6 inline mr-2" />
                },
                {
                  title: 'Total Revenue',
                  value: `$${orders.reduce((sum, order) => sum + order.totalAmount, 0)}`,
                  icon: <ChartPieIcon className="w-6 h-6 inline mr-2" />
                }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 p-4 flex items-center">
                  {stat.icon}
                  <div>
                    <h3 className="text-gray-400 text-sm">{stat.title}</h3>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Products List */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 overflow-x-auto">
              <h3 className="text-xl font-semibold mb-4">Products</h3>
              <table className="min-w-full border-collapse">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-3 text-left">Image</th>
                    <th className="p-3 text-left">ID</th>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Discount</th>
                    <th className="p-3 text-left">Rating</th>
                    <th className="p-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b border-gray-700">
                      <td className="p-3">
                        <Image
                          src={product.img}
                          width={70}
                          height={70}
                          alt={product.title}
                          className="object-cover rounded-md"
                        />
                      </td>
                      <td className="p-3">{product.id}</td>
                      <td className="p-3 font-semibold">{product.title}</td>
                      <td className="p-3">{product.price}</td>
                      <td className="p-3">{product.discount || 'N/A'}</td>
                      <td className="p-3">{product.rating} ⭐</td>
                      <td className="p-3 text-gray-300">{product.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Orders List */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 overflow-x-auto">
              <h3 className="text-xl font-semibold mb-4">Order History</h3>
              <table className="min-w-full border-collapse">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-2 border border-gray-600">Order ID</th>
                    <th className="p-2 border border-gray-600">Date</th>
                    <th className="p-2 border border-gray-600">Amount</th>
                    <th className="p-2 border border-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="text-center">
                      <td className="p-2 border border-gray-600">{order.id}</td>
                      <td className="p-2 border border-gray-600">
                        {order.date} {order.time}
                      </td>
                      <td className="p-2 border border-gray-600">${order.totalAmount}</td>
                      <td className="p-2 border border-gray-600">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            order.status === 'Completed'
                              ? 'bg-gray-600'
                              : order.status === 'Shipped'
                              ? 'bg-gray-500'
                              : 'bg-gray-700'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4">Product Inventory</h3>
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Image</th>
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Discount</th>
                  <th className="p-3 text-left">Rating</th>
                  <th className="p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-gray-700">
                    <td className="p-3">
                      <Image
                        src={product.img}
                        width={70}
                        height={70}
                        alt={product.title}
                        className="object-cover rounded-md"
                      />
                    </td>
                    <td className="p-3">{product.id}</td>
                    <td className="p-3 font-semibold">{product.title}</td>
                    <td className="p-3">{product.price}</td>
                    <td className="p-3">{product.discount || 'N/A'}</td>
                    <td className="p-3">{product.rating} ⭐</td>
                    <td className="p-3 text-gray-300">{product.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4">Order History</h3>
            <table className="min-w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Order ID</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-700">
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">
                      {order.date} {order.time}
                    </td>
                    <td className="p-3">${order.totalAmount}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Completed'
                            ? 'bg-gray-600'
                            : order.status === 'Shipped'
                            ? 'bg-gray-500'
                            : 'bg-gray-700'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center mb-6">
              {/* Profile Picture */}
              <div className="w-32 h-32 rounded-full bg-gray-700 overflow-hidden border-4 border-blue-600">
                <Image
                  src="/ppp.jpg"
                  width={200}
                  height={200}
                  alt="Profile"
                  className="object-cover"
                  quality={100} // Increases the image quality
                />
              </div>
              {/* User Information */}
              <div className="mt-4 text-center">
                <h2 className="text-3xl font-bold mb-2">Faria Mustaqim</h2>
                <p className="text-lg text-gray-400 mb-4">Administrator</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-b border-gray-700 pb-4 text-center">
                <h3 className="font-semibold text-lg text-gray-300 mb-2">Contact Information</h3>
                <p className="text-sm text-gray-400">Email: zainabmustaqeem123@hotmail.com</p>
                <p className="text-sm text-gray-400">Phone: 0314-2238289</p>
              </div>

              <div className="flex justify-center space-x-6">
                <div>
                  <p className="text-2xl font-bold">131</p>
                  <p className="text-sm text-gray-400">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">105</p>
                  <p className="text-sm text-gray-400">Connections</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">32</p>
                  <p className="text-sm text-gray-400">Repositories</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'revenue' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Total Revenue', value: '$45,231' },
                { title: 'Net Profit', value: '$32,543' },
                { title: 'Active Users', value: '2,342' },
                { title: 'Conversion Rate', value: '3.42%' }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 p-4">
                  <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 flex justify-center">
              <div className="w-full max-w-md text-center">
                <h3 className="text-xl font-semibold mb-4">Revenue Overview</h3>
                <div className="w-full h-64">
                  <Line data={revenueData} options={{ maintainAspectRatio: false }} />
                </div>
              </div>
            </div>
            
            {/* Pie Chart Section */}
            <div className="w-full max-w-md mx-auto my-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 justify-center">
                <LucidePieChart size={24} className="text-green-500" />
                Revenue Distribution
              </h4>
              <Pie data={pieData} options={{ responsive: true }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
