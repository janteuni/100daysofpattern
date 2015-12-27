import React from 'react';
import PageNumber from '../PageNumber';

export default class D004 extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <article className="d004">
        <PageNumber num='4' classes='' />
      </article>
    )
  }
}
