import React from 'react'
import utils from '../utils/openWeatherUtils'

const styles = {
  dayItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '30px'
  },
  header: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  img: {
    height: '130px'
  },
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center'
  }
}

const DescriptionContainer = (props) => {
  console.log(props)
  return (
    <div style={styles.descriptionContainer}>
      <p>{props.city}</p>
      <p>{props.weather.weather[0].description}</p>
      <p>min temp: {utils.convertTemp(props.weather.temp.min)} degrees</p>
      <p>max temp: {utils.convertTemp(props.weather.temp.max)} degrees</p>
      <p>humidity: {props.weather.humidity}</p>
    </div>
  )
}

const dayItem = (props) => {
  console.log(props.details)
  const { day } = props
  const dateTime = utils.getDate(day.dt)
  return (
    <div key={props.dt} style={styles.dayItem} onClick={props.onDayClick}>
      <img style={styles.img} src={`./app/img/${day.weather[0].icon}.svg`} alt='' />
      <h2 style={styles.header}>{dateTime}</h2>
      {
        props.details === true
          ? <DescriptionContainer weather={day} />
          : null
      }
    </div>
  )
}

export default dayItem
