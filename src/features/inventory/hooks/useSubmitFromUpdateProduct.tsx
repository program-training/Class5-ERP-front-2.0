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
    console.log('new product:', newProduct);
    
    updateProduct({
      variables: {
        input: {
          product: {
            ...newProduct,
            salePrice: +newProduct.salePrice,
            quantity: +newProduct.quantity,
            discountPercentage: +newProduct.discountPercentage,
            isForSale: `${newProduct.isForSale}` === 'true',
            costPrice: +newProduct.costPrice
          },
          id
        },
      }
    })
      .then(() => {
        actionOnRedux("update", newProduct);
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
