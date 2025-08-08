import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitInquiry = useMutation(api.inquiries.submitInquiry);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitInquiry(formData);
      toast.success("Thank you for your inquiry. We'll contact you soon!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("There was an error submitting your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take the first step towards healing. Reach out to us today for confidential 
            support and information about our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">
                    Engashura - Kwa Buda Stage<br />
                    Nakuru-Bahati Road<br />
                    Nakuru, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Phone Numbers</h4>
                  <p className="text-gray-600">
                    <a href="tel:0117684003" className="hover:text-emerald-600">0117 684 003</a><br />
                    <a href="tel:0735269968" className="hover:text-emerald-600">0735 269 968</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:presbyterianmedcare2025@gmail.com" className="hover:text-emerald-600">
                      presbyterianmedcare2025@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-600 text-xl">🕐</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Hours</h4>
                  <p className="text-gray-600">
                    24/7 Emergency Support<br />
                    Office Hours: Mon-Fri 8AM-6PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8">
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl mb-2 block">🗺️</span>
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Engashura - Kwa Buda Stage, Nakuru</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-vertical"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Confidential:</strong> All inquiries are handled with complete confidentiality. 
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
