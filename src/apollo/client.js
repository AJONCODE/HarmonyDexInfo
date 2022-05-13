import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://46.101.170.222:8000/subgraphs/name/harmony-swap/subgraph',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
  headers: { "Access-Control-Allow-Origin": "*" }
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://46.101.170.222:8030/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
  headers: { "Access-Control-Allow-Origin": "*" }
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://46.101.170.222:8000/subgraphs/name/harmony-swap/subgraph',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://46.101.170.222:8000/subgraphs/name/harmony-swap/subgraph',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graph2.viper.exchange/subgraphs/name/harmony/blocks',
  }),
  cache: new InMemoryCache(),
})