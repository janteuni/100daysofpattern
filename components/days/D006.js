import React from 'react';
import PageNumber from '../PageNumber';

export default class D006 extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <article className="d006">
        <PageNumber num='6' classes='pink' />
      </article>
    )
  }
}
