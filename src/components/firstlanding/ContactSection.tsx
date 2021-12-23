import React from "react";

const ContactSection = ({ parameter }: { parameter: string }): JSX.Element => {
  const activeSection = parameter;
  return (
    <section className="contact-section">
      <form className="contact-form">
        <input type="text" name="name" id="name" autoComplete="off" placeholder="name" />
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="email"
        />
        <textarea name="msg" id="msg" placeholder="message" autoComplete="off"></textarea>
        <button type="submit" className="form-submit-btn">
          contact
        </button>
      </form>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.163742937!2d76.81306771991275!3d28.647279935262464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1639489002410!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
