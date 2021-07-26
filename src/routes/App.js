import './App.scss';
import Home from '../pages/Home'
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

function App() {
  return (
    <div className="App">
      <AppContext.Provider value={useInitialState}>
        <Home />
      </AppContext.Provider>
    </div>
  );
}

export default App;
