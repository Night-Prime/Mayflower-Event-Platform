import { useEffect, useState } from "react";

import { adminMakeRequest } from "../helper/makeRequest";

/**
 * @description reusable logic for fetching data from Mayflower API
 * @param {*} url : passing the url and(or) needed
 */

const useFetch = (url) => {
  // setting states
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch data
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await adminMakeRequest.get(url);
      setData(res.data.data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  // Return data, loading, error, and refetch function
  return { loading, data, error, refetch: fetchData };
};

export default useFetch;
