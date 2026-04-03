import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-950 mb-4">Contact Us</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Have questions? Partner with us, donate, or inquire about our programs. We're here to listen.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows="5" className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-md w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600 shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Our Headquarters</h4>
                    <p className="text-slate-600 leading-relaxed mt-1">123 Health Avenue<br />Medical District, NY 10001<br />United States</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4 text-green-600 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone</h4>
                    <p className="text-slate-600 mt-1">+1 (555) 123-4567<br />Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600 shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-slate-600 mt-1">contact@healthngo.org<br />support@healthngo.org</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-950 rounded-2xl p-8 text-white mt-auto">
              <h4 className="font-bold text-lg mb-2 text-green-400">Emergency Support</h4>
              <p className="text-sm text-blue-200">For immediate medical emergencies, please dial your local emergency number (e.g. 911). Our services are for supplementary and scheduled aid.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
