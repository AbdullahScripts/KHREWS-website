"use client";
import { Content } from "@prismicio/client";
import lets from "../../assests/lets.png";
import lits from "../../assests/lits.png";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
// import Carousel from "@/app/(components)/Carasoul";
import { useRouter } from "next/navigation";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import QASection from "@/app/(components)/QaSession";
import Image from "next/image";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about"); // Replace '/your-page' with the actual page path
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <header>
        <div className="bck mb-4 ">
          {/* <PrismicNextImage className="max-w-full" field={slice.primary.hero_image} /> */}
          <div className="tt">
            <h1 className=" font-bold text-xl md:text-4xl ">
              Wellcome To Official Website OF KHREWS
            </h1>
            <p className="pt-4 font-outline-2 pb-4 text-sm  md:text-2xl">
              Empowering the Ummah with dedicated leadership for the ascension
              of Islam and service to Pakistan and the Muslim community.
            </p>

            <button
              onClick={handleClick}
              className="relative inline-flex herobtn  items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-green-200 focus:ring-green-800"
            >
              <span className="relative px-4 md:px-5 py-2.5 transition-all ease-in duration-75 bg-white text-[#17a8cc] hover:text-white text-sm md:text-xl rounded-full group-hover:bg-opacity-0">
                Get in Touch
              </span>
            </button>
          </div>
        </div>
      </header>
      {/* heading branches  */}
      <div className="branches text-center pt-5">
        <span className="bheading p-2 font-bold ">Our Physical Branches</span>
        <h1 className="text-3xl font-bold m-3">
          here are our <span className="text-[#8892da]">branches</span> that are
          serving the <span className="text-[#8892da]">nation</span>
        </h1>
      </div>

      {/* braches cards  */}

      <div className="branchCards m-4 p-5 flex flex-wrap justify-around">
        {slice.items.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-[27%] m-5 bg-white border border-gray-200 rounded-lg shadow"
            >
              <div className="flex justify-center">
                <PrismicNextImage className="w-[70%]" field={item.logo} />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {item.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  {item.description}
                </p>
                <p className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  <PrismicNextLink field={item.goto}>
                    Explore Us
                  </PrismicNextLink>
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </p>

                <p className="inline-flex ml-5 items-center justify-center px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  <PrismicNextLink field={item.whatsapp}>
                    Join US
                  </PrismicNextLink>
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* heading branches  */}
      <div className="branches text-center pt-5">
        <span className="bheading p-2 font-bold ">Our Online Services</span>
        <h1 className="text-3xl font-bold m-3">
          here are our Online <span className="text-[#8892da]">Services</span>{" "}
          that are serving the <span className="text-[#8892da]">nation</span>
        </h1>
      </div>

      {/* braches cards  */}

      <div className="branchCards m-4 p-5 flex flex-wrap justify-center">
        <div className="w-full md:w-[27%] m-5 bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex justify-center">
            <Image src={lets} className="w-[70%]" alt="LETS" />
            {/* <PrismicNextImage className="w-[70%]" field={slice.primary.lets} /> */}
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              LETS
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              LABBAIK ENTRY TEST SERIES (FOR THOSE WHO INTEND TO TAKE ENTRY
              TEST)
            </p>
            <p className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              <Link href="https://youtube.com/@khr_mds?si=Fd1av0JFtOLyCOLL">
                Explore Us
              </Link>
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </p>

            <p className="inline-flex ml-5 items-center justify-center px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300">
              <Link href="https://chat.whatsapp.com/HminsS7sOI3LRkQ2CSMwx3">
                Join US
              </Link>
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </p>
          </div>
        </div>
        <div className="w-full md:w-[27%] m-5 bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex justify-center">
            {/* <PrismicNextImage className="w-[70%]" field={slice.primary.lits} /> */}
            <Image src={lits} className="w-[70%]" alt="LITS" />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              LITS
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              LABBAIK IT SERVICE (FOR THOSE RELATED TO Information Technology
              DOMAIN)
            </p>
            <p className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              <Link href="https://www.youtube.com/@labbaikitservice">
                Explore Us
              </Link>
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </p>

            <p className="inline-flex ml-5 items-center justify-center px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
              <Link href="https://chat.whatsapp.com/KETszoJr7AA7opySAQHeku">
                Join US
              </Link>
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>

      {/* heading branches  */}
      <div className="branches text-center pt-5">
        <Link
          href="https://labbaikitservices.com/" target="_blank"
          className="text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          LITS Website
        </Link>
        <h1 className=" pt-4 text-3xl font-bold m-3">
          Want To Explore More About{" "}
          <span className="text-[#8892da]">LITS</span>{" "}
        </h1>
      </div>

      {/* QA  */}

      {/* <div className="QA flex items-center justify-around">
        <div className="QAimage">
          <PrismicNextImage
            className="w-[100%] overflow-hidden"
            field={slice.primary.logo}
          />
        </div>
        <div className="QAdec w-full md:w-[50%]">
          <QASection />
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="md:w-[30%] max-w-xs md:max-w-none">
          <PrismicNextImage
            className="w-full h-auto"
            //@ts-ignore
            field={slice.primary.logo}
          />
        </div>
        <div className="md:w-[60%] max-w-md md:max-w-none mt-8 md:mt-0">
          <QASection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
