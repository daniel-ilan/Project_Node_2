import Auth from './pages/Auth';
import Main from './pages/Main';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <PrivateRoute path='/main'>
            <Main />
          </PrivateRoute>
          <Route path='/'>
            <Auth />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
