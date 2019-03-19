import React from 'react'
import ReactDom from 'react-dom'
import ApolloClient, { InMemoryCache, HttpLink } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Routes from './Routes'

const addField = async (_, { field }, { cache, getCacheKey }) => {
  await cache.writeData({ data: { field } })
  return null
}

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  // link: new HttpLink({ uri: '...' }),
  resolvers: {
    Mutation: {
      addField: (_, { field }, { cache }) => {
        console.log('field', field)
      },
    },
  },
})

// Default State
cache.writeData({
  data: {
    someField: 'some value!!',
  },
})

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
)

// eslint-disable-next-line no-undef
ReactDom.render(<App />, document.getElementById('root'))
