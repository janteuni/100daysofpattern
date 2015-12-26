import React from 'react';
import PageNumber from '../PageNumber';

export default class D002 extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <article className="d002">
        <PageNumber num='2' classes='white' />
      </article>
    )
  }
}
