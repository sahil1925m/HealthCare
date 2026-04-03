import React, { useState } from 'react';

const VolunteerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    skills: {
      Medical: false,
      Counseling: false,
      Logistics: false,
      Fundraising: false,
      Tech: false,
    },
    availability: '',
    reason: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [name]: checked,
      },
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, availability: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        skills: {
          Medical: false,
          Counseling: false,
          Logistics: false,
          Fundraising: false,
          Tech: false,
        },
        availability: '',
        reason: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Volunteer Registration</h2>
        <p className="text-gray-500">Join our team of dedicated volunteers and make a difference.</p>
      </div>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-md">
          <p className="font-medium">Thank you for registering!</p>
          <p className="text-sm">We've received your application and will be in touch soon.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="Your City"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Skills & Expertise</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 cursor-pointer">
            {Object.keys(formData.skills).map((skill) => (
              <label key={skill} className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={skill}
                  checked={formData.skills[skill]}
                  onChange={handleCheckboxChange}
                  className="rounded border-gray-300 text-green-600 focus:ring-green-500 w-4 h-4 cursor-pointer"
                />
                <span className="text-gray-700 text-sm">{skill}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Availability</label>
          <div className="flex space-x-6 cursor-pointer">
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="availability"
                value="Part-time"
                checked={formData.availability === 'Part-time'}
                onChange={handleRadioChange}
                required
                className="border-gray-300 text-green-600 focus:ring-green-500 w-4 h-4 cursor-pointer"
              />
              <span className="text-gray-700 text-sm">Part-time</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="availability"
                value="Full-time"
                checked={formData.availability === 'Full-time'}
                onChange={handleRadioChange}
                required
                className="border-gray-300 text-green-600 focus:ring-green-500 w-4 h-4 cursor-pointer"
              />
              <span className="text-gray-700 text-sm">Full-time</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to volunteer?</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-y"
            placeholder="Share briefly why you'd like to join our mission..."
          ></textarea>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerRegistrationForm;
