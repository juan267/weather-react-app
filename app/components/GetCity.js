import React from 'react'
import {Button} from 'react-bootstrap/lib'

const GetCity = (props) => {
  return (
    <div style={getStyles(props)}>
      <input className='form-control' type='text' placeholder='Bogota, Colombia' onChange={props.onCityInputChange} />
      <Button
        style={{margin: '10px'}}
        bsStyle='success'
        onClick={props.onCitySubmit}
        >Get Weather</Button>
    </div>
  )
}

// Inside function so we can use props
const getStyles = (props) => {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300
  }
}

export default GetCity
