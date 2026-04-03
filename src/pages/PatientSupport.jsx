import { FileText, Calendar, User } from 'lucide-react';

export default function PatientSupport() {
  return (
    <div className="py-16 bg-blue-50/50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-950 mb-4">Patient Support Form</h1>
          <p className="text-slate-600">Register for medical assistance, financial aid evaluation, or to book an appointment with our specialists.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-blue-100 p-8 md:p-12 border border-blue-100">
          <form className="space-y-8" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 flex items-center"><User className="w-4 h-4 mr-2 text-blue-500" /> Full Name</label>
                <input type="text" className="w-full rounded-lg border-slate-200 bg-slate-50 border p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Date of Birth</label>
                <input type="date" className="w-full rounded-lg border-slate-200 bg-slate-50 border p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Contact Information</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="email" className="w-full rounded-lg border-slate-200 bg-slate-50 border p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Email Address" />
                <input type="tel" className="w-full rounded-lg border-slate-200 bg-slate-50 border p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Phone Number" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center"><FileText className="w-4 h-4 mr-2 text-blue-500" /> Medical Condition / Reason for Support</label>
              <textarea rows="4" className="w-full rounded-lg border-slate-200 bg-slate-50 border p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="Please describe your current condition or what kind of support you are seeking..."></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center"><Calendar className="w-4 h-4 mr-2 text-blue-500" /> Preferred Support Type</label>
              <select className="w-full rounded-lg border-slate-200 bg-slate-50 border p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                <option>General Checkup / Consultation</option>
                <option>Financial Aid for Surgery / Treatment</option>
                <option>Medication Request</option>
                <option>Mental Health Counseling</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all shadow-md shadow-blue-200">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
