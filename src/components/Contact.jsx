import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    qty: '',
  });

  const farmPhone = '+91 95104 59100'; // Farm contact phone
  const farmAddress = 'Rajan Farm, Talala-Veraval Highway, Talala, Gir, Gujarat - 362150';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, city, qty } = formData;

    if (!name || !phone || !city || !qty) {
      alert('Please fill out all fields before ordering.');
      return;
    }

    // Construct the WhatsApp message
    const message = `Hello Rajan Farm! I would like to place an order:
• Name: ${name}
• Phone: ${phone}
• City: ${city}
• Quantity/Selection: ${qty}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${farmPhone.replace(/\D/g, '')}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-white dark:bg-bgWarm-dark transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-96 h-96 bg-farm/5 dark:bg-farm/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-sans tracking-[0.2em] font-extrabold text-farm dark:text-mango uppercase block">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-farm-dark dark:text-white leading-tight">
                Get Fresh Mangoes <br /> Delivered
              </h2>
              <div className="w-12 h-1 bg-mango rounded-full" />
            </div>

            <p className="text-farm-dark/70 dark:text-white/60 font-sans text-base sm:text-lg leading-relaxed">
              Order authentic Gir Kesar mangoes direct from our orchards. Simply fill out the order form, and
              it will open WhatsApp to confirm details, payment, and delivery logistics with us directly.
            </p>

            <div className="space-y-6">
              {/* Phone item */}
              <a
                href={`tel:${farmPhone.replace(/\s/g, '')}`}
                className="flex items-center gap-5 p-4 rounded-2xl glass-card hover:bg-farm/5 dark:hover:bg-white/5 border border-farm-dark/5 dark:border-white/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-farm/10 dark:bg-white/5 flex items-center justify-center text-farm dark:text-mango group-hover:scale-110 transition-transform duration-300">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-sans tracking-wider text-farm-dark/50 dark:text-white/40 uppercase font-bold">
                    Call Direct
                  </p>
                  <p className="text-base sm:text-lg font-serif font-bold text-farm-dark dark:text-white mt-0.5">
                    {farmPhone}
                  </p>
                </div>
              </a>

              {/* WhatsApp item */}
              <a
                href={`https://wa.me/${farmPhone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 p-4 rounded-2xl glass-card hover:bg-farm/5 dark:hover:bg-white/5 border border-farm-dark/5 dark:border-white/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-farm/10 dark:bg-white/5 flex items-center justify-center text-farm dark:text-mango group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-sans tracking-wider text-farm-dark/50 dark:text-white/40 uppercase font-bold">
                    WhatsApp Chat
                  </p>
                  <p className="text-base sm:text-lg font-serif font-bold text-farm-dark dark:text-white mt-0.5">
                    {farmPhone}
                  </p>
                </div>
              </a>

              {/* Address item */}
              <div className="flex items-center gap-5 p-4 rounded-2xl glass-card border border-farm-dark/5 dark:border-white/5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-farm/10 dark:bg-white/5 flex items-center justify-center text-farm dark:text-mango group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-sans tracking-wider text-farm-dark/50 dark:text-white/40 uppercase font-bold">
                    Farm Address
                  </p>
                  <p className="text-sm font-sans font-semibold text-farm-dark/90 dark:text-white/80 mt-0.5 leading-snug">
                    {farmAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-[32px] p-8 sm:p-12 relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-farm-dark dark:text-white mb-8 border-b border-farm-dark/5 dark:border-white/5 pb-4">
                  Place Order Inquiry
                </h3>

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="form-name"
                    className="text-xs font-sans tracking-wider uppercase font-bold text-farm-dark/60 dark:text-white/50"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="glass-input"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="form-phone"
                    className="text-xs font-sans tracking-wider uppercase font-bold text-farm-dark/60 dark:text-white/50"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="form-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    className="glass-input"
                    required
                  />
                </div>

                {/* City */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="form-city"
                    className="text-xs font-sans tracking-wider uppercase font-bold text-farm-dark/60 dark:text-white/50"
                  >
                    Shipping City / State
                  </label>
                  <input
                    type="text"
                    id="form-city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter delivery city (e.g. Ahmedabad, Mumbai)"
                    className="glass-input"
                    required
                  />
                </div>

                {/* Quantity */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="form-qty"
                    className="text-xs font-sans tracking-wider uppercase font-bold text-farm-dark/60 dark:text-white/50"
                  >
                    Box Selection & Quantity
                  </label>
                  <input
                    type="text"
                    id="form-qty"
                    name="qty"
                    value={formData.qty}
                    onChange={handleChange}
                    placeholder="e.g. 2 x Imperial Kesar Box (5 kg)"
                    className="glass-input"
                    required
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-sm tracking-wider uppercase flex items-center justify-center gap-2 shine-hover"
                >
                  <MessageSquare size={16} /> Order on WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
