import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../Components/Home';
import * as ROUTES from '../Routes/Routes';
import Employee from '../Pages/AddEmployees/Employee';

function App() {
  return (
    <Router>
    <div>
          <Route exact path={ROUTES.LANDING} component={Home} />
          <Route exact path={ROUTES.ADD_EMPLOYEE} component={Employee} />
    </div>
  </Router>
  )
}

export default App
