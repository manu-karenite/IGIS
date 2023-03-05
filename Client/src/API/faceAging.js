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

const generateImage = async (imgLink, age) => {
  const result = await axios({
    method: "POST",
    url: `http://127.0.0.1:5000/generate-image`,
    data: { imgLink: imgLink, age: age },
  });
  return result;
};

const generateVideo = async (imgLink) => {
  const result = await axios({
    method: "POST",
    url: `http://127.0.0.1:5000/generate-video`,
    data: { imgLink: imgLink },
  });
  return result;
};
export { aadharValidation, generateImage, generateVideo };
