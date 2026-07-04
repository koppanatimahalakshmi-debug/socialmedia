import { useState } from "react"
import { authContext, baseUrl } from "../Utilities";

let AuthProvider = ({ children }) => {
  let [data, setData] = useState({
    addResponse: null,
    loginResponse: null,
    singleUser: null,
  });

  let userId = localStorage.getItem("id");
  let { addResponse, loginResponse, singleUser } = data;
  let addUser = async (data) => {
    try {
      let response = await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      setData({ ...data, addResponse: response.status });
    } catch (error) {
      console.log(error);
    }
  };

  let validation = async (email, password) => {
    try {
      let response = await fetch(`${baseUrl}/users`);
      let responseData = await response.json();
      let filterSingleUser = responseData.find(
        (user) => user.email === email && user.password === password,
      );
      if (filterSingleUser !== undefined) {
        setData({ ...data, loginResponse: true, singleUser: filterSingleUser});
        localStorage.setItem("id", filterSingleUser.id);
      } else {
        alert("User Not Found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let logout = () => {
    setData({ ...data, loginResponse: false });
  };
  return (
    <authContext.Provider
    value={{
      addUser,
      addResponse,
      validation,
      loginResponse,
      singleUser,
      logout,
      userId
    }}
    >
      {children}
    </authContext.Provider>
  )
}
export default AuthProvider;