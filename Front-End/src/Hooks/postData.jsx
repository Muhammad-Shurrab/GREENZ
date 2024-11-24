import axios from "axios";
import { useState } from "react";

function usePostData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const postData = async (postData) => {
    try {
      const response = await axios.post(url, postData);
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  return { data, postData, error };
}

export default usePostData;
