import { ApolloClient, InMemoryCache } from "@apollo/client";

const URL = process.env.NEXT_PUBLIC_GRAPHQL_URL;

const client = new ApolloClient({
    uri: URL,
    cache: new InMemoryCache()
});

export default client;