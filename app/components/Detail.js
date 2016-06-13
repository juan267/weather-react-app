import React from 'react'
import DayItem from './dayitem'

const puke = (object) => {
  return (
    <pre>
      {JSON.stringify(object, null, ' ')}
    </pre>
  )
}

const cityDetail = (props) => {
  return (
    <DayItem day={props.weather} details={true} />
  )
}

export default cityDetail
