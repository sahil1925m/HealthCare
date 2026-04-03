import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PatientSupport from './pages/PatientSupport';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import FaqChatbot from './components/FaqChatbot';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patient-support" element={<PatientSupport />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
        <FaqChatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;
