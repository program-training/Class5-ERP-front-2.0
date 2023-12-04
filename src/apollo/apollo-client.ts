import { ApolloClient, InMemoryCache } from "@apollo/client";

const BASE_URI = import.meta.env.VITE_BASE_URI || "http://127.0.0.1:4000";

const client = new ApolloClient({
  uri: BASE_URI,
  cache: new InMemoryCache(),
});

export default client;
