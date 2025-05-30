import React, { useEffect, useState, createContext } from "react";
import api from "../BaseUrl/baseUrl";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem("token"));
  const [userProfile, setUserProfile] = useState({});
  const [userCart, setUserCart] = useState([]);

  const fetchUserProfile = async () => {
    if (!userToken) return;
    
    try {
      const response = await api.get("/users/profile", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setUserProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        setUserToken("");
      }
    }
  };
  const cartApi = async () => {
    if (!userToken) return;
    try {
      const res = await api.get("/cart");
      setUserCart(res.data);
      // console.log(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
    cartApi();
  }, [userToken]);

  return (
    <Context.Provider
      value={{
        userToken,
        setUserToken,
        userProfile,
        fetchUserProfile,
        userCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
