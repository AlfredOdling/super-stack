import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
// import _logout from '../redux/2_actions/userActions/logoutAction'
import { _Space } from '../components/general/_Space'
import { _Text } from '../components/general/_Text'
import { _Button } from '../components/general/_Button'
import { Calendar_ } from '../components/Calendar_'
import { LeaveMessage } from '../components/LeaveMessage'

class OfferCourseScreen extends React.Component {
  componentDidMount() {
    // const { _getSpecificAds, user_id } = this.props
    // _getSpecificAds(user_id)
  }

  goToPayment = () => {
    const { navigation } = this.props
    const { navigate } = navigation
    navigate('PaymentScreenRoute')
  }

  // <_Text type="mb_18_white" text="När kan du hålla i kursen?" />
  // <_Space amount={20} />
  // <Calendar_ />
  // <_Space amount={40} />
  // <LeaveMessage />
  // <_Space amount={40} />
  // <_Button text="SKICKA ERBJUDANDE" bgColor="green" txtColor="white" />
  render() {
    return <ScrollView />
  }
}

const mapStateToProps = state => {
  return {
    name: state.userReducers.loginReducer.data.user_full_name,
    user_id: state.userReducers.loginReducer.data.user_id,
  }
}
// const mapDispatchToProps = { _logout, _getSpecificAds }
const _OfferCourseScreen = connect(
  mapStateToProps,
  undefined
)(OfferCourseScreen)
export default _OfferCourseScreen
