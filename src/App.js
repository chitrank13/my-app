import './App.css';
import Signup from './components/Signup';
import Navbar from "./components/Navbar";
import { useState } from 'react';
import Login from './components/Login';
import { BrowserRouter as Router ,Route, Switch} from "react-router-dom";
import Pagenotfound from './components/Pagenotfound';
import Home from "./components/Home"
import Search from './components/Search';
import Cakedetails from './components/Cakedetails';
import Checkout from './components/Checkout';


var details =  {
projectname : "Bakery Love",
username : "Chitrank Singh"
}

function App(){
	var [login,setLogin] = useState();
	// setLogin = true;
	let myphone = ()=> {
	  // alert("d appjs myphone");
	  setLogin(true);
	}
	  return (
		<div >
		  <Router>
	
		 <Navbar isloggedin = {login} details = {details} >Kids</Navbar>
			<Switch>
			  <Route exact path="/" component={Home}><Home></Home> </Route>
	
			  <Route exact path="/login" component={ (props)=><Login {...props} callme={myphone}/>}></Route>
	          <Route exact path ="/search" component ={Search}></Route>

			  <Route  path="/checkout" component= {Checkout}></Route>
			  <Route exact path = "/cake/:cakeid" component = {Cakedetails}></Route>
			  <Route exact path="/signup" component={ Signup }>  <Signup/> </Route>
			  <Route exact path="/*" component={Pagenotfound}> </Route>
			  </Switch>
		  </Router>

		  </div>
	);
}

export default App