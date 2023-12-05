import { gql } from "@apollo/client";

const MUTATION_UPDATE_PRODUCT = gql`
mutation UpdateProduct($id: ID!, $input: UpdateProductInput!) {
  updateProduct(id: $id, input: $input) {
    id
    category
    costPrice
    createdBy 
    description
    discountPercentage
    imageAlt
    imageUrl
    isForSale
    name
    quantity
    salePrice
    supplier
  }
}
`

export default MUTATION_UPDATE_PRODUCT