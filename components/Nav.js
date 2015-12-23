import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
   return (
     <div className='flex nav-main title'>
       <h1><Link to='/'>100 days of pattern</Link></h1>
       <Link to='/about'>About</Link>
     </div>
   );
  }
}
