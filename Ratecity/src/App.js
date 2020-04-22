
import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import About from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
    <Router>
        <div>  
         
            <Switch>
              
             
              <Route path='/UserList' component={About} />
              
          </Switch>  
          
        </div>
      </Router>
    );
  }
}

export default App;
