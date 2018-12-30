import React, { Component } from 'react'
import { Card, Button, Checkbox, Form } from 'semantic-ui-react'
import {Grid, Row, Col} from 'react-bootstrap'
import './CreateTrip.css'

class CreateTrip extends Component {
  render() {
    return (
      <div className="CreateTrip">
         <Card fluid>
          <Card.Content>
            <Card.Header className='center'>Create A Trip</Card.Header>
            <Card.Description>
                <Grid fluid>
                  <Row>
                    <Col md={4}>
                      <Form>
                          <Form.Field>
                              <input placeholder='Trip Name' />
                          </Form.Field>
                        </Form>
                    </Col>
                    <Col md={4}>
                      <Form>
                        <Form.Field>
                            <input placeholder='Location' />
                        </Form.Field>
                      </Form>
                    </Col>
                    <Col md={4}>
                      <Form>
                        <Form.Field>
                            <input placeholder='Dates' />
                        </Form.Field>
                      </Form>
                    </Col>
                  </Row>
                </Grid>
                <div className='center small-margin'>
                  <Button color='blue' className='create-button'>Create</Button>
                </div>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default CreateTrip