import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e : { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e : Event) => {
    e.preventDefault();
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const serviceId : string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = "template_8fl1m2b";

    emailjs.send(serviceId , templateId, formData, publicKey).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section className="bg-Landingpages-card-color border border-solid rounded-2xl border-Landingpages-gray p-4 my-8 w-[100%] md:w-[60%] flex justify-center item-center ">
      <div className="w-full mx-4">
        <h2 className="text-paragraph font-Urbanist font-bold mb-8 text-center">
          Contact Us
        </h2>
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-6 font-Poppins text-small"
        >
          <div>
            <label className="block mb-2 font-medium text-Landingpages-textPrimary">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-Landingpages-layer2 w-full px-3 py-2 rounded-lg outline-none focus:border focus:border-Landingpages-gray"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-Landingpages-textPrimary">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-Landingpages-layer2 w-full px-3 py-2 rounded-lg outline-none focus:border focus:border-Landingpages-gray"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-Landingpages-textPrimary">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-Landingpages-layer2 w-full px-3 py-2 rounded-lg outline-none focus:border focus:border-Landingpages-gray"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white font-Urbanist bg-Landingpages-dark-bleu rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
