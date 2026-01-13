import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/3a684de0-db0f-11ed-a90b-63724fe92d96"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  

    return (
        <section id="contact" className="contact py-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
                            target="_blank"
                            className="text-center"
        >
            <h3>Contact</h3>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                    required
                                    rows="5"
                                    cols="50"
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-blue active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
                    </form>
                </div>
            </div>
        </div>
</section >
  );
};

export default ContactForm;