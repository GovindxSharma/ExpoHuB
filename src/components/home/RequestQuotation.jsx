import React, { useState } from "react";

const RequestQuotation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your quotation request has been submitted successfully!");
    setFormData({
      name: "",
      email: "",
      company: "",
      product: "",
      quantity: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT INFO SECTION */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Get Your <span className="text-indigo-600">Quotation</span> Today
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Reach out with your export needs and our team will provide a
            customized quotation with transparent pricing, reliable delivery, and complete documentation.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Govind Sharma</strong>  
              <br />
              <span className="text-sm text-gray-500">Founder, ExportHub</span>
            </p>
            <p className="text-gray-600">
              📞 <span className="text-gray-800 font-medium">+91 97129 35176</span>
              <br />
              📧{" "}
              <a
                href="mailto:govindsharma2839@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                govindsharma2839@gmail.com
              </a>
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Location: Ahmedabad, India
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 lg:p-10 space-y-5 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Request a Quotation
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Fill out the form below and we’ll get back to you within 24 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="Product Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Quantity / Units"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message / Requirements"
            rows="4"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          ></textarea>

          <div className="text-right">
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestQuotation;
