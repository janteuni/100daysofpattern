import React from 'react';
import Nav from './Nav';
export default class App extends React.Component {

  constructor (props) {
    super(props);
  }

   render () {
     return (
       <div>
          <Nav />
          {this.props.children}
       </div>
     );
   }
}
