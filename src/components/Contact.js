import React from "react";

const Contact = () => {
  return (
    <div className="h-full mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600">
        If you have any questions or inquiries, please feel free to get in touch
        with us. We're here to assist you.
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p className="text-gray-600">
          <strong>Address:</strong> 123 Main Street, Cityville, State
          <br />
          <strong>Phone:</strong> (555) 123-4567
          <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:office@estateexplorer.com" className="text-amber-500">
            office@estateexplorer.com
          </a>
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Contact Form</h2>
        <form>
          <div className="mt-4">
            <label htmlFor="name" className="block text-gray-600">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-amber-500"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-amber-500"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-gray-600">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-amber-500"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-amber-500 text-white font-semibold py-2 px-4 rounded hover:bg-amber-600 focus:outline-none focus:ring focus:bg-amber-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
