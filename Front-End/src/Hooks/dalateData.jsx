import axios from "axios";
import { useState } from "react";

function deletePostData() {
  const [data, setData] = useState(null);

  const postData = async (url) => {
    try {
      const response = await axios.patch(url, { isDeleted: true });
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return [data, postData];
}

export default deletePostData;