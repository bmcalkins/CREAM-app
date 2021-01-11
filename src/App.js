import React, { useEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
import News from './News';
import nav from './nav.css'
import Register from './register'

function NavBar(props){
  if (props.loggedIn){

    return (
      <nav>
      <Link to="/dashboard">Dashboard</Link>
      </nav>
    )
  }
  return (
    <nav>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    </nav>
  )
}

export default function App() {
  const [data,setData] = useState({loggedIn:false})

  
  return (
    <Router>
 
        <NavBar loggedIn={data.loggedIn}/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login setData={setData}/>
          </Route>
          <Route path="/register">
            <Register setData={setData}/>
          </Route>
          <Route path="/secret">
            <Secret />
          </Route>
          <Route path="/news">
            <News />

          </Route>
          
          <Route path="/dashboard">
            {
              localStorage.getItem('bearer')!== undefined
              ?
              <Dashboard data={data} setData={setData}/>
              :
              <div>
                please create an account or re enter account info
              </div>
            }
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  useEffect(() => {
    fetch("/api").then(resp => resp.json()).then(resp => console.log(resp))
  }, [])
  return <h2>Home</h2>;
}



function Secret() {
  return <h2>Secret</h2>;
}