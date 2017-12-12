import React from 'react'
import { Link } from 'react-router'
import { IndexLink } from 'react-router'

import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
        	<li><IndexLink to="/" activeStyle={{ color: 'red' }}>Home</IndexLink></li>
        	<li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
        	<li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li>
        </ul>
         {this.props.children || <Home/>}
      </div>
    )
  }
})