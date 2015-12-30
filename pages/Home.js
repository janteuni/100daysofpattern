import React from 'react';
import D001 from '../components/days/D001';
import D002 from '../components/days/D002';
import D003 from '../components/days/D003';
import D004 from '../components/days/D004';
import D005 from '../components/days/D005';
import D006 from '../components/days/D006';
import D007 from '../components/days/D007';

export default class Home extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <D007 />
        <D006 />
        <D005 />
        <D004 />
        <D003 />
        <D002 />
        <D001 />
      </div>
    )
  }
}
