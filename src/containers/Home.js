import React, { Component } from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import './Home.css'

import Header from '../components/Header'
import TripCard from '../components/TripCard'
import CreateTrip from '../components/CreateTrip'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Grid fluid>
          <Row>
            <Col md={8} sm={12} mdOffset={2} smOffset={0}>
              <CreateTrip />
            </Col>
          </Row>
        </Grid>

        <Grid fluid>
          <Row>
            <Col md={10} mdOffset={1}>
              <Row>
                <Col md={4} sm={12}>
                  <TripCard />
                </Col>
                <Col md={4} sm={12}>
                  <TripCard />
                </Col>
                <Col md={4} sm={12}>
                  <TripCard />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Home