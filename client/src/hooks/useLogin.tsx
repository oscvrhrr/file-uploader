import { useState } from "react";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  const handleInputValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}users/login`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputValues),
        }
      );
      if (response.ok) {
        console.log("i got the response");
        const data = await response.json();
        if (data) {
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { inputValues, handleInputValues, handleLogin };
};
