import React from 'react';
import PageNumber from '../PageNumber';

export default class D010 extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <article className="d010">
        <PageNumber num='10' classes='' />
      </article>
    )
  }
}
