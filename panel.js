import React from 'react';
import Button from './button';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };

    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.zero = this.zero.bind(this);
  }

  up() {
    this.setState({
      number: ++this.state.number,
    });
  }

  down() {
    this.setState({
      number: --this.state.number,
    });
  }

  zero() {
    this.setState({
      number: 0,
    });
  }

  render() {
    return (
      <div>
        <span>{ this.state.number }</span>
        <Button onClick={this.up} type="primary">Up</Button>
        <Button onClick={this.down} type="primary">Down</Button>
        <Button onClick={this.zero} type="primary">Zero</Button>
      </div>
    );
  }
};
