import React from 'react';
import PageNumber from '../PageNumber';

export default class D005 extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <article className="d005">
        <PageNumber num='5' classes='white' />
      </article>
    )
  }
}
