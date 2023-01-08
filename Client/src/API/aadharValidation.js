import axios from "axios";

const aadharValidation = async (data) => {
  console.log(typeof data);
  const result = await axios({
    method: "POST",
    url: `http://127.0.0.1:5000/aadhar-validation`,
    data: { msg: data },
  });
  return result;
};

export { aadharValidation };
