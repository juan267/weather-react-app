import React from 'react'
import CityDetail from '../components/Detail'

const DetailContainer = React.createClass({
  getInitialState () {
    return {

    }
  },
  render () {
    return (
      <CityDetail weather={this.props.location.state.weather} />
    )
  }
})

export default DetailContainer
