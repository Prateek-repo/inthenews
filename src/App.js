import './App.css'
import React, { Component } from 'react'
import NavBar from './components/navbar/NavBar'
import News from './components/news/News'
import {
  BrowserRouter as Router,
 
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    const routeElement = (category) => {
      return (<News key={category === "/" ? "general" : category} pageSize={6} country="in" category={category === "/" ? "general" : category}/>)
    }
    return (
      <div>
        <Router>
        <NavBar/>
     
          <Routes>
          <Route exact path="/" element={routeElement("/")}/>
          <Route exact path="/general" element={routeElement("general")}/>
          <Route exact path="/health" element={routeElement("health")}/>
          <Route exact path="/business" element={routeElement("business")}/>
          <Route exact path="/entertainment" element={routeElement("entertainment")}/>
          <Route exact path="/sports" element={routeElement("sports")}/>
          <Route exact path="/technology" element={routeElement("technology")}/>
          <Route exact path="/science" element={routeElement("science")}/>
          </Routes>
       
       
        
       </Router>
      </div>
    )
  }
}


// this is not working in react router 6