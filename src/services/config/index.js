import axios from "axios";
import successHandler from "services/config/successHandler";
import errorHandler from "services/config/errorHandler";

const AUTH_TOKEN = "";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.timeout = 10000;
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.interceptors.response.use(successHandler, errorHandler);
