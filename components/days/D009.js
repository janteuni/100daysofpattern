import React from 'react';
import PageNumber from '../PageNumber';

export default class D009 extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <article className="d009">
        <PageNumber num='9' classes='' />
      </article>
    )
  }
}
