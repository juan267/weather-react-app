import React from 'react'
import Loading from './Loading'
import DayItem from './dayItem'

// const puke = (object) => {
//   return (
//     <pre>
//       {JSON.stringify(object, null, ' ')}
//     </pre>
//   )
// }

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cityName: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30
  },
  subHeader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    listStyleType: 'none'
  }
}

// const dayItem = (day) => {
//   const dateTime = utils.getDate(day.dt)
//   return (
//     <div style={styles.dayItem} key={day.dt}>
//       <img style={styles.img} src={`./app/img/${day.weather[0].icon}.svg`} alt='' />
//       <h2 style={styles.dayItem.header}>{dateTime}</h2>
//     </div>
//   )
// }

const CityWeather = (props) => {
  console.log(props)
  if (props.isLoading === true) {
    return <Loading text='Loading City weather' />
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.cityName}>{props.city}</h1>
      <p style={styles.subHeader}>Select a day</p>
      <ul style={styles.list}>
        {props.weather.list.map((day) => {
          return <DayItem key={day.dt} day={day} onDayClick={props.onDayClick.bind(null, day)} />
        })}
      </ul>
    </div>
  )
}

export default CityWeather
