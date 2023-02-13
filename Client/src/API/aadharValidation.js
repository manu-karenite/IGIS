import axios from "axios";

const aadharValidation = async (data) => {
  console.log(data);
  const result = await axios({
    method: "POST",
    url: `http://127.0.0.1:5000/aadhar-validation`,
    data: { msg: data },
  });
  return result;
};
const compareImages = async (link1, link2) => {
  const result = await axios({
    method: "POST",
    url: `http://127.0.0.1:5000/compare-images`,
    data: { link1: link1, link2: link2 },
  });
  return result;
};
export { aadharValidation, compareImages };
