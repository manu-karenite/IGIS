import axios from "axios";

const deblurringResult = async (data) => {
  const result = await axios({
    method: "POST",
    url: `http://127.0.0.1:5000/deblurring-result`,
    data: { msg: data },
  });
  return result;
};
export { deblurringResult };
