import axios from "axios";
import { useState } from "react";

function updatePostData() {
  const [data, setData] = useState(null);

  const postData = async (url, postData) => {
    try {
      const response = await axios.patch(url, postData);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return [data, postData];
}

export default updatePostData;