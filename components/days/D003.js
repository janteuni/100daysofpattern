import React from 'react';
import PageNumber from '../PageNumber';

export default class D003 extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <article className="d003">
        <PageNumber num='3' classes='white' />
        <p className='center mt2 big'>🎄</p>
      </article>
    )
  }
}
