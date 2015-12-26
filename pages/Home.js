import React from 'react';
import D001 from '../components/days/D001';
import D002 from '../components/days/D002';
import D003 from '../components/days/D003';

export default class Home extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <D003 />
        <D002 />
        <D001 />
      </div>
    )
  }
}
