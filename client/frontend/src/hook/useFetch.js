import {
  useEffect,
  useState,
} from 'react';

import { adminMakeRequest } from '../helper/makeRequest';

/**
 * @description reusable logic for fetching data from Mayflower API
 * @param {*} url : passing the url and(or) needed
 */

const useFetch = (url) => {
  // setting states
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await adminMakeRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
