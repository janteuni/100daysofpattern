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
      { day: 'd029', num:'29', color: 'white' },
      { day: 'd028', num:'28', color: 'white' },
      { day: 'd027', num:'27', color: 'blue' },
      { day: 'd026', num:'26', color: 'white' },
      { day: 'd025', num:'25', color: 'white' },
      { day: 'd024', num:'24', color: '' },
      { day: 'd023', num:'23', color: 'blue' },
      { day: 'd022', num:'22', color: '' },
      { day: 'd021', num:'21', color: 'blue' },
      { day: 'd020', num:'20', color: '' },
      { day: 'd019', num:'19', color: 'white' },
      { day: 'd018', num:'18', color: '' },
      { day: 'd017', num:'17', color: '' },
      { day: 'd016', num:'16', color: 'white' },
      { day: 'd015', num:'15', color: '' },
      { day: 'd014', num:'14', color: 'white' },
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
