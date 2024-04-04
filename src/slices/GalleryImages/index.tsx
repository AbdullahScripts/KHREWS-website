import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `GalleryImages`.
 */
export type GalleryImagesProps =
  SliceComponentProps<Content.GalleryImagesSlice>;

/**
 * Component for "GalleryImages" Slices.
 */
const GalleryImages = ({ slice }: GalleryImagesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1 className="text-center font-bold text-blue-700 text-3xl p-5">
        {slice.primary.heading}
      </h1>

      <div className="grid w-[90%] m-auto grid-cols-2 md:grid-cols-3 mb-5 gap-4">
        {slice.items.map((item, index) => {
          return (
            <div key={index}>
              <h1 className="text-red-800 p-2 font-mono font-bold text-xs md:text-2xl">
                {item.image_title}
              </h1>
              <p className="text-green-700 p-2 font-serif text-sm md:text-xl">
                {item.city}
              </p>
              <PrismicNextImage
                className="h-auto max-w-full md:max-w-[90%] rounded-xl"
                field={item.image}
              />
              {/* <Image  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GalleryImages;
