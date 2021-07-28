import './App.scss';
import Home from '../pages/Home';
import FindProducts from '../pages/FindProduct';
import Car from '../pages/Car';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  const initialState = useInitialState()

  return (
    <div className="App">
      <AppContext.Provider value={initialState}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/search/:id" component={FindProducts}/>
              <Route exact path="/cart" component={Car}/>
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
