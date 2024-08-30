import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import dinner from "../assets/Images/dinner.png";
import dinner3 from "../assets/Images/dinner3.png";
import threeSelfie from "../assets/Images/threeselfie.png";
import GoogleCalendar from "./GoogleCalendar";
import { Calendar } from "../icons/Calendar";
import { Right } from "../icons/Right";

const BookForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    arrivalDate: Yup.date().required("Date of arrival is required"),
    participants: Yup.number()
      .min(1, "At least one participant is required")
      .required("Number of participants is required"),
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const handleClick = () => {
    setShowCalendar(!showCalendar);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#212121] text-white min-h-screen flex items-center justify-center p-6 rounded-xl w-full">
      <div className="bg-transparent p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-semibold mb-8 text-center">Book a tour</h2>

        <div className="flex justify-between mb-6">
          <img src={dinner} alt="Tour 1" className="rounded-lg w-1/3" />
          <img src={dinner3} alt="Tour 2" className="rounded-lg w-1/3 mx-2" />
          <img src={threeSelfie} alt="Tour 3" className="rounded-lg w-1/3" />
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            arrivalDate: "",
            participants: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("Form data:", values);
              setSubmitting(false);
              // You can also add code here to send the form data to a server, etc.
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-white rounded-md"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email address
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-white rounded-md"
                  placeholder="Enter your email address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="phone"
                >
                  Phone number
                </label>
                <div className="flex gap-4">
                  <select
                    className="bg-transparent text-white border-[#4E4E4E] rounded-md border-[2px] pr-2 focus:outline-none"
                    style={{ width: "20%" }}
                  >
                    <option value="+234">🇳🇬 +234</option>
                    {/* Add more country codes as needed */}
                  </select>
                  <Field
                    type="text"
                    name="phone"
                    className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-white rounded-md"
                    placeholder="Enter your phone number"
                  />
                </div>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className=" flex w-full items-center justify-center gap-4">
                <div className="mb-4 flex flex-col w-[70%]">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="arrivalDate"
                  >
                    Date of arrival
                  </label>

                  <div
                    className="flex items-center relative w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-white rounded-md cursor-pointer"
                    onClick={handleClick}
                  >
                    <span>Select Date</span>
                    <svg
                      className={`w-4 h-4 ml-auto transform transition-transform ${
                        showCalendar ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="#4e4e4e"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>

                    {showCalendar && (
                      <div className="absolute top-full left-[10%] h-64 w-full max-w-4xl bg-white border border-black rounded-lg shadow-lg z-10">
                        <GoogleCalendar />
                      </div>
                    )}
                  </div>

                  <ErrorMessage
                    name="arrivalDate"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4 flex w-[30%] flex-col">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="participants"
                  >
                    Number of participants
                  </label>
                  <Field
                    type="number"
                    name="participants"
                    className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-white rounded-md"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                    }}
                    placeholder="Value"
                  />
                  <ErrorMessage
                    name="participants"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-[25%] bg-[#cc5500] flex items-center font-Montserrat justify-center text-white p-2 rounded-md mt-4"
                disabled={isSubmitting}
              >
                Submit
                <span className=" text-white ml-2">
                  <Right />
                </span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookForm;
