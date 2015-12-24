import React from 'react';

export default class PageNumber extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='center'>
        <div className={'number ' + this.props.classes}>{this.props.num}</div>
      </div>
    );
  }
}
