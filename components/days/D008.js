import React from 'react';
import PageNumber from '../PageNumber';

export default class D008 extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <article className="d008">
        <PageNumber num='8' classes='' />
      </article>
    )
  }
}
