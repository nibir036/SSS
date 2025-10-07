import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          serviceInterest: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please try again later.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-none mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Ready to explore global opportunities? Get in touch with our expert team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                {submitMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input 
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+880 1XXX-XXXXXX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input 
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="Export Services">Export Services</option>
                  <option value="Import Solutions">Import Solutions</option>
                  <option value="Logistics & Contracting">Logistics & Contracting</option>
                  <option value="Custom Requirements">Custom Requirements</option>
                  <option value="Partnership Opportunities">Partnership Opportunities</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Office Locations</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Head Office - Dhaka
                </h3>
                <div className="text-gray-600 ml-7">
                  <p>Arma Mazeda Malik Tower, (5th Floor)</p>
                  <p>House no. kha-215, kha-215/1, Pragati Sharani,</p>
                  <p>Merul Badda, Dhaka, Bangladesh</p>
                  <p className="flex items-center mt-2"><Phone className="w-4 h-4 mr-2" /> +880 1716942018</p>
                  <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@ssssoilengineer.com</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Sunday - Thursday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> For urgent inquiries outside business hours, 
                  please email us and we'll respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-semibold">24/7 Hotline</p>
                    <p>+880 1716942018</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-semibold">Business Inquiries</p>
                    <p>business@ssssoilengineer.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-semibold">Export Department</p>
                    <p>export@ssssoilengineer.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Find Us</h2>
          
          {/* Google Maps Embed Container */}
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.640931512607!2d90.42428667832439!3d23.772975260312375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7002abb03c9%3A0xf3edc89d9dad47c2!2sSSS%20Soil%20Engineer&#39;s!5e0!3m2!1sen!2sbd!4v1758776675196!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SSS Soil Engineer's Office Location"
              className="w-full"
            />
          </div>
          
          {/* Map Information */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  Our Address
                </h3>
                <div className="text-gray-600 space-y-1">
                  <p>Arma Mazeda Malik Tower</p>
                  <p>(5th Floor)</p>
                  <p>House no. kha-215, kha-215/1</p>
                  <p>Pragati Sharani, Merul Badda</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Directions</h3>
                <div className="space-y-2">
                  <a 
                    href="https://maps.google.com/maps?daddr=Arma+Mazeda+Malik+Tower,+Pragati+Sharani,+Merul+Badda,+Dhaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Get Directions in Google Maps
                  </a>
                  <br />
                  <p className="text-sm text-gray-500">
                    Located in the heart of Merul Badda, easily accessible by car and public transport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;