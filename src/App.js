import './App.css'
import React, { Component } from 'react'
import NavBar from './components/navbar/NavBar'
import News from './components/news/News'
import {
  BrowserRouter as Router,
 
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state={
    progress: 0,
    country: "in",
    darkModeStatus: false
  }


  setProgress = (theBarProgress) => {
    this.setState({
      progress: theBarProgress
    })
  }

  setCountry = (country) => {
    console.log("dfd", country)
    this.setState({country: country})
  }

  darkModeEnable = () => {
    this.setState({darkModeStatus: !this.state.darkModeStatus})
      }

  routeElement = (category, key) => {
    const { country, darkModeStatus} = this.state
    return (<News progressBar={this.setProgress} key={key === "/" ? "general" : key} pageSize={6} country={country} category={category === "/" ? "general" : category} darkMode={darkModeStatus}/>)
  }

  render() {
    const {progress, category, darkModeStatus} = this.state
    return (
      <div style={{backgroundColor: darkModeStatus ? "black" : null}}>
        <Router>
        <NavBar setTheCountry={this.setCountry} category={category} darkMode={this.darkModeEnable}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        shadow={true}
        height={3}
        onLoaderFinished={() => this.setProgress(0)}
      />
          <Routes>
          <Route exact path="/" element={this.routeElement("/", "/")}/>
          <Route exact path="/general" element={this.routeElement("general", "general")}/>
          <Route exact path="/health" element={this.routeElement("health", "health")}/>
          <Route exact path="/business" element={this.routeElement("business", "business")}/>
          <Route exact path="/entertainment" element={this.routeElement("entertainment", "entertainment")}/>
          <Route exact path="/sports" element={this.routeElement("sports", "sports")}/>
          <Route exact path="/technology" element={this.routeElement("technology", "technology")}/>
          <Route exact path="/science" element={this.routeElement("science", "science")}/>
          </Routes>
       
       
        
       </Router>
      </div>
    )
  }
}


