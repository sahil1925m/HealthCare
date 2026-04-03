import { Link } from 'react-router-dom';
import { HeartPulse, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <HeartPulse className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-blue-900">HealthNGO</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/patient-support" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Support</Link>
            <Link to="/volunteer" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Volunteer</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            <Link to="/faq" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">FAQ</Link>
          </div>
          
          {/* Desktop Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/patient-support" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md shadow-blue-200">
              Get Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-50 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md">Home</Link>
          <Link to="/patient-support" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md">Support</Link>
          <Link to="/volunteer" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md">Volunteer</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md">Contact</Link>
          <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md">FAQ</Link>
          <Link to="/patient-support" onClick={() => setIsMobileMenuOpen(false)} className="block mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md shadow-blue-200">
            Get Support
          </Link>
        </div>
      )}
    </nav>
  );
}
