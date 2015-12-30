import React from 'react';
import PageNumber from '../PageNumber';

export default class D007 extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <article className="d007">
        <PageNumber num='7' classes='pink' />
      </article>
    )
  }
}
