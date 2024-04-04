import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Courses`.
 */
export type CoursesProps = SliceComponentProps<Content.CoursesSlice>;

/**
 * Component for "Courses" Slices.
 */
const Courses = ({ slice }: CoursesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="courses">
        <h1 className="text-center font-bold text-4xl md:text-5xl p-5 text-blue-600">
          {slice.primary.heading}
        </h1>
      </div>

      {/* Courses cards  */}

      <div className="branchCards m-4 p-5 flex items-center  justify-around">
        <div
          className={`grid gap-6 ${slice.items.length === 1 ? "grid-cols-1 justify-center" : "md:grid-cols-3 xl:grid-cols-4"} mx-auto`}
        >
          {slice.items.map((item, index) => (
            <div
              key={index}
              className="w-full m-auto m-5 bg-white border border-gray-200 rounded-lg shadow"
            >
              <div className="flex justify-center p-1">
                <PrismicNextImage
                  className="w-[90%] md:w-[30%]"
                  field={item.image}
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-violet-950">
                  {item.name}
                </h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-600">
                  price: {item.price}
                </h5>
                <p className="mb-3 font-normal text-gray-700">{item.des}</p>
                <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  <PrismicNextLink field={item.form}>
                    Register Now
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
