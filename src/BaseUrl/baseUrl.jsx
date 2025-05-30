import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4080/api",
  timeout: 40000,
});

api.interceptors.request.use(
  (config) => {
    // Modify the config (e.g., add an Authorization header)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Handle successful response
    // console.log("Incoming response:", response);
    return response;
  },
  (error) => {
    // Handle response errors
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("API error:", error.response.status, error.response.data);

      // Example: redirect to login on 401
      if (error.response.status === 401) {
        // Clear auth token
        localStorage.removeItem("token");
        // Redirect to login or show message
        window.location.href = "/sign";
      }
    } else if (error.request) {
      // No response received
      console.error("No response received:", error.request);
    } else {
      // Something else went wrong
      console.error("Error setting up response:", error.message);
    }

    return Promise.reject(error);
  }
);
export default api;
