import { Heart, Activity, Globe } from 'lucide-react';

export default function Volunteer() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-green-600 py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Become a Volunteer</h1>
          <p className="text-green-50 text-xl max-w-2xl mx-auto leading-relaxed">Join hands with us to bring healthcare and smile to thousands of people. Every effort counts in making a difference.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-8">Why Volunteer With Us?</h2>
            <div className="space-y-8">
              <div className="flex">
                <div className="bg-green-100 p-3 rounded-xl h-fit mr-4">
                  <Activity className="text-green-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Direct Health Impact</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Assist in organizing medical camps and directly aid doctors in providing preliminary and essential healthcare.</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-blue-100 p-3 rounded-xl h-fit mr-4">
                  <Heart className="text-blue-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Fulfill Compassionate Duty</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Help vulnerable groups through emotional and logistical support, bringing comfort beyond medicine.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-blue-950 mb-6">Registration Application</h3>
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-green-400 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-green-400 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" className="w-full bg-white border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-green-400 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Area of Interest</label>
                <select className="w-full bg-white border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-green-400 outline-none">
                  <option>Medical Camp Assistance</option>
                  <option>Fundraising & Events</option>
                  <option>Patient Guide / Logistics</option>
                  <option>Social Media & Marketing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Brief Background / Skills</label>
                <textarea rows="3" className="w-full bg-white border border-slate-200 rounded-lg p-2.5 resize-none focus:ring-2 focus:ring-green-400 outline-none"></textarea>
              </div>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors shadow-md">
                Register as Volunteer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
