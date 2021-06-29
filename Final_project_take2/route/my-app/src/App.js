import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


 export const AppContext = React.createContext(null)

function App() {
const [user, setUser] = useState(null)

  return (
    <Router>
      <AppContext.Provider value={{user,setUser}}>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/' exact component={About}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register} />
        </Switch>
      </div>
      </AppContext.Provider>
    </Router>
  );
}



export default App;
