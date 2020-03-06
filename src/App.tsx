import * as React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { PlaceModel } from './models/PlaceModel';
import { PlacesComponent } from './components/PlacesComponent';
import { OpeningHourModel } from './models/OpeningHourModel';

class App extends React.Component {
  private url = 'http://localhost:3000/places/2';

  state = {
    place: new PlaceModel(),
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  componentDidMount() {
    console.log('in componentDidMount');
    fetch(this.url)
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
        <Jumbotron className="mt-5">
          <PlacesComponent place={this.state.place}></PlacesComponent>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
