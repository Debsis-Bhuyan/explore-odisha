import React, { useState } from "react";
import Inputbox from "./Inputbox";
import { Toaster, toast } from "sonner";
import useStore from "../store";
import { API_URL } from "../utils/apiCall";

const ContactForm = () => {

  const { setIsLoading } = useStore();

  const [data, setData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    // const [name, value] = e.target; change to one below
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      setIsLoading(true);
      const response = await fetch(
        API_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      )
      const res = await response.json();
      toast.success(res?.message)
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <form className="py-8 " onSubmit={handleSubmit}>
        <div className="mb-4">
          <Inputbox
            label="name"
            name="fullname"
            type="text"
            isRequired={true}
            placeholder="Enter your Name"
            value={data?.fullname}
            onChange={handleChange}
          />
          
        </div>

        <div className="mb-4">
          <Inputbox
            label="Email Address"
            name="email"
            type="email"
            isRequired={true}
            placeholder="email@example.com"
            value={data?.email}
            onChange={handleChange}
          />
          
        </div>

        <div className="">
          <Inputbox
            label="message"
            name="message"
            type="text"
            isRequired={true}
            placeholder="feedback"
            value={data?.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
        >
          Submit
        </button>
      </form>
      <Toaster richColors />
    </div>
  );
};

export default ContactForm;
