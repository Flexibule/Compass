import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import './CreateTrip.css'

class CreateTrip extends Component {
  render() {
    return (
      <div className="CreateTrip">
         <Card fluid>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default CreateTrip