import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import './TripCard.css'

import image from '../assets/california.jpg'

class TripCard extends Component {
  render() {
    return (
      <div className="TripCard">
        <Card fluid>
          <Image src={image} />
          <Card.Content>
            <Card.Header>New York City</Card.Header>
            <Card.Meta>December 2018</Card.Meta>
            <Card.Description>
              <p>Visiting New York City for omy friend's wedding. We plan to be here for 3 days before the wedding and an extra day afterwards to hang out.</p>
              <p className='settings'>...</p>
              </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default TripCard