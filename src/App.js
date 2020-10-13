import React, { Component } from 'react'

// import PostList from './posts/PostsList'
// import StudentList from './students/StudentList'
// import RecipesList from './recipes/RecipesList'
import DischargeSummary from './dischargeSummary/dischargeSummary'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <DischargeSummary />
      </div>
      
    )
  }
}

export default App
