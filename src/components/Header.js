import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='header-text'>
          Compass
        </div>
        <div className='header-button'>
          <Button inverted className='button-text'>Explore</Button>
        </div>
      </div>
    )
  }
}

export default Header

