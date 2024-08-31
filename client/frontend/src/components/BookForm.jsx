import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import dinner from "../assets/Images/dinner.png";
import dinner3 from "../assets/Images/dinner3.png";
import threeSelfie from "../assets/Images/threeselfie.png";
import { Right } from "../icons/Right";
import { clientMakeRequest } from "../helper/makeRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookForm = ({ closeModal }) => {
  const validationSchema = Yup.object({
    clientName: Yup.string().required("Name is required"),
    clientEmail: Yup.string()
      .email("Invalid clientEmail address")
      .required("Email is required"),
    clientPhone: Yup.string().required("Phone number is required"),
    eventTitle: Yup.string().required("Title of the Event is required"),
    eventDate: Yup.date().required("Date of event is required"),
    packageId: Yup.mixed().required("Select a package"),
  });

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    clientMakeRequest
      .get("/package/all")
      .then((res) => {
        const item = res.data.data;
        setPackages(item);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-black bg-opacity-90 text-black h-full w-full flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg w-[60%] h-full overflow-y-scroll">
        <button
          onClick={closeModal}
          className=" text-black text-right text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-semibold mb-8 text-center">Book a tour</h2>

        <div className="flex justify-between mb-6">
          <img src={dinner} alt="Tour 1" className="rounded-lg w-1/3" />
          <img src={dinner3} alt="Tour 2" className="rounded-lg w-1/3 mx-2" />
          <img src={threeSelfie} alt="Tour 3" className="rounded-lg w-1/3" />
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
                toast.success(`${result.data.message}`, {
                  position: toast.POSITION.TOP_RIGHT,
                });
              }
            } catch (error) {
              toast.error("Error! Try again", {
                position: toast.POSITION.TOP_RIGHT,
              });
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="eventTitle"
                >
                  Event Title
                </label>
                <Field
                  type="text"
                  name="eventTitle"
                  className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-md"
                  placeholder="What's the name of your Event"
                />
                <ErrorMessage
                  name="eventTitle"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="eventDescription"
                >
                  Event Description
                </label>
                <Field
                  type="text"
                  name="eventDescription"
                  className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-md"
                  placeholder="Describe your Event"
                />
                <ErrorMessage
                  name="eventDescription"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <Field
                  component="select"
                  name="packageId"
                  className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-md"
                >
                  <option value="">Select a package</option>
                  {packages && packages.length > 0 ? (
                    packages.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))
                  ) : (
                    <option value="">No packages available</option>
                  )}
                </Field>
                <ErrorMessage
                  name="packageId"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="clientName"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="clientName"
                  className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-md"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="clientName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="clientEmail"
                >
                  Email address
                </label>
                <Field
                  type="clientEmail"
                  name="clientEmail"
                  className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-md"
                  placeholder="Enter your Email address"
                />
                <ErrorMessage
                  name="clientEmail"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="clientPhone"
                >
                  Phone number
                </label>
                <div className="flex gap-4">
                  <select
                    className="bg-transparent text-black border-[#4E4E4E] rounded-md border-[2px] pr-2 focus:outline-none"
                    style={{ width: "20%" }}
                  >
                    <option value="+234">🇳🇬 +234</option>
                    {/* Add more country codes as needed */}
                  </select>
                  <Field
                    type="text"
                    name="clientPhone"
                    className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-md"
                    placeholder="Enter your Phone number"
                  />
                </div>
                <ErrorMessage
                  name="clientPhone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className=" flex w-full items-center justify-center gap-4">
                <div className="mb-4 flex flex-col w-[70%]">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="eventDate"
                  >
                    Date of arrival
                  </label>

                  <div className="flex items-center relative w-full bg-transparent">
                    <Field
                      type="date"
                      name="eventDate"
                      className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-md"
                      placeholder="Select Date"
                    />
                  </div>

                  <ErrorMessage
                    name="eventDate"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4 flex w-[30%] flex-col">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="eventTime"
                  >
                    Time
                  </label>
                  <Field
                    type="time"
                    name="eventTime"
                    className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-md"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                    }}
                    placeholder="Time of Event"
                  />
                  <ErrorMessage
                    name="eventTime"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-[25%] bg-[#cc5500] flex items-center font-Montserrat justify-center text-black p-2 rounded-md mt-4"
                disabled={isSubmitting}
              >
                Submit
                <span className=" text-black ml-2">
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
