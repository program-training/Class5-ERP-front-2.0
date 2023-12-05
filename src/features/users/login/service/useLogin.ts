import { UserInterface } from "../../interface/userInterface";
import { useMutation } from "@apollo/client";
import { QUERY_GET_USER } from "../../../../apollo/queries-temporary-location/queries";

const useLogin = () => {
  const [login] = useMutation(QUERY_GET_USER)

  const loginReq = async (user: UserInterface) => {
    try {
      const response = await login({
        variables: {
          email: user.email,
          password: user.password
        }
      });
      const TOKEN = response.data.token;
  
      localStorage.setItem("ERP_TOKEN", TOKEN);
      localStorage.setItem("erpUsername", user.email);
      return response.errors;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return loginReq
};

export default useLogin;
