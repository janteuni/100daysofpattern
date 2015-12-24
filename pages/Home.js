import React from 'react';
import D001 from '../components/days/D001';

export default class Home extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <D001 />
      </div>
    )
  }
}
