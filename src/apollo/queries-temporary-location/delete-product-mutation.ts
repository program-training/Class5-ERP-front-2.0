import { gql } from "@apollo/client";

const MUTATION_DELETE_PRODUCT = gql`
mutation DeletePost($id: ID!) {
    deletePost(id: $id) 
}
`

export default MUTATION_DELETE_PRODUCT