import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

import image from '../assets/california.jpg'

class TripCard extends Component {
  render() {
    return (
      <div className="App">
        <Card>
          <Image src={image} />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default TripCard