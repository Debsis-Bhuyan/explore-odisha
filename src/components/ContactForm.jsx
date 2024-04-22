import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <form className="py-8 ">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="">
          <textarea
            rows={5}
            placeholder="Your Message"
            maxLength={200}
            style={{ resize: "none" }}
            className="w-full p-2 border rounded-md text-gray-600"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
