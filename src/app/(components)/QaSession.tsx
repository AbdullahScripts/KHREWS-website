// "use client";
// import React, { useState } from "react";

// const QASection = () => {
//   const [activeQuestion, setActiveQuestion] = useState(null);

//   const questions = [
//     {
//       id: 1,
//       question: "Is KHREWS a political wing of any party ? ",
//       answer:
//         "This perception is totally wrong against KHREWS. KHREWS is a national level students organization which is working for Ummah's Rejuvenation for Ascension of Islam and working for the Glory of Islam and serving Pakistan and nation. Organization is named on the name of and by inspiration from the brave warrior of Khatme Nabuwat & Namoos e Risalat  ﷺ Allama Khadim Hussain Rizvi RA. Our Target is clearly mentioned , Yes we will be standing against every Evil ( Batil ) For Haq And Khilafat.",
//     },
//     {
//       id: 2,
//       question: "Are You the Funded organization? ",
//       answer:
//         "No ! We are totally dependent on the beliefs That Allah Gives us when we move on the way of His Islam. We spent money from our Pockets and by internal fundings of our responsible personalities.",
//     },
//     {
//       id: 3,
//       question: "What are you motives ?",
//       answer:
//         "Our motives in full details are mentioned separately in About page you can see there",
//     },
//   ];

//   const toggleQuestion = (id: number) => {
//     setActiveQuestion(activeQuestion === id ? null : id);
//   };

//   return (
//     <div className="w-full  mx-auto">
//       {questions.map((item) => (
//         <div key={item.id} className="mb-4">
//           <div
//             onClick={() => toggleQuestion(item.id)}
//             className={`cursor-pointer flex justify-between items-center bg-gray-100 p-4 rounded-md transition-colors duration-300 ease-in-out ${
//               activeQuestion === item.id ? "bg-gray-200" : ""
//             }`}
//           >
//             <h3 className="text-lg font-semibold">{item.question}</h3>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className={`w-6 h-6 transform ${
//                 activeQuestion === item.id ? "rotate-180" : ""
//               } transition-transform duration-300 ease-in-out`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </div>
//           {activeQuestion === item.id && (
//             <div className="bg-gray-200 p-4 rounded-b-md transition-opacity duration-300 ease-in-out">
//               <p>{item.answer}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QASection;


import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const QASection: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "Is KHREWS a political wing of any party ? ",
      answer:
        "This perception is totally wrong against KHREWS. KHREWS is a national level students organization which is working for Ummah's Rejuvenation for Ascension of Islam and working for the Glory of Islam and serving Pakistan and nation. Organization is named on the name of and by inspiration from the brave warrior of Khatme Nabuwat & Namoos e Risalat  ﷺ Allama Khadim Hussain Rizvi RA. Our Target is clearly mentioned , Yes we will be standing against every Evil ( Batil ) For Haq And Khilafat.",
    },
    {
      id: 2,
      question: "Are You the Funded organization? ",
      answer:
        "No ! We are totally dependent on the beliefs That Allah Gives us when we move on the way of His Islam. We spent money from our Pockets and by internal fundings of our responsible personalities.",
    },
    {
      id: 3,
      question: "What are you motives ?",
      answer:
        "Our Mission is Ummah's Rejuvenation(Revivitation)With Galvanization of Islamic Vanguards Endeavors for Ascension of Islam. KHREWS wanna make Enthusiastic,Ideological, Educational, Skillful &  Determinant Muslim Youth, to work for Glory of Islam - Pakistan & Serving the Nation . This Odyssey of Resurgence(Revival) Will Require a complete Dedication for Islam . We can only win the Battle Against the Evil Forces that are  against Islam, if we instead of Scattering, Stuff our all Strategies together for Islam. We wanna Prepare Muslim Ummah To be Ayubi in case of Al Aqsa , Muhammad Bin Qasim in case of Afia, Umar Bin Khatab (رضی اللہ عنہ)in Case of Running A State and Hazrat Ali رضی) اللہ عنہ) in Case of Literature And Education. KHREWS is named Both  Allama Khadim Hussain Rizvi Educational & Welfare Service ' & Sometimes' Kindling the Holy Righteousness With Educational & Welfare Services Based After inspirations from Allama Khadim Hussain Rizvi نور اللہ مرقدہ ",
    },
  ];

  const toggleQuestion = (id: number) => {
    setActiveQuestion((prevActiveQuestion) =>
      prevActiveQuestion === id ? null : id
    );
  };

  return (
    <div className="w-full mx-auto">
      {questions.map((item) => (
        <div key={item.id} className="mb-4">
          <div
            onClick={() => toggleQuestion(item.id)}
            className={`cursor-pointer flex justify-between items-center bg-gray-100 p-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeQuestion === item.id ? "bg-gray-200" : ""
            }`}
          >
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transform ${
                activeQuestion === item.id ? "rotate-180" : ""
              } transition-transform duration-300 ease-in-out`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {activeQuestion === item.id && (
            <div className="bg-gray-200 p-4 rounded-b-md transition-opacity duration-300 ease-in-out">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QASection;
