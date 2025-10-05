import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1842517328/photo/hand-holding-speech-bubble-with-contact-us-message.jpg?s=612x612&w=0&k=20&c=LW9RLJok_uwqYKdZtvprx05zf3okZHV-yzGylbvOLwE="
            alt="Contact Us"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Right Contact Form Section */}
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#CA1515] mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have a question or project in mind? We’d love to hear from you!  
            Fill out the form below and we’ll get back to you soon.
          </p>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#CA1515]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#CA1515]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                resize-none focus:outline-none focus:ring-2 focus:ring-[#CA1515]"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#CA1515] text-white py-2 rounded-lg 
              hover:bg-[#b11212] transition duration-300 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
