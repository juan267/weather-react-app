import React from 'react'
import CityWeather from '../components/CityWeather'
import openWeatherUtils from '../utils/openWeatherUtils'

const CityWeatherContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState () {
    return {
      loading: true,
      weather: {}
    }
  },
  componentDidMount () {
    // console.log('Hola ya me monte')
    // console.log(this.props.routeParams.city)
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps (nextProps) {
    console.log('inComponentwillreceiveprops', nextProps)
    this.makeRequest(nextProps.params.city)
  },
  makeRequest (city) {
    openWeatherUtils.getForecast(this.props.routeParams.city)
      .then((weather) => {
        this.setState({
          weather: weather,
          loading: false
        })
      })
  },
  handleClickOnCity (weather) {
    // console.log(weather)
    this.context.router.push({
      pathname: `/detail/${this.props.routeParams.city}`,
      state: {
        weather: weather
      }
    })
  },
  render () {
    return (
      <CityWeather
        isLoading={this.state.loading}
        weather={this.state.weather}
        city={this.props.routeParams.city}
        onDayClick={this.handleClickOnCity} />
    )
  }
})

export default CityWeatherContainer
