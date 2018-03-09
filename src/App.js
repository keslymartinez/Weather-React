import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {connect} from 'react-redux';
//import {createStore} from 'redux';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';
//import {store} from './store';

import './App.css';


const cities = [
    'Santiago,scl',
    'Buenos Aires,ar',
    'Bogota,col',
    'Ciudad de México,mx',
    'Madrid,es',
    'Rio de Janeiro,br',
    'London,uk'
];
// const  store = createStore(() => {});
/* const  store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/

/*const setCity = value => ({
  type: 'setCity',
  value
})
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    }
  }

handlerSelectionLocation = city => {
  this.setState({city})
  console.log(`handlerSelectionLocation ${city}`)


 // const action = {type:'setState', value: city}

    //  store.dispatch(setCity(city));
    this.props.setCity(city);
}

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <AppBar title='Belu'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
            <LocationList cities={cities}
          onSelectedLocation={this.handlerSelectionLocation}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="details">
                {city === null ? <h1>No se seleciono ciudad</h1> : <ForecastExtended city={this.state.city}></ForecastExtended>}
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>

      /*
      <MuiThemeProvider>
        <div className="App">
        </div>
      </MuiThemeProvider>
      */
    );
  }
}

//const mapDispatchtoPropsActions = () => {};

//const componentConnected = connect(null, mapDispatchtoPropsActions) (App) 

const mapDispatchtoPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchtoPropsActions) (App) 

export default AppConnected;
