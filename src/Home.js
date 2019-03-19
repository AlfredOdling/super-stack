import React from 'react'
import { View, Text } from 'react-native'
import { graphql, compose } from 'react-apollo'
import { GET_SOME_FIELD, ADD_FIELD } from './grahql/queries'

const Home = ({ ADD_FIELD, GET_SOME_FIELD }) => {
  // const { ADD_FIELD, GET_SOME_FIELD } = this.props
  console.log('props', ADD_FIELD, GET_SOME_FIELD)

  return (
    <View>
      <Text>Hejhejehje</Text>
    </View>
  )
}

export default compose(
  graphql(ADD_FIELD, { field: 'hje' }),
  graphql(GET_SOME_FIELD, {
    props: ({ data: { loading, someField } }) => ({
      loading,
      someField,
    }),
  })
)(Home)
