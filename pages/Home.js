import React from 'react';
import D001 from '../components/days/D001';
import D002 from '../components/days/D002';
import D003 from '../components/days/D003';
import D004 from '../components/days/D004';
import D005 from '../components/days/D005';

export default class Home extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <D005 />
        <D004 />
        <D003 />
        <D002 />
        <D001 />
      </div>
    )
  }
}
