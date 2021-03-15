import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

const successHandler = (response) => response.data;

const errorHandler = (error) => {
  const status = error.response.status;
  if (status === 403) {
    alert("You are not allowed to perform that task.");
  }
  if (status === 404) {
    alert(`We can't find what you're looking for.`);
  } else if (status === 401) {
    alert("Unauthanticated");
  } else {
    alert("Something went wrong.");
  }
};

const get = (apiLink) => axiosInstance.get(apiLink);
const post = (apiLink, data, params) =>
  axiosInstance.post(apiLink, data, params);
const put = (apiLink, data) => axiosInstance.put(apiLink, data);
const remove = (id) => axiosInstance.delete(id);

export { get, post, put, remove };
