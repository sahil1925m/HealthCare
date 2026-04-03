import { Link } from 'react-router-dom';
import { 
  HeartHandshake, Users, ArrowRight, Ambulance, Activity,
  Stethoscope, Globe, Award, ClipboardList, Target, Syringe,
  Quote
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans items-center overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-slate-50 pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden flex justify-center">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] bg-green-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-80 z-0 pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-8 shadow-sm">
              <Activity className="w-4 h-4" />
              <span>Making a Difference Worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-950 leading-[1.1] mb-6 tracking-tight">
              Providing Healthcare Support to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Those Who Need It Most</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Our mission at <span className="font-semibold text-blue-900">CareConnect NGO</span> is to bridge the gap in healthcare. We deliver critical medical aid, financial support, and community resources to underrepresented regions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/patient-support" className="group relative inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-600/30 overflow-hidden min-w-[240px]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative flex items-center">
                  Get Patient Support <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to="/volunteer" className="inline-flex items-center justify-center bg-white hover:bg-green-50 text-green-700 border-2 border-green-600 px-8 py-4 rounded-full font-bold text-lg transition-all min-w-[240px]">
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative w-full -mt-12 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-slate-100">
            <div className="text-center md:px-4">
              <div className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-1">5000+</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Patients Helped</p>
            </div>
            <div className="text-center md:px-4">
              <div className="mx-auto w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-1">300+</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Volunteers</p>
            </div>
            <div className="text-center md:px-4">
              <div className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-1">12</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Cities Reached</p>
            </div>
            <div className="text-center md:px-4">
              <div className="mx-auto w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-1">8</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive Support for Vital Needs</h3>
            <p className="text-lg text-slate-600">We offer specialized programs targeting urgent healthcare requirements to guarantee holistic well-being for marginalized communities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">Medical Aid</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Providing financial assistance for critical surgeries, long-term treatments, and supplying necessary medications to uninsured sectors.
              </p>
              <Link to="/patient-support" className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-green-200 hover:bg-white hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                <Activity className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">Mental Health Support</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Offering free counseling sessions, community workshops, and rehabilitation programs prioritizing emotional and psychological health.
              </p>
              <Link to="/patient-support" className="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700">
                Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Ambulance className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">Emergency Response</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Rapid mobilization of medical volunteers, first-aid kits, and ambulance services during natural disasters and urgent community crises.
              </p>
              <Link to="/patient-support" className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Process Overview</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How Our Support System Works</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-200 to-green-200 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg border-4 border-blue-50 flex items-center justify-center mb-6 z-10 transition-transform hover:scale-110 duration-300">
                <ClipboardList className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">1. Submit Request</h4>
              <p className="text-slate-600">Patients or families fill out our simple support application outlining their medical conditions and necessary treatments.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg border-4 border-green-50 flex items-center justify-center mb-6 z-10 transition-transform hover:scale-110 duration-300">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">2. Evaluation Process</h4>
              <p className="text-slate-600">Our medical board carefully reviews applications to prioritize critical cases and assign appropriate funding and resources.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg border-4 border-blue-50 flex items-center justify-center mb-6 z-10 transition-transform hover:scale-110 duration-300">
                <Syringe className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">3. Delivery of Care</h4>
              <p className="text-slate-600">Funds are directly transferred to partner hospitals, or volunteers are dispatched to provide on-ground medical assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-24 bg-blue-900 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-white rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Stories of Resilience <br className="hidden lg:block"/>& Healing</h2>
              <p className="text-blue-200 text-lg mb-8">Hear from the inspiring individuals whose lives have been transformed through our community's compassion.</p>
              <Link to="/contact" className="inline-block bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all shadow-lg">
                Partner With Us
              </Link>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {/* Testimonial 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <Quote className="w-10 h-10 text-green-400 mb-6 opacity-80" />
                <p className="text-white text-lg leading-relaxed mb-8">
                  "CareConnect stepped in when all hope seemed lost. They covered my husband's heart surgery costs within days. Words fall short to describe our gratitude."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    SJ
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Sarah Jenkins</h5>
                    <p className="text-blue-200 text-sm">Spouse of Patient</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all md:translate-y-8">
                <Quote className="w-10 h-10 text-blue-400 mb-6 opacity-80" />
                <p className="text-white text-lg leading-relaxed mb-8">
                  "Volunteering with the mental health team has been the most fulfilling journey. Seeing young people regain their confidence is truly a blessing."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    MK
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Michael K.</h5>
                    <p className="text-blue-200 text-sm">Lead Volunteer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
