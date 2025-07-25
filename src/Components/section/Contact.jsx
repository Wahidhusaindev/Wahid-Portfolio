import RevealOnScreen from './RevealOnScreen';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const Contact = () => {
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const VITE_SERVICE_ID = 'service_9nwyrqo';
    const VITE_TEMPLATE_ID = 'template_sz8rwda';
    const VITE_PUBLIC_KEY = 'b6gc55Io-uWHRkNhM';

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, e.target, VITE_PUBLIC_KEY)
            .then((result) => {
        
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' }); // Reset form after successful submission
            })
            .catch((error) => {
                alert("Error sending message: " + error.text);
            });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-10 sm:py-16 md:py-20">
            <RevealOnScreen>
                <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>

<form className='space-y-4 sm:space-y-6' onSubmit={sendEmail} autoComplete="off">
  <div className='relative'>
    <input
      type="text"
      id='name'
      name='user_name'
      placeholder='Your Name'
      className='w-full bg-white/5 border border-white/10 rounded px-3 py-2 sm:px-4 sm:py-3 text-white text-base sm:text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder:text-gray-400'
      required
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />
  </div>
  <div className='relative'>
    <input
      type="email"
      id='email'
      name='user_email'
      placeholder='Your Email'
      className='w-full bg-white/5 border border-white/10 rounded px-3 py-2 sm:px-4 sm:py-3 text-white text-base sm:text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder:text-gray-400'
      required
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
  </div>
  <div className='relative'>
    <textarea
      id='message'
      name='message'
      placeholder='Your Message'
      className='w-full bg-white/5 border border-white/10 rounded px-3 py-2 sm:px-4 sm:py-3 text-white text-base sm:text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder:text-gray-400 resize-none'
      required
      rows={5}
      value={formData.message}
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
    />
  </div>
  <button
    type='submit'
    className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-3 rounded font-medium text-base sm:text-lg transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,138,246,0.2)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
  >
    Send Message
  </button>
</form>



                </div>
                </RevealOnScreen>
        </section>
    );
}
export default Contact;