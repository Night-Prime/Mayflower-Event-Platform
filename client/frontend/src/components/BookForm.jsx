import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import { Right } from "../icons/Right";
import { clientMakeRequest } from "../helper/makeRequest";
import Swal from "sweetalert2";

const BookForm = ({ item }) => {
  const [nextForm, setNextForm] = useState(false);
  const nextPage = () => {
    setNextForm(!nextForm);
  };

  const validationSchema = Yup.object({
    clientName: Yup.string().required("Name is required"),
    clientEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    clientPhone: Yup.string().required("Phone number is required"),
    eventTitle: Yup.string().required("Title of the Event is required"),
    eventDate: Yup.date().required("Date of event is required"),
    packageId: Yup.mixed().required("Select a package"),
  });

  return (
    <div className="h-auto w-full rounded-2xl shadow-md shadow-gray-300">
      <div className=" bg-transparent p-4 sm:p-6 md:p-8 font-Montserrat w-full h-full text-mayblack">
        <h2 className="text-2xl sm:text-3xl font-semibold font-Cinzel mb-6 text-center border-b-2">
          Book a tour
        </h2>

        <Formik
          initialValues={{
            eventTitle: "",
            eventDescription: "",
            packageId: "",
            eventTime: "",
            clientName: "",
            clientEmail: "",
            clientPhone: "",
            eventDate: "",
            hotelbooking: "",
            specialRequest: "",
            extraInfo: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false);
            try {
              console.log("Form: ", values);
              // const result = await clientMakeRequest.post("/booking", values);
              // if (result.data.status === "success") {
              //   Swal.fire({
              //     text: `${result.data.message}`,
              //     icon: "success",
              //     iconColor: "#fff",
              //     toast: true,
              //     position: "top-right",
              //     showConfirmButton: false,
              //     timer: 2000,
              //     background: "#2D3D26",
              //     color: "#fff",
              //   });
              // }
            } catch (error) {
              Swal.fire({
                text: `Unsuccessful, Try Again!`,
                icon: "error",
                iconColor: "#fff",
                toast: true,
                position: "top-right",
                showConfirmButton: false,
                timer: 2000,
                background: "#ff8323",
                color: "red",
              });
            }
          }}
        >
          {({ isValid, isSubmitting }) => (
            <Form className="font-Cinzel">
              {nextForm ? (
                <div className="flex flex-col w-full h-full">
                  <div className="mb-4">
                    <label
                      className="block text-xs sm:text-sm font-medium mb-1"
                      htmlFor="clientName"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      name="clientName"
                      className="w-full text-sm md:text-md p-2 bg-transparent border-gray-300 border-[2px] focus:outline-none text-white rounded-lg"
                      placeholder="Enter your name"
                    />
                    <ErrorMessage
                      name="clientName"
                      component="div"
                      className="text-red-500 text-xs sm:text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-xs sm:text-sm font-medium mb-1"
                      htmlFor="clientEmail"
                    >
                      Email address
                    </label>
                    <Field
                      type="email"
                      name="clientEmail"
                      className="w-full text-sm md:text-md p-2 bg-transparent border-gray-300 border-[2px] focus:outline-none text-white rounded-lg"
                      placeholder="Enter your Email address"
                    />
                    <ErrorMessage
                      name="clientEmail"
                      component="div"
                      className="text-red-500 text-xs sm:text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-xs sm:text-sm font-medium mb-1"
                      htmlFor="clientPhone"
                    >
                      Phone number
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <select
                        className="bg-transparent text-sm md:text-md text-black border-gray-300 rounded-lg border-[2px] pr-2 focus:outline-none"
                        style={{ width: "100%", maxWidth: "100px" }}
                      >
                        <option value="+234">🇳🇬 +234</option>
                      </select>
                      <Field
                        type="text"
                        name="clientPhone"
                        className="w-full text-sm md:text-md p-2 bg-transparent border-gray-300 border-[2px] focus:outline-none text-white rounded-lg"
                        placeholder="Enter your Phone number"
                      />
                    </div>
                    <ErrorMessage
                      name="clientPhone"
                      component="div"
                      className="text-red-500 text-xs sm:text-sm mt-1"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row w-full gap-4">
                    <div className="mb-4 flex-1">
                      <label
                        className="block text-xs sm:text-sm font-medium mb-1"
                        htmlFor="eventDate"
                      >
                        Date of arrival
                      </label>

                      <Field
                        type="date"
                        name="eventDate"
                        className="w-full text-sm md:text-md p-2 bg-transparent border-gray-300 border-[2px] focus:outline-none text-black rounded-lg"
                        placeholder="Select Date"
                      />
                      <ErrorMessage
                        name="eventDate"
                        component="div"
                        className="text-red-500 text-xs sm:text-sm mt-1"
                      />
                    </div>

                    <div className="mb-4 flex-1">
                      <label
                        className="block text-sm md:text-md font-medium mb-1"
                        htmlFor="eventTime"
                      >
                        Time
                      </label>
                      <Field
                        type="time"
                        name="eventTime"
                        className="w-full text-sm md:text-md p-2 bg-transparent border-gray-300 border-[2px] focus:outline-none text-black rounded-lg"
                        style={{
                          WebkitAppearance: "none",
                          MozAppearance: "textfield",
                        }}
                        placeholder="Time of Event"
                      />
                      <ErrorMessage
                        name="eventTime"
                        component="div"
                        className="text-red-500 text-xs sm:text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-xs sm:text-sm font-medium mb-1"
                      htmlFor="eventTitle"
                    >
                      Event Title
                    </label>
                    <Field
                      type="text"
                      name="eventTitle"
                      className="w-full text-sm md:text-md p-2 bg-transparent border-gray-300 border-[2px] focus:outline-none text-black rounded-lg"
                      placeholder="What's the name of your Event"
                    />
                    <ErrorMessage
                      name="eventTitle"
                      component="div"
                      className="text-red-500 text-xs sm:text-sm mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-xs sm:text-sm font-medium mb-1"
                      htmlFor="eventDescription"
                    >
                      Event Description
                    </label>
                    <Field
                      type="text"
                      name="eventDescription"
                      className="w-full text-sm md:text-md p-2 bg-transparent border-gray-300 border-[2px] focus:outline-none text-mayblack rounded-lg"
                      placeholder="Describe your Event"
                    />
                    <ErrorMessage
                      name="eventDescription"
                      component="div"
                      className="text-red-500 text-xs sm:text-sm mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <Field
                      component="select"
                      name="packageId"
                      className="w-full text-sm md:text-md p-2 bg-transparent border-gray-300 border-[2px] focus:outline-none text-mayblack rounded-lg"
                    >
                      <option value="">Select a package</option>
                      {item && item.length > 0 ? (
                        item.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name} - ({item.capacity})
                          </option>
                        ))
                      ) : (
                        <option value="">No packages available</option>
                      )}
                    </Field>
                    <ErrorMessage
                      name="packageId"
                      component="div"
                      className="text-red-500 text-xs sm:text-sm mt-1"
                    />
                  </div>

                  <div className="flex-1">
                    <button
                      type="button"
                      disabled={!isValid}
                      onClick={() => nextPage()}
                      className={`w-full sm:w-[12.5%] ${
                        isValid
                          ? "bg-gardens text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      } text-xs sm:text-sm flex items-center font-Montserrat justify-center p-2 rounded-lg mt-4`}
                    >
                      Next
                      <span className="text-white ml-2">
                        <Right />
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <div className="mb-4 flex-1">
                    <label
                      className="block text-xs sm:text-sm font-medium mb-1"
                      htmlFor="hotelbooking"
                    >
                      WOULD YOU LIKE TO BOOK OUR HOTEL ROOMS FOR YOURSELF AND
                      YOUR GUESTS
                    </label>
                    <div className="flex flex-col gap-4">
                      <label className="flex items-center text-sm">
                        <Field
                          type="radio"
                          name="hotelbooking"
                          value="Yes"
                          className="mr-2"
                        />
                        Yes
                      </label>
                      <label className="flex items-center text-sm">
                        <Field
                          type="radio"
                          name="hotelbooking"
                          value="No"
                          className="mr-2"
                        />
                        No
                      </label>
                      <label className="flex items-center text-sm">
                        <Field
                          type="radio"
                          name="hotelbooking"
                          value="Maybe"
                          className="mr-2"
                        />
                        Maybe
                      </label>
                    </div>
                  </div>

                  <div className="mb-4 flex-1">
                    <label
                      className="block text-xs sm:text-sm font-medium mb-1"
                      htmlFor="specialRequest"
                    >
                      KINDLY STATE ANY REQUESTS?
                    </label>
                    <div className="flex flex-col gap-4">
                      <label className="flex items-center text-sm">
                        <Field
                          type="radio"
                          name="specialRequest"
                          value="Event Planning"
                          className="mr-2"
                        />
                        Event Planning
                      </label>
                      <label className="flex items-center text-sm">
                        <Field
                          type="radio"
                          name="specialRequest"
                          value="Vendor Sourcing"
                          className="mr-2"
                        />
                        Vendor Sourcing
                      </label>
                      <label className="flex items-center text-sm">
                        <Field
                          type="radio"
                          name="specialRequest"
                          value="Security and Bouncers"
                          className="mr-2"
                        />
                        Security and Bouncers
                      </label>

                      <label className="flex items-center text-sm">
                        <Field
                          type="radio"
                          name="specialRequest"
                          value="None"
                          className="mr-2"
                        />
                        None
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-xs sm:text-sm font-medium mb-1"
                      htmlFor="extraInfo"
                    >
                      ANY OTHER INFORMATION YOU WOULD LIKE US TO HAVE?
                    </label>
                    <Field
                      type="text"
                      name="extraInfo"
                      className="w-full text-sm md:text-md p-2 bg-transparent border-gray-300 border-[2px] focus:outline-none text-black rounded-lg"
                      placeholder="Your Answer"
                    />
                  </div>

                  <div className="flex-1">
                    <button
                      type="button"
                      onClick={() => nextPage()}
                      className="w-full sm:w-[12.5%] bg-gardens text-xs sm:text-sm flex items-center font-Montserrat justify-center text-white p-2 rounded-lg mt-4"
                    >
                      Prev
                    </button>
                  </div>

                  <div className="flex-1">
                    <button
                      type="submit"
                      className="w-full sm:w-[15%] bg-transparent border-2 border-gardens text-xs sm:text-sm flex items-center font-Montserrat justify-center text-black p-2 rounded-lg mt-4"
                      disabled={isSubmitting}
                    >
                      Book a tour
                      <span className="text-black ml-2">
                        <Right />
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookForm;
