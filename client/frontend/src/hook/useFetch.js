import { useEffect, useState } from "react";

import { adminMakeRequest } from "../helper/makeRequest";

/**
 * @description reusable logic for fetching data from Mayflower API
 * @param {*} url : passing the url and(or) needed
 */

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await adminMakeRequest.get(url);
      if (res.status < 200 || res.status >= 300) {
        throw new Error(`Error: ${res.statusText}`);
      }
      setData(res.data.data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, data, error, refetch: fetchData };
};

export default useFetch;
