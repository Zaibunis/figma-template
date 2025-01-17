export default function Authentication() {
    return (
      <main className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md rounded-lg bg-gray-900 p-6 shadow-lg sm:p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">Sign In</h2>
          <form className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your username"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
  
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
  
            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
    );
  }