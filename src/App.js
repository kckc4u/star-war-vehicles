import './App.css';
import {Switch, Route} from 'react-router-dom';

import ErrorPage from './pages/error.page';
import HomePage from './pages/home.page';
import VehiclesPage from './pages/vehicles.page';
import VehicleDetailPage from './pages/vehicle-details.page';

import Header from './components/Header.component';

function App() {
  return (
    <div>
      <Header />
      <hr/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/vehicles" component={VehiclesPage} />
        <Route exact path="/vehicle/:id" component={VehicleDetailPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
