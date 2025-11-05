import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // update window size for confetti
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const submitData = new FormData();
    submitData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("company", formData.company);
    submitData.append("product", formData.product);
    submitData.append("quantity", formData.quantity);
    submitData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        setShowConfetti(true);
        setModalMessage("Your quotation request has been sent successfully!");
        setShowModal(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          product: "",
          quantity: "",
          message: "",
        });

        // Stop confetti after 5 seconds
        setTimeout(() => setShowConfetti(false), 5000);
      } else {
        setModalMessage("Server busy. Please try again later.");
        setShowModal(true);
      }
    } catch (err) {
      setModalMessage("⚠️ Network error. Please try again.");
      setShowModal(true);
    }

    setResult("");
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-[#F5E9DA] to-[#FFFFFF] overflow-hidden"
    >
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-[#FFFFFF] rounded-xl p-6 max-w-md w-full text-center shadow-2xl relative">
            <p className="text-[#3A3A3A] text-lg">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-6 py-2 bg-[#C66A1F] text-white rounded-lg hover:bg-[#5C3A00] transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT INFO SECTION */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-[#3A3A3A]">
            Get Your <span className="text-[#C66A1F]">Quotation</span> Today
          </h2>
          <p className="text-[#5C3A00]/80 text-lg leading-relaxed">
            Reach out with your export needs and our team will provide a customized quotation with transparent pricing, reliable delivery, and complete documentation.
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
              📞 <span className="font-medium">+91 81040 27533</span>
              <br />
              📧{" "}
              <a
                href="mailto:business@skfoodz.in"
                className="text-[#C66A1F] hover:underline"
              >
                business@skfoodz.in
              </a>
            </p>
            <p className="mt-4 text-sm text-[#5C3A00]/70">Ahmedabad, India</p>
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
