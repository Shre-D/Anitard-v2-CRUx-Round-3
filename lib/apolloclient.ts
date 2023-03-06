import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri : 'https://graphql.anilist.co/',
  cache: new InMemoryCache(),
})

export default client;