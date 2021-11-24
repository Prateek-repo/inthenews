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
    progress: 0
  }

  setProgress = (theBarProgress) => {
    this.setState({
      progress: theBarProgress
    })
  }


  render() {
    const {progress} = this.state
    const routeElement = (category) => {
      return (<News progressBar={this.setProgress} key={category === "/" ? "general" : category} pageSize={6} country="in" category={category === "/" ? "general" : category}/>)
    }
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        shadow={true}
        height={3}
        onLoaderFinished={() => this.setProgress(0)}
      />
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


