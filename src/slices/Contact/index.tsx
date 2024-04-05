import { PrismicNextLink } from "@prismicio/next";
import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import Link from "next/link";

const Registration = () => {
  return (
    <section className=" py-16 max-w-full md:w-[50%]">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Register Now
          </h2>
          <p className="text-lg text-gray-800 mb-4 text-center">
            Register for our event by filling out the form below:
          </p>
          <div className="flex justify-center">
            <Link
              className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
              href="https://forms.gle/WCA25WDF2SQNkAyu9"
              target="_blank"
            >
              Register
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className=" py-16 max-w-full md:w-[50%]">
      <div className="container mx-auto px-4 ">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Contact Us
          </h2>
          <p className="text-lg text-gray-800 mb-4 text-center">
            Reach out to us for any queries or assistance:
          </p>
          <div className="flex flex-col md:flex-row justify-center md:space-x-4">
            <Link
              href="mailto:dev.mirxa009@gmail.com "
              target="_blank"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-300 hover:shadow-md mb-4 md:mb-0 md:w-48 text-center"
            >
              Send Email
            </Link>
            <Link
              className="bg-green-500 text-sm text-white px-6 py-3 rounded-lg text-lg hover:bg-green-400 transition duration-300 hover:shadow-md md:w-48 text-center"
              href="https://api.whatsapp.com/send?phone=03340915037" target="_blank"
            >
              WhatsApp Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="flex justify-center min-h-[95vh] flex-col md:flex-row items-center">
      <Registration />
      <Contact />
    </div>
  );
};

export default HomePage;
