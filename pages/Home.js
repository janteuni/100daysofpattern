import React from 'react';
import D001 from '../components/days/D001';
import D003 from '../components/days/D003';
import Day from '../components/days/Day';

export default class Home extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    const days = [
      { day: 'd013', num:'13', color: '' },
      { day: 'd012', num:'12', color: '' },
      { day: 'd011', num:'11', color: 'white' },
      { day: 'd010', num:'10', color: '' },
      { day: 'd009', num:'9', color: '' },
      { day: 'd008', num:'8', color: '' },
      { day: 'd007', num:'7', color: 'pink' },
      { day: 'd006', num:'6', color: 'pink' },
      { day: 'd005', num:'5', color: 'white' },
      { day: 'd004', num:'4', color: '' },
      <D003 key='d003'/>,
      { day: 'd002', num:'2', color: 'white' },
      <D001 key='d001'/>
    ];
    return (
      <div>
      { days.map(day => {
          if (!day.day) { return day; }
          return <Day key={day.day} className={day.day} num={day.num} color={day.color} />;
        }
      )}
      </div>
    )
  }
}
