import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <Router>
      <div>
        
          <Route path="/">
            <Home />
          </Route>
        
      </div>
    </Router>
  );
}

export default App;