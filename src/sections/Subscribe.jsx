import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Import axios for API requests

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      // Send POST request to the backend
      const response = await axios.post(
        "https://hospiyou-server.onrender.com/api/subscribe",
        {
          email,
        }
      );
      console.log(response);
      // Handle successful response
      toast.success(response.data.message);
      setEmail(""); // Clear the email input
    } catch (error) {
      // Handle errors
      if (error.response) {
        // Backend responded with an error
        toast.error(error.response.data.message);
      } else {
        // Network or other errors
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div id="newsletter">
      {/* Toastify container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <section className="know bg-primary bg-wave-pattern bg-no-repeat bg-cover py-4 px-3 mx-6 rounded-xl mt-10 md:px-5 md:max-w-md md:mx-auto lg:max-w-xl lg:p-20 lgs:max-w-4xl">
        <div className="w-full flex flex-col items-center justify-center">
          <h3 className="text-white text-center font-medium text-xl my-3 md:text-2xl lg:w-2/3 lg:text-4xl">
            Be the First to Know
          </h3>
          <p className="text-white text-center lgs:w-2/3">
            Receive the latest news and updates by signing up for our
            newsletter.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-white rounded-full shadow-md overflow-hidden m-3"
        >
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email address"
            className="flex-1 pl-3 py-3 text-green-800 placeholder-green-600 focus:outline-none lg:pl-5"
            required
          />
          <button
            type="submit"
            className="bg-green-600 w-1/5 text-white font-semibold px-1 py-3 hover:bg-green-700 transition md:px-4"
          >
            Enter
          </button>
        </form>
      </section>
    </div>
  );
};

export default Subscribe;
