import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import { Right } from "../icons/Right";
import { clientMakeRequest } from "../helper/makeRequest";
import Swal from "sweetalert2";

const BookForm = ({ closeModal, item }) => {
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

  useEffect(() => {
    console.log(item);
  });

  return (
    <div className="bg-black bg-opacity-90 text-black h-full w-full flex items-center justify-center p-4 sm:p-6">
      <div className="animate-fade-in bg-white p-4 sm:p-6 md:p-8 rounded-lg font-Montserrat w-full max-w-lg h-full overflow-y-auto">
        <button
          onClick={closeModal}
          className="text-black text-5xl text-right p-1"
        >
          &times;
        </button>
        <h2 className="text-2xl sm:text-3xl font-semibold font-Playfair mb-6 text-center border-b-2 border-black">
          Book a tour
        </h2>

        <div className="flex sm:flex-row gap-2 sm:gap-4 mb-6">
          <img
            loading="lazy"
            src="https://ik.imagekit.io/tsfcuw1ce/Images/dinner.png?updatedAt=1725131402076"
            alt="Tour 1"
            className="rounded-lg w-[30%] object-cover"
          />
          <img
            loading="lazy"
            src="https://ik.imagekit.io/tsfcuw1ce/Images/dinner3.png?updatedAt=1725131405226"
            alt="Tour 2"
            className="rounded-lg w-[30%] object-cover mx-0 sm:mx-2"
          />
          <img
            loading="lazy"
            src="https://ik.imagekit.io/tsfcuw1ce/Images/threeselfie.png?updatedAt=1725131393769"
            alt="Tour 3"
            className="rounded-lg w-[30%] object-cover"
          />
        </div>

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
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("Form data:", values);
            setSubmitting(false);
            try {
              const result = await clientMakeRequest.post("/booking", values);
              if (result.data.status === "success") {
                console.log("Result: ", result.data);
                Swal.fire({
                  text: `${result.data.message}`,
                  icon: "success",
                  iconColor: "#fff",
                  toast: true,
                  position: "top-right",
                  showConfirmButton: false,
                  timer: 2000,
                  background: "#cc5500",
                  color: "#fff",
                });
                closeModal();
              }
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
          {({ isSubmitting }) => (
            <Form>
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
                  className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-lg"
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
                  className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-lg"
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
                  className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-lg"
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
                  className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-lg"
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
                  className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-lg"
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
                    className="bg-transparent text-black border-[#4E4E4E] rounded-lg border-[2px] pr-2 focus:outline-none"
                    style={{ width: "100%", maxWidth: "100px" }}
                  >
                    <option value="+234">🇳🇬 +234</option>
                    {/* Add more country codes as needed */}
                  </select>
                  <Field
                    type="text"
                    name="clientPhone"
                    className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-lg"
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
                    className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-lg"
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
                    className="block text-xs sm:text-sm font-medium mb-1"
                    htmlFor="eventTime"
                  >
                    Time
                  </label>
                  <Field
                    type="time"
                    name="eventTime"
                    className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-lg"
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
              <button
                type="submit"
                className="w-full sm:w-[25%] bg-[#cc5500] text-xs sm:text-sm flex items-center font-Montserrat justify-center text-white p-2 rounded-lg mt-4"
                disabled={isSubmitting}
                onClick={closeModal}
              >
                Submit
                <span className="text-white ml-2">
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
