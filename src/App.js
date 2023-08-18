import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComponent from './Components/Home';
import WomenHealthComponent from './Components/WomenHealth';
import FeverComponent from './Components/Fever';

function App() {
  return (
    <div className="App">
      <HomeComponent />
      <Router>
        <Switch>
          <Route path="/women-health-package" component={WomenHealthComponent} />
          <Route path="/fever-package" component={FeverComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;