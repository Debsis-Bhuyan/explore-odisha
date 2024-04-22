import React from "react";

import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <>
      <div className="   flex flex-col items-center justify-center w-full px-10 ">
        <div className="py-6  items-center justify-center w-full ">
          <h2 className="mt-6 bg-red-500 text-white justify-center flex px-6 py-3 rounded-lg hover:bg-red-600 ">
            Get in Touch
          </h2>
          <p className="mb-6 mt-6 text-gray-600 ">
            We are receptive to new ideas, suggestions, business collaborations,
            enquiries on event sponsorships, tie-ups and trade facilities.
            Please select an appropriate tab before placing your query.
          </p>
        </div>

        <div className="  w-full">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
