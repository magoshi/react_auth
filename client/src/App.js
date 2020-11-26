import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from  "react-router-dom"
import Login from './components/Login'
function App() {
  return (
   <>
   <Router>
      <Switch>
          <Route path='/'>
            <header>
              <Link to='/login'>Enter</Link>
              &nbsp;
              <Link to='/secret'>Secret</Link>
            </header>
            <Route/>
          
          <Route path='/login'component={Login}/>
          <Route path='/secret'/>
          
      </Switch>
   </Router>
   </>
  );
}

export default App;
