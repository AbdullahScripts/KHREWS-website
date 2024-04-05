import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="banner">
        <PrismicNextImage className="w-full" field={slice.primary.banner} />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Our Mission</h1>
        <ul className="list-disc pl-6">
          {/* Add other mission statements here */}

          {/* Motto of KHREWS */}
          <li className="mt-8 text-lg md:text-2xl text-green-600 italic text-center">
            WORKING FOR THE GLORY OF <span className="text-red-600">ISLAM</span>{" "}
            AND SERVING THE NATION <br />
            <span className="text-sm text-green-600">(Motto of KHREWS)</span>
          </li>
          <li className="mt-8 text-lg md:text-2xl text-green-600 italic text-center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white  focus:ring-4 focus:outline-none focus:ring-green-200 ">
              <PrismicNextLink
                field={slice.primary.moto}
                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0"
              >
                Download
              </PrismicNextLink>
            </button>

            <span className="text-sm text-green-600">
              (Click to Download)
            </span>
          </li>
        </ul>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Our Mission</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {/* Mission Points */}
          {[
            "To ignite a sense of holy righteousness among the youth, fostering a deep connection with the principles of Islam and a commitment to serving the nation of Pakistan.",
            "To provide educational opportunities that empower young individuals, equipping them with the skills and knowledge necessary to excel in various fields.",
            "To offer welfare services aimed at addressing the socio-economic challenges faced by communities across Pakistan, thereby contributing to their well-being and development.",
            "To cultivate a generation of Muslim leaders who are not only proficient in their respective fields but also guided by strong ideological principles.",
            "To promote creativity and innovation among youth, encouraging them to think critically and contribute positively to the advancement of society.",
            "Advocating for Khatm-e-Nabuwwat: We are dedicated to working towards upholding the finality of Prophethood (Khatm-e-Nabuwwat), safeguarding this fundamental belief of Islam and countering any attempts to undermine it.",
            "Supporting the Honor of the Prophet: Our mission includes defending the honor and dignity of the Prophet Muhammad (peace be upon him) and preserving the sanctity of his message, ensuring that no blasphemous or disrespectful acts occur against him or his teachings.",
            "Seeking Justice for Afia Siddique: We are committed to advocating for the release of Afia Siddique from her incarceration in an American jail, believing in the importance of justice and fair treatment for all individuals, regardless of their nationality or background.",
            "Upholding Moral Integrity: Khrews aims to promote an environment of moral integrity within universities, discouraging any form of shameless or unethical activities that may compromise the values of Islam and the dignity of individuals.",
            "Fostering Islamic Values: Khrews advocates for the preservation of Islamic principles and values within university campuses, striving to create an atmosphere conducive to spiritual growth and adherence to the teachings of Islam, while also discouraging any activities that contradict Islamic teachings.",
            "We strive to combat ideologies such as communism and secularism, which pose challenges to Islamic principles and values, in our pursuit of upholding the sanctity and teachings of Islam.",
            "Liberation of Al-Quds: We strive towards the noble cause of liberating Al-Quds from occupation, standing in solidarity with the Palestinian people.",
          ].map((point, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-200"
            >
              <p className="text-gray-800">{point}</p>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold text-blue-600 mt-8">KHREWS</h2>
        <p className="italic">
          KINDLING THE HOLY RIGHTEOUSNESS WITH EDUCATIONAL AND WELFARE SERVICE
        </p>
        <p className="italic">INSPIRED BY ALLAMA KHADIM HUSSAIN RIZVI RA</p>
      </div>
    </section>
  );
};

export default Team;
