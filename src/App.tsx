import React from 'react';
import { Menu, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-indigo-600" />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Company</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[700px] object-cover"
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-4xl">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-lg">
              Innovate with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Purpose</span>
            </h1>
            <p className="mt-6 text-xl text-gray-200 max-w-3xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4">
              <a href="#" className="inline-flex items-center px-8 py-4 border-2 border-transparent text-base font-semibold rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#" className="inline-flex items-center px-8 py-4 border-2 border-white text-base font-semibold rounded-full text-white hover:bg-white hover:text-indigo-900 transition-all">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="inline-block p-2 bg-indigo-100 rounded-lg">
                <span className="text-indigo-600 font-semibold">About Us</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">Building the Future <br />Together</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.
              </p>
              <div className="pt-4">
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700 inline-flex items-center group">
                  Learn more about us
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block p-2 bg-purple-100 rounded-lg">
                <span className="text-purple-600 font-semibold">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">Empowering Your <br />Success</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
              </p>
              <div className="pt-4">
                <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center group">
                  Discover our mission
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-indigo-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 font-medium">&copy; 2024 Company. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;