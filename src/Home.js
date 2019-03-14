import React from 'react'
import { View, Text } from 'react-native'
import { graphql } from 'react-apollo'
import { allGames } from './grahql'

const Home = ({ games, loading }) => {
  console.log('games, loading', games, loading)

  return (
    <View>
      <Text>Hej!</Text>
    </View>
  )
}

export default graphql(allGames, {
  props: ({ data: { loading, allGames } }) => ({
    loading,
    games: allGames,
  }),
})(Home)
