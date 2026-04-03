import { Link } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <HeartPulse className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-blue-900">HealthNGO</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/patient-support" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Support</Link>
            <Link to="/volunteer" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Volunteer</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            <Link to="/faq" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">FAQ</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/patient-support" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md shadow-blue-200">
              Get Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
