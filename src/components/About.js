import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="lg:w-[1200px] h-full m-10">
      <h1 className="text-4xl font-bold mt-6">
        About <br className="lg:hidden" />{" "}
        <strong className="text-amber-500">Estate Explorer</strong>
      </h1>
      <p className="mt-4 text-gray-600">
        Welcome to <strong className="text-amber-500">Estate Explorer</strong>,
        your trusted partner in the world of real estate. We are more than just
        a real estate agency; we are your pathway to finding the perfect place
        to call home or to invest in the property of your dreams.
      </p>

      <p className="mt-4 text-gray-600">
        At <strong className="text-amber-500">Estate Explorer</strong>, we
        understand that buying, selling, or investing in real estate is a
        significant decision, one that can shape your future and financial
        well-being. With years of experience and a dedicated team of real estate
        professionals, we are here to guide you through every step of this
        exciting journey.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Our Commitment</h2>
      <p className="mt-4 text-gray-600">
        We are committed to providing you with the highest level of service,
        professionalism, and expertise. Our team of experienced real estate
        agents possesses in-depth knowledge of the local market, ensuring that
        you have access to the most current and comprehensive information when
        making real estate decisions.
      </p>

      <h3 className="text-xl font-semibold mt-6">What Sets Us Apart</h3>
      <ul className="mt-4 list-disc list-inside text-gray-600">
        <li className="mt-2">
          <strong className="text-amber-500">Local Expertise:</strong> We know
          the neighborhoods, schools, and amenities like the back of our hand.
          Our local knowledge is your advantage.
        </li>
        <li className="mt-2">
          <strong className="text-amber-500">Personalized Service:</strong> We
          believe that every client is unique. That's why we take the time to
          understand your specific needs and tailor our services to meet your
          goals.
        </li>
        <li className="mt-2">
          <strong className="text-amber-500">Transparency:</strong> Trust is the
          cornerstone of our business. We maintain open communication, ensuring
          you are well-informed at every stage of your real estate journey.
        </li>
        <li className="mt-2">
          <strong className="text-amber-500">Innovative Technology:</strong> We
          leverage cutting-edge technology and marketing strategies to provide a
          seamless and efficient experience.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
      <p className="mt-4 text-gray-600">
        Our mission is simple: to help you find your ideal property, whether
        it's your forever home, a lucrative investment, or a place to build
        memories. We're here to make your real estate goals a reality, backed by
        our unwavering commitment to integrity, excellence, and your
        satisfaction.
      </p>

      <Link to="/contact" className="mt-6 text-amber-500 hover:underline">
        Get in Touch
      </Link>
      <p className="mt-4 text-gray-600">
        Ready to start your real estate journey? Contact{" "}
        <strong className="text-amber-500">Estate Explorer</strong> today and
        let us assist you in making your real estate dreams come true. Whether
        you're a first-time homebuyer, a seasoned investor, or looking to sell
        your property, we're here for you every step of the way.
      </p>

      <p className="mt-4 text-gray-600">
        Thank you for considering{" "}
        <strong className="text-amber-500">Estate Explorer</strong> as your
        trusted real estate partner. We look forward to serving you and being a
        part of your exciting real estate adventure.
      </p>
    </div>
  );
};

export default About;
