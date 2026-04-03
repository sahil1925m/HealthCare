import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-50 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <HeartPulse className="h-8 w-8 text-green-400" />
              <span className="font-bold text-2xl text-white">HealthNGO</span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Dedicated to providing accessible healthcare support and resources to those in need. Compassion in action.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/patient-support" className="text-blue-200 hover:text-white transition-colors">Patient Support</Link></li>
              <li><Link to="/volunteer" className="text-blue-200 hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link to="/faq" className="text-blue-200 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-blue-200">
                <MapPin className="h-5 w-5 text-green-400 shrink-0" />
                <span>123 Health Avenue<br/>Medical District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-blue-200">
                <Phone className="h-5 w-5 text-green-400 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-blue-200">
                <Mail className="h-5 w-5 text-green-400 shrink-0" />
                <span>contact@healthngo.org</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-blue-200 text-sm mb-4">Subscribe for updates on medical camps.</p>
            <form className="flex" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="bg-blue-900 border-blue-800 text-white placeholder-blue-300 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-green-400 border" />
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md transition-colors font-medium">Join</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
