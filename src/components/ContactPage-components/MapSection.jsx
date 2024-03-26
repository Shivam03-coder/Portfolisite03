import React from "react";

function MapSection() {
  return (
      <iframe
         className="hero bg-base-200 size-4/5 mx-auto rounded-2xl shadow-Bx"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58502.41699305068!2d72.34177893131184!3d23.58994522794847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c422caf789ef5%3A0x170bbc90b8be8bdc!2sMehsana%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1711216579348!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
  );
}

export default MapSection;
