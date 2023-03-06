
import { useEffect, useState } from "react";

export function useToken() {
  const [token, setToken] = useState();

  useEffect(() => {
    const tokenString:any = localStorage.getItem("token");
    if (tokenString !== "undefined") {
      setToken(tokenString);
    }
  }, []);

  const saveToken = (userToken:any) => {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  };

  return { setToken: saveToken, token };
}