import './App.css';
import EditProfile from './editProfile'
import chngPwd from './chngPasword'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={EditProfile} />
        <Route path="/edit-profile" exact component={EditProfile} />
        <Route path="/change-password" exact component={chngPwd} />
      </Switch>
    </Router>
  );
}

export default App;
