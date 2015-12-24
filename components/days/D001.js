import React from 'react';
import PageNumber from '../PageNumber';

export default class D001 extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <article className="d001">
        <PageNumber num='1' classes='' />
        <div className='flex middle'>
          <h1 className='center'>Hello<br />day One!</h1>
        </div>
      </article>
    )
  }
}
