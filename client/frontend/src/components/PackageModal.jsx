import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { adminMakeRequest } from "../helper/makeRequest";
import Swal from "sweetalert2";

const PackageModal = ({ close, refetch }) => {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Package name is required"),
    description: Yup.string().required("Package Description is required"),
    capacity: Yup.string().required("Package Capacity is required"),
    price: Yup.number(),
  });
  return (
    <div className="bg-black bg-opacity-90 text-black h-full w-full flex items-center justify-center p-6">
      <div className="animate-fade-in bg-white p-8 rounded-lg w-[40%] h-max overflow-y-scroll">
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-[10%] flex flex-row justify-between items-center border-b-2 border-black">
            <h1 className="text-3xl ">Create Package</h1>
            <button onClick={close} className=" text-black text-right text-2xl">
              &times;
            </button>
          </div>
          <div className="w-full h-full flex flex-col">
            <Formik
              initialValues={{
                name: "",
                description: "",
                capacity: "",
                price: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(false);
                setLoading(true);
                try {
                  const result = await adminMakeRequest.post(
                    "/package",
                    values
                  );
                  if (result.data.status === "success") {
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
                    setLoading(false);
                    close();
                  }
                } catch (error) {
                  Swal.fire({
                    text: `Unsucessful, Try Again!`,
                    icon: "error",
                    iconColor: "#fff",
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false,
                    timer: 2000,
                    background: "#ff8323",
                    color: "red",
                  });
                  setLoading(false);
                } finally {
                  setLoading(false);
                  refetch();
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="my-4">
                    <Field
                      type="text"
                      name="name"
                      className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-lg"
                      placeholder="Package Name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      type="textarea"
                      name="description"
                      className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-lg"
                      placeholder="Package Description"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      type="text"
                      name="capacity"
                      className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-lg"
                      placeholder="Capacity"
                    />
                    <ErrorMessage
                      name="capacity"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      type="number"
                      name="price"
                      className="w-full p-2 bg-transparent border-[#4E4E4E] border-[2px] focus:outline-none text-black rounded-lg"
                      placeholder="Price"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-[25%] bg-[#cc5500] flex items-center font-Montserrat justify-center text-white p-2 rounded-lg mt-4"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageModal;
