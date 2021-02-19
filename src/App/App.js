import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../Components/Home';
import * as ROUTES from '../Routes/Routes';
import Employee from '../Pages/AddEmployees/Employee';
import EditEmployee from '../Pages/EditEmployees/EditEmployee';

 // Routes for the entire application

function App() {
  return (
    <Router>
    <div>
          <Route exact path={ROUTES.LANDING} component={Home} />
          <Route exact path={ROUTES.ADD_EMPLOYEE} component={Employee} />
          <Route exact path={ROUTES.EDIT_EMPLOYEE} component={EditEmployee} />
    </div>
  </Router>
  )
}

export default App
