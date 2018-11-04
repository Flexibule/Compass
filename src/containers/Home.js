import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import './Home.css'

import Header from '../components/Header'
import TripCard from '../components/TripCard'
import CreateTrip from '../components/CreateTrip'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <CreateTrip />
        {/* <div className='header-text-2'>Upcoming Trips </div>
        <Grid columns = {3} className='upcoming-trips' padded>
          <Grid.Row>
            <Grid.Column>
              <TripCard />
            </Grid.Column>
            <Grid.Column>
              <TripCard />
            </Grid.Column>
            <Grid.Column>
              <TripCard />
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </div>
    )
  }
}

export default Home