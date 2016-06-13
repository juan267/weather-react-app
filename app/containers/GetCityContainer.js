import React from 'react'
import GetCity from '../components/GetCity'

const GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState () {
    return {
      city: ''
    }
  },
  getDefaultProps () {
    return {
      direction: 'column'
    }
  },
  handleCitySubmit (e) {
    this.context.router.push(`/weather/${this.state.city}`)
  },
  handleCityInputChange (e) {
    this.setState({
      city: e.target.value
    })
  },
  render () {
    return (
      <GetCity
        direction={this.props.direction}
        onCitySubmit={this.handleCitySubmit}
        onCityInputChange={this.handleCityInputChange} />
    )
  }
})

export default GetCityContainer
