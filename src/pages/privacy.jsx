import React from "react";
import Footer from "../sections/Footer";
import Logo from "../assets/Logo.png";

const Privacy = () => {
  return (
    <div>
      <div className="flex justify-between p-6 items-center">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <div>
          <a
            href="/"
            className="bg-primary text-white font-bold py-2 px-3 rounded-2xl hover:bg-hoverr"
          >
            Download App!
          </a>
        </div>
      </div>

      <main className="flex-grow bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Privacy Policy for HospiYou
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            <strong>Effective Date:</strong> 11th August, 2024
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to HospiYou, an AI-powered telemedical application committed
            to protecting your privacy. This Privacy Policy outlines the types
            of information we collect, how we use and protect that information,
            and your rights concerning your personal data. By using HospiYou,
            you agree to the practices described in this policy.
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Information We Collect
            </h2>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              1.1 Personal Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              HospiYou collects personal information that you provide to us
              directly, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Contact Information:</strong> Full name, email address,
                phone number, and mailing address.
              </li>
              <li>
                <strong>Health Information:</strong> Medical history, current
                symptoms, prescriptions, and other health-related data shared
                during consultations.
              </li>
              <li>
                <strong>Demographic Information:</strong> Age, gender, and other
                demographic details.
              </li>
              <li>
                <strong>Payment Information:</strong> Credit card details,
                billing address, and other payment-related information for
                services rendered.
              </li>
            </ul>
          </section>

          {/* More sections */}
          <section className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              1.2 Non-Personal Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We also collect non-personal information automatically as you use
              our app:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Usage Data:</strong> Information on how you interact
                with the app, including but not limited to log data, device
                information, IP address, and browsing history.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies, web beacons, and similar technologies to enhance your
                experience and gather data on usage patterns.
              </li>
            </ul>
          </section>

          {/* Additional sections */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your personal information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Facilitate telemedicine consultations, including AI-driven
                medical assessments.
              </li>
              <li>
                Personalize your experience by providing tailored health advice
                and recommendations.
              </li>
              <li>
                Process payments for medical consultations and other services.
              </li>
              <li>
                Communicate with you about your account, medical consultations,
                and updates to our services.
              </li>
            </ul>
          </section>

          {/* Contact Us Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
            </p>
            <ul className="list-none space-y-2 text-gray-700">
              <li>Email: hospiyou@gmail.com</li>
              <li>
                Address: 651 N Broad St Suite 201, City of Middletown, Zip Code
                19709, County of New Castle, USA
              </li>
              <li>Phone: +2347037432078, +2348165090923</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
