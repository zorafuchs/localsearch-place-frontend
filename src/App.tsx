import * as React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { PlaceModel } from './models/PlaceModel';
import { PlacesComponent } from './components/PlacesComponent';
import { OpeningHourModel } from './models/OpeningHourModel';

class App extends React.Component {
  state = {
    place: new PlaceModel('blubb', 'blubb', [
      new OpeningHourModel('blubb', ['blubb', 'blubb']),
      new OpeningHourModel('blubb', ['blubb', 'blubb']),
    ]),
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  componentDidMount() {
    console.log('in componentDidMount');
    fetch('http://localhost:3000/places/2')
      .then(res => res.json())
      .then(data => {
        const openingHours = data.data[0].attributes.opening_hours.map(this.makeOpeningHour);
        this.setState({
          place: new PlaceModel(data.data[0].attributes.name, data.data[0].attributes.address, openingHours),
        });
        console.log(this.state);
      })
      .catch(console.log);
  }

  private makeOpeningHour(OpeningHourObj: { days: string; value: string[] }): OpeningHourModel {
    return new OpeningHourModel(OpeningHourObj.days, OpeningHourObj.value);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    return (
      <Container>
        <Jumbotron>
          <PlacesComponent place={this.state.place}></PlacesComponent>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
