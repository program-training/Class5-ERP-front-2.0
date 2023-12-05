import { useMutation } from "@apollo/client";
import { useAppDispatch } from "../../../redux/hooks";
import { setAlert } from "../alert/utils/alertSlices";
import { adminProductInterface } from "../interfaces/adminProductInterface";
import useActionOnRedux from "./useActionOnRedux";
import MUTATION_UPDATE_PRODUCT from "../../../apollo/queries-temporary-location/update-product-mutation";
const useSubmitFromUpdateProduct = () => {
  const dispatch = useAppDispatch();
  const actionOnRedux = useActionOnRedux();
  const [ updateProduct ] = useMutation(MUTATION_UPDATE_PRODUCT)
  return (newProduct: adminProductInterface, id: string | number) => {
    updateProduct({
      variables: {
        input: {
          ...newProduct
        },
        id
      }
    })
    // important !! take here the updated product and put it in redux
      .then(() => {
        actionOnRedux("update", );
        dispatch(
          setAlert({
            open: true,
            title: "success",
            message: "the product has been successfully updated",
            allowAccessProductPage: true,
          })
        );
      })
      .catch((error) => {
        dispatch(
          setAlert({
            open: true,
            message: error.message,
            title: "error",
            allowAccessProductPage: true,
          })
        );
      });
  };
};

export default useSubmitFromUpdateProduct;
