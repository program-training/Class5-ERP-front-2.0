import { useMutation } from "@apollo/client";
import { UserInterface } from "../../interface/userInterface";
import { MUTATION_ADD_USER } from "../../../../apollo/queries-temporary-location/queries";

const useSignUp = () => {
  const [addUser] = useMutation(MUTATION_ADD_USER);
  
  const signUpReq = async (user: UserInterface) => {
    console.log('signing');
    
    try {
      const userData = await addUser({ 
         variables: {
          input: {
            email: user.email,
            password: user.password
          }
         }
      });
      console.log('res', userData);
      
      return userData;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return signUpReq
}

export default useSignUp;
