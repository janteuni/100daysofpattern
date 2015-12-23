import React from 'react';
import { Link } from 'react-router'

export default class App extends React.Component {

  constructor (props) {
    super(props);
  }

   render () {
     return (
       <div>
          <h1>Hello</h1>
          <Link to="/about">Link to About</Link>
          <Link to="/">Link to Home</Link>
          {this.props.children}
       </div>
     );
   }
}
