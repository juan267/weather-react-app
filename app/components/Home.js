import React from 'react'
import GetCityContainer from '../containers/GetCityContainer'
import {Jumbotron} from 'react-bootstrap/lib'

const Home = React.createClass({
  render () {
    return (
      <div style={styles.container}>
        <Jumbotron style={styles.jumbotron}>
          <h1 style={styles.header}>Enter a City and State</h1>
          <GetCityContainer />
        </Jumbotron>
      </div>
    )
  }
})

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/img/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  jumbotron: {
    background: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    color: 'white'
  },
  header: {
    fontWeight: 100,
    fontSize: 45
  }
}

export default Home
