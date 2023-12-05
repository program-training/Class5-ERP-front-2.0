import { ApolloClient, InMemoryCache } from "@apollo/client";

const BASE_URI = import.meta.env.VITE_BASE_URL || "http://192.168.66.99:4000";

const client = new ApolloClient({
  uri: BASE_URI,
  cache: new InMemoryCache(),
});

export default client;
