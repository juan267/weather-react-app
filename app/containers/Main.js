import React from 'react'
// import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap/lib'
import {Button} from 'react-bootstrap/lib'
import { Link } from 'react-router'
import GetCityContainer from '../containers/GetCityContainer'

const Main = React.createClass({
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.navbar}>
          <Link to='/' style={styles.link}><h2 style={{margin: 0}}>Clever Weather</h2></Link>
          <GetCityContainer direction='row' />
        </div>
        {this.props.children}
      </div>
    )
  }
})

var styles = {
  container: {
    height: '92vh',
    width: '100%'
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    padding: 5,
    justifyContent: 'space-between',
    background: 'rgba(252, 90, 44, 0.89)'
  }
}

export default Main
