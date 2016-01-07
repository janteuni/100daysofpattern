import React from 'react';
import PageNumber from '../PageNumber';

export default class Day extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <article className={this.props.className}>
        <PageNumber num={this.props.num} classes={this.props.color} />
      </article>
    )
  }
}
