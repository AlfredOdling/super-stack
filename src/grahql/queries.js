import gql from 'graphql-tag'

// LOCAL
export const GET_SOME_FIELD = gql`
  {
    someField @client
  }
`

export const ADD_FIELD = gql`
  mutation addField($field: String!) {
    addField(field: $field) @client {
      field
    }
  }
`

// SERVER
export const GET_DOG = gql`
  query {
    dog(breed: "bulldog") {
      id
      breed
      displayImage
    }
  }
`

export const GET_LAUNCH = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`
