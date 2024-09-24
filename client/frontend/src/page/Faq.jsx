import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Faq = () => {
  const [active, setActive] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What types of events can your venue accommodate?",
      answer:
        "Our event center is perfect for a wide range of events, including weddings, corporate meetings, birthday parties, anniversaries, and more. Whether you’re hosting an intimate gathering or a grand celebration, we have packages and spaces to fit your needs.",
    },
    {
      id: 2,
      question: "How do I book an event at your venue?",
      answer:
        "Booking with us is easy! Simply contact us through our website’s booking form, email, or phone. Our team will guide you through the process, help you choose the right package, and assist with any special requests to ensure your event is a success.",
    },
    {
      id: 3,
      question: "Are there any restrictions on decorations or vendors?",
      answer:
        "We want your event to be uniquely yours! You’re welcome to bring your own decorations, but we do have some guidelines to ensure safety and maintain the venue’s appearance. For vendors, we have a list of preferred partners, but you can also bring your own with prior approval.",
    },
    {
      id: 4,
      question: "What is included in each event package?",
      answer:
        "Each package offers a variety of amenities tailored to different event sizes and needs. From tables and chairs to sound systems and air conditioning, our packages are designed to provide everything necessary for a seamless event. For detailed information, check out our Packages page or contact us directly.",
    },
    {
      id: 5,
      question: "What is your cancellation policy?",
      answer:
        "We understand that plans can change. Our cancellation policy varies depending on the package and timing of the cancellation. Please contact our team for detailed information and assistance with any specific concerns.",
    },
  ];

  const handleToggle = (id) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-auto">
        <div className="mx-auto py-20 w-2/3 h-full flex flex-col justify-start items-start gap-20">
          <h2 className="w-full text-6xl text-center font-bold">
            Frequently Asked Questions
          </h2>
          <div className="w-full h-full flex flex-col gap-5 justify-start items-start">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className={`cursor-pointer w-full rounded-2xl border-2 ${
                  active === faq.id
                    ? "bg-gradient-to-r from-goldLight to-goldDark border-goldLight"
                    : "bg-white border-white"
                }`}
              >
                <div
                  className={`w-full flex justify-between items-center p-3 ${
                    active === faq.id ? "text-white" : "text-goldLight"
                  }`}
                  onClick={() => handleToggle(faq.id)}
                >
                  <span className="text-[18px] font-bold">{faq.question}</span>
                  <span className="ml-2">
                    {active === faq.id ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {active === faq.id && (
                  <div className="w-full p-3 overflow-hidden transition-all duration-300">
                    <p className="text-[16px]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
