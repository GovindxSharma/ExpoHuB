import React, { useState } from "react";

const ContactPage = () => {
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
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-[#F5E9DA] to-[#FFFFFF] overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#C66A1F]/15 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5C3A00]/15 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT INFO SECTION */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-[#3A3A3A]">
            Get Your <span className="text-[#C66A1F]">Quotation</span> Today
          </h2>
          <p className="text-[#5C3A00]/80 text-lg leading-relaxed">
            Reach out with your export needs and our team will provide a
            customized quotation with transparent pricing, reliable delivery, and complete documentation.
          </p>

          <div className="bg-[#FFFFFF] rounded-2xl shadow-lg p-6 border border-[#F5E9DA]">
            <h3 className="text-xl font-semibold text-[#3A3A3A] mb-3">
              Contact Information
            </h3>
            <p className="text-[#5C3A00]/90 mb-2">
              <strong>Saim Khoja</strong>
              <br />
              <span className="text-sm text-[#5C3A00]/70">Founder, SK Foodz</span>
            </p>
            <p className="text-[#5C3A00]/90">
              📞 <span className="font-medium">+91 981040 27533</span>
              <br />
              📧{" "}
              <a
                href="mailto:govindsharma2839@gmail.com"
                className="text-[#C66A1F] hover:underline"
              >
                enquiry@skfoodz.in
              </a>
            </p>
            <p className="mt-4 text-sm text-[#5C3A00]/70"> Ahmedabad, India</p>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#FFFFFF] shadow-xl rounded-2xl p-8 lg:p-10 space-y-5 border border-[#F5E9DA]"
        >
          <h3 className="text-2xl font-bold text-[#3A3A3A] mb-2">
            Request a Quotation
          </h3>
          <p className="text-[#5C3A00]/80 text-sm mb-4">
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
              className="w-full px-4 py-3 border border-[#E0D2C0] rounded-lg focus:ring-2 focus:ring-[#C66A1F] outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 border border-[#E0D2C0] rounded-lg focus:ring-2 focus:ring-[#C66A1F] outline-none"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-4 py-3 border border-[#E0D2C0] rounded-lg focus:ring-2 focus:ring-[#C66A1F] outline-none"
            />
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="Product Name"
              required
              className="w-full px-4 py-3 border border-[#E0D2C0] rounded-lg focus:ring-2 focus:ring-[#C66A1F] outline-none"
            />
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Quantity / Units"
              required
              className="w-full px-4 py-3 border border-[#E0D2C0] rounded-lg focus:ring-2 focus:ring-[#C66A1F] outline-none"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message / Requirements"
            rows="4"
            required
            className="w-full px-4 py-3 border border-[#E0D2C0] rounded-lg focus:ring-2 focus:ring-[#C66A1F] outline-none"
          ></textarea>

          <div className="text-right">
            <button
              type="submit"
              className="px-8 py-3 bg-[#C66A1F] text-white font-semibold rounded-lg hover:bg-[#5C3A00] transition-all duration-300 shadow-md"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
