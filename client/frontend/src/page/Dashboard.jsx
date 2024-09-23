import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";
import PackageModal from "../components/PackageModal";
import Preloader from "../components/Preloader";
import ErrorPage from "../components/ErrorPage";
import { adminMakeRequest } from "../helper/makeRequest";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { data: bookings, error, loading, refetch } = useFetch("/booking/all");
  const {
    data: packagesData,
    loading: packageLoad,
    error: packageError,
    refetch: packageRefetch,
  } = useFetch("package/all");

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleCreatePackage = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEditPackage = () => {
    console.log("Editing Package");
  };

  const deletePackage = async (id) => {
    setLoading(true);
    try {
      const response = await adminMakeRequest.delete(`/package/${id}`);
      if (response.status === 204) {
        Swal.fire({
          text: "Package Deleted Successfully",
          icon: "success",
          iconColor: "#fff",
          toast: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 2000,
          background: "#cc5500",
          color: "#fff",
        });
        packageRefetch();
      } else {
        Swal.fire({
          text: "Unsuccessful!, Try again!",
          icon: "error",
          iconColor: "#fff",
          toast: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 2000,
          background: "#ff8323",
          color: "#fff",
        });
      }
    } catch (error) {
      Swal.fire({
        text: "An unexpected error occurred",
        icon: "error",
        iconColor: "#fff",
        toast: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 2000,
        background: "#ff8323",
        color: "#fff",
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const acceptBookings = async (id) => {
    const payload = { id, scheduled: true };
    try {
      setLoading(true);
      const response = await adminMakeRequest.put("booking/event", payload);
      if (response.status === 201) {
        refetch();
        Swal.fire({
          text: response.data.message,
          icon: "success",
          iconColor: "#fff",
          toast: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 2000,
          background: "#cc5500",
          color: "#fff",
        });
      } else {
        Swal.fire({
          text: "Unsuccessful, Try Again!",
          icon: "error",
          iconColor: "#fff",
          toast: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 2000,
          background: "#ff8323",
          color: "#fff",
        });
      }
    } catch (error) {
      Swal.fire({
        text: "An unexpected error occurred",
        icon: "error",
        iconColor: "#fff",
        toast: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 2000,
        background: "#ff8323",
        color: "#fff",
      });
    } finally {
      setLoading(false);
    }
  };

  const declineBookings = async (id) => {
    const payload = { id, scheduled: false };
    try {
      setLoading(true);
      const response = await adminMakeRequest.put("booking/event", payload);
      if (response.status === 200) {
        refetch();
        Swal.fire({
          text: response.data.message,
          icon: "success",
          iconColor: "#fff",
          toast: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 2000,
          background: "#cc5500",
          color: "#fff",
        });
      } else {
        Swal.fire({
          text: "Unsuccessful, Try Again!",
          icon: "error",
          iconColor: "#fff",
          toast: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 2000,
          background: "#ff8323",
          color: "#fff",
        });
      }
    } catch (error) {
      Swal.fire({
        text: "An unexpected error occurred",
        icon: "error",
        iconColor: "#fff",
        toast: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 2000,
        background: "#ff8323",
        color: "#fff",
      });
    } finally {
      setLoading(false);
    }
  };

  if (error || packageError) {
    return Swal.fire({
      text: "An unexpected error occurred",
      icon: "error",
      iconColor: "#fff",
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timer: 2000,
      background: "#ff8323",
      color: "#fff",
    });
  }

  if (loading || isLoading || packageLoad) {
    return <Preloader />;
  }

  return (
    <div className="w-full h-full">
      <div className="mx-auto py-10 w-11/12 h-full flex flex-col gap-10 items-start">
        <div className="w-full flex flex-row justify-between">
          <h1 className="text-5xl">May Gardens Admin System</h1>
          <button
            onClick={handleCreatePackage}
            className="bg-transparent border-[2px] border-[#CC5500] text-[#CC5500]  flex items-center justify-center rounded-lg text-md font-semibold font-Montserrat w-44 py-2 px-4"
          >
            <span className=" flex items-center justify-center">
              Create Package
            </span>
          </button>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
            <div className="p-0 m-0 w-full h-full">
              <PackageModal close={closeModal} refetch={packageRefetch} />
            </div>
          </div>
        )}
        <div className="w-full flex flex-col  gap-5">
          <h1 className="text-3xl">Packages</h1>

          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs leading-4 font-medium text-left text-[#CC5500] uppercase tracking-wider">
                    Package Name
                  </th>
                  <th className="px-6 py-3 text-xs leading-4 font-medium text-left text-[#CC5500] uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-xs leading-4 font-medium text-left text-[#CC5500] uppercase tracking-wider">
                    Capacity
                  </th>
                  <th className="px-6 py-3 text-xs leading-4 font-medium text-left text-[#CC5500] uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-xs leading-4 font-medium text-left text-[#CC5500] uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-transparent divide-y divide-gray-200">
                {packagesData
                  ? packagesData.map((packageItem) => (
                      <tr key={packageItem.id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {packageItem.name}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {packageItem.description}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {packageItem.capacity}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {packageItem.price}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="px-6 flex justify-between gap-2">
                            {/* <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                              onClick={handleEditPackage}
                            >
                              <i className="fa fa-edit mr-2"></i>Edit
                            </button> */}
                            <button
                              className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-2 rounded"
                              onClick={() => deletePackage(packageItem.id)}
                            >
                              <i className="fa fa-trash-alt mr-2"></i>Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  : "No Packages yet."}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full flex flex-col border-t-2 p-4 border-gray-50 gap-5">
          <h1 className="text-3xl">Bookings</h1>

          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-xs leading-4 font-medium text-left text-[#CC5500] uppercase tracking-wider">
                    Client Name
                  </th>
                  <th className="px-4 py-3 text-xs leading-4 font-medium text-left text-[#CC5500] uppercase tracking-wider">
                    Client Email
                  </th>

                  <th className="px-4 py-3 text-xs leading-4 font-medium text-left text-[#CC5500] uppercase tracking-wider">
                    Event Title
                  </th>
                  <th className="px-4 py-3 text-xs leading-4 font-medium text-left text-[#CC5500] uppercase tracking-wider">
                    Event Date
                  </th>

                  <th className="px-64py-3 text-xs leading-4 font-medium text-left text-[#CC5500] uppercase tracking-wider">
                    Event Description
                  </th>
                  <th className="px-2 py-3 text-xs leading-4 font-medium text-left text-[#CC5500] uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-transparent divide-y divide-[#CC5500]">
                {bookings
                  ? bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {booking.clientName}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {booking.clientEmail}
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {booking.eventTitle}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {booking.eventDate}
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {booking.eventDescription}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="px-6 flex justify-between gap-2">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              onClick={() => acceptBookings(booking.id)}
                            >
                              <i className="fas fa-edit mr-2"></i>Accept
                            </button>
                            <button
                              className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
                              onClick={() => declineBookings(booking.id)}
                            >
                              <i className="fas fa-trash-alt mr-2"></i>Decline
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  : "No Bookings made yet"}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
